import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {
  DialogData,
  ListaProductosComponent,
} from '../Productos/lista-productos/lista-productos.component';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../models/Producto';
import { Descripcion } from '../models/descripcion';
import { ProductService } from '../servies/product/product.service';
import { Observable } from 'rxjs';
import { Empresa } from '../models/Empresa';
import {map, startWith} from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';


@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css'],
})
export class FormProductoComponent implements OnInit {
  @ViewChild('categoriaInput') categoriaInput: ElementRef<HTMLInputElement>;
  isAddProduct: boolean = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  nombresAsociados: string[] = [];
  categoriasProducto: string[] = [];
  caracteristicas: string [] = [];

  categoriaCtrl = new FormControl('');
  filteredCategorias: Observable<string[]>;
  categorias: string[] = [];
  empresa = new Empresa();
  allCategorias: string[] = this.empresa.getCategorias();
  
  formproducto: FormGroup;
  producto: Producto;
  descripcion: Descripcion;

  constructor(
    private productoService: ProductService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ListaProductosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.filteredCategorias = this.categoriaCtrl.valueChanges.pipe(
      startWith(null),
      map((categoria: string | null) => (categoria ? this._filterCategoria(categoria) : this.allCategorias.slice())),
    );
    this.producto = data.producto;
    if (
      this.producto != null &&
      this.producto.descripcion != null &&
      this.producto.descripcion.nombresAsociados != null
    ) {
      this.nombresAsociados = this.producto.descripcion.nombresAsociados;
      this.categorias = this.producto.categorias;
      this.caracteristicas = this.producto.descripcion.caracteristicas;
    }
    this.formproducto = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      //descripcion: [''],
      valorUnitario: [0, Validators.required],
      unidadMedida: ['', Validators.required],
      iva: ['', Validators.required],
      imagen: [''],
      categorias: [''],
      //Descripcion
      marca: [''],
      descripcion: [null],
      caracteristicas: [null],
      //nombresAsociados: [null],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    if (this.producto != null) {
      console.log(this.producto);
      this.isAddProduct = false;
      this.loadDataProductInDialog();
    } else {
      this.isAddProduct = true;
    }
  }

  addNombreAsociado(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our categoria
    if (value) {
      this.nombresAsociados.push(value);
    }
    // Clear the input value
    event.input.value = '';
  }

  removeSinonimo(sinonimo): void {
    const index = this.nombresAsociados.indexOf(sinonimo);
    if (index >= 0) {
      this.nombresAsociados.splice(index, 1);
    }
  }

  addCategorias(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our categoria
    if (value) {
      this.categorias.push(value);
    }

    // Clear the input value
    event.input.value = '';

    this.categoriaCtrl.setValue(null);
  }

  removeCategorias(categoria: string): void {
    const index = this.categorias.indexOf(categoria);

    if (index >= 0) {
      this.categorias.splice(index, 1);
    }
  }

  selectedCategorias(event: MatAutocompleteSelectedEvent): void {
    this.categorias.push(event.option.viewValue);
    this.categoriaInput.nativeElement.value = '';
    this.categoriaCtrl.setValue(null);
  }

  private _filterCategoria(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCategorias.filter(categoria => categoria.toString().toLowerCase().includes(filterValue));
  }

  addCaracteristica(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our categoria
    if (value) {
      this.caracteristicas.push(value);
    }
    // Clear the input value
    event.input.value = '';
  }

  removeCaracteristica(caracteristica): void {
    const index = this.caracteristicas.indexOf(caracteristica);
    if (index >= 0) {
      this.caracteristicas.splice(index, 1);
    }
  }

  addProduct() {
    if (this.formproducto.valid) {
      console.log(this.formproducto)
      this.descripcion = new Descripcion();
      this.descripcion.descripcion = this.formproducto.get('descripcion').value;
      this.descripcion.marca = this.formproducto.get('marca')?.value;
      this.descripcion.caracteristicas = this.caracteristicas;
      this.descripcion.nombresAsociados = this.nombresAsociados;

      this.producto = new Producto();
      this.producto.nombre = this.formproducto.get('nombre').value;
      this.producto.descripcion = this.descripcion;
      this.producto.valorUnitario =
        this.formproducto.get('valorUnitario').value;
      this.producto.unidadMedida = this.formproducto.get('unidadMedida').value;
      this.producto.iva = this.formproducto.get('iva').value;
      this.producto.imagen = this.formproducto.get('imagen').value;
      this.producto.categorias = this.categorias;
      //
      this.productoService.saveProduct(this.producto).subscribe(
        (result) => {
          console.log('agregado');
          //se oculta el dialogo
          //se puede mostrar un popup de confirmacion
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  loadDataProductInDialog() {
    this.descripcion = this.producto.descripcion;
    this.formproducto.get('id').setValue(this.producto.id);
    this.formproducto.get('nombre').setValue(this.producto.nombre);
    //this.formproducto.get('descripcion').setValue(this.producto.descripcion)
    this.formproducto
      .get('valorUnitario')
      .setValue(this.producto.valorUnitario);
    this.formproducto.get('unidadMedida').setValue(this.producto.unidadMedida);
    this.formproducto
      .get('iva')
      .setValue(
        Number(
          this.producto.iva != null ? this.producto.iva.replace(/,/g, '.') : 0
        )
      );
    this.formproducto.get('imagen').setValue(this.producto.imagen);
    this.formproducto.get('categorias').setValue(this.producto.categorias);

    this.formproducto.get('marca').setValue(this.descripcion.marca);
    this.formproducto.get('descripcion').setValue(this.descripcion.descripcion);
    this.formproducto
      .get('caracteristicas')
      .setValue(this.descripcion.caracteristicas);
    //     this.formproducto
    //     .get('nombresAsociados')
    //     .setValue(this.descripcion.nombresAsociados);
  }

  updateProduct() {
    this.producto.id = this.formproducto.get('id').value;
    this.descripcion.marca = this.formproducto.get('marca').value;
    this.descripcion.descripcion = this.formproducto.get('descripcion').value;
    this.descripcion.caracteristicas = this.caracteristicas;
    this.descripcion.nombresAsociados = this.nombresAsociados;

    this.producto.nombre = this.formproducto.get('nombre').value;
    this.producto.descripcion = this.descripcion;
    this.producto.valorUnitario = this.formproducto.get('valorUnitario').value;
    this.producto.unidadMedida = this.formproducto.get('unidadMedida').value;
    this.producto.iva = this.formproducto.get('iva').value;
    this.producto.imagen = this.formproducto.get('imagen').value;
    this.producto.categorias = this.categorias;
    //
    this.productoService.updateProduct(this.producto).subscribe(
      (result) => {
        console.log('actualizado');
        //se oculta el dialogo
        //se puede mostrar un popup de confirmacion
      },
      (error) => {
        //hacer alguna advertencia
        //console.warn(error);
      }
    );
  }
}
