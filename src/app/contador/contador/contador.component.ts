import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
         <h2>{{ titulo }}</h2>
        <!-- Cuando queremos  hacer un evento lo ponemos
            entre parentesis
        -->
        <h3>La base es : <strong> {{base}} </strong></h3>
        <button (click)=" acumular(base) "> +{{base}} </button>
        <span> {{ numero}} </span>
        <button (click)="acumular(-base)"> -{{base}} </button>
    
    `
})

export class ContadorComponent{
    
  titulo: string = 'hola Orita de mi vida';
  numero: number = 23;
  base: number  = 5;
  // metodos de la clase
 acumular( valor: number){
  this.numero += valor;
 }

 // base: number = 5;
}