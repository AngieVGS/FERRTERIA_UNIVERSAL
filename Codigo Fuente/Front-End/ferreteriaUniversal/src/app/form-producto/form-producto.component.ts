import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, ListaProductosComponent } from '../Productos/lista-productos/lista-productos.component';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {
  isAddProduct :boolean = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  nombresAsociados: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<ListaProductosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.nombresAsociados.push(value);
    }
    // Clear the input value
    event.input.value = '';
  }

  remove(sinonimo): void {
    const index = this.nombresAsociados.indexOf(sinonimo);

    if (index >= 0) {
      this.nombresAsociados.splice(index, 1);
    }
  }

}
