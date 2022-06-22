import {
  Component,
  OnInit,
  Injectable,
  ChangeDetectorRef,
  ViewChild,
} from '@angular/core';
import { Empresa } from 'src/app/models/Empresa';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/Producto';
import { ProductService } from 'src/app/servies/product/product.service';

@Component({
  selector: 'app-seccion-productos',
  templateUrl: './seccion-productos.component.html',
  styleUrls: ['./seccion-productos.component.css'],
})
export class SeccionProductosComponent implements OnInit {
  categorias: any = [];
  empresa = new Empresa();
  productos: any = [];
  searchText = '';
  categoria = '';
  public searching = false;
  dataSource: MatTableDataSource<Producto>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private productsService: ProductService
  ) {
    //this.productos = this.empresa.getProductos();
    this.loadProducts();
  }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
    this.paginator._intl.itemsPerPageLabel = 'Productos por pagina';
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  loadProducts() {
    this.productsService.getAllProducts().subscribe((result) => {
      this.productos = result;
      console.log(this.productos);
      this.categorias = this.empresa.getCategorias();
      this.dataSource = new MatTableDataSource<Producto>(this.productos);

      this.changeDetectorRef.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
      this.paginator._intl.itemsPerPageLabel = 'Productos por pagina';
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  public showProductsbyCategory(categoria: string): any {
    this.categoria = this.removeDiacritics(categoria);
    this.dataSource.filter = categoria;
    const result = [];
    for (const product of this.productos) {
      if (
        (product.categoria != null && product.categoria != undefined || product.categoria.length >0)
        &&
        this.removeDiacritics(product.categoria.toString()).includes(this.categoria)
        || this.categoria == 'todos'

      ) {
        console.log(product.nombre.toLowerCase());
        result.push(product);
      }
    }
    this.dataSource = new MatTableDataSource<Producto>(result);
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  public showAll(): any {
    this.dataSource.data = this.empresa.getProductos();
  }

  public removeDiacritics(input): string {
    var tittles = 'ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç';
    var original = 'AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc';
    for (var i = 0; i < tittles.length; i++) {
      input = input
        .replace(tittles.charAt(i), original.charAt(i))
        .toLowerCase();
    }
    return input;
  }
}
