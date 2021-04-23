//Importamos NG module que se almacena en angular core
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
// TAREA:
// Crear un modulo llamado ContadorModule
// declaracione y exportaciones

@NgModule({
    // Que cosas o componentes tiene este modulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // Lo que será visible en el exterior
    exports: [
        HeroeComponent,
        ListadoComponent
    ],
    // Aqui adentro van modulos solo modulos.
    imports:[
        CommonModule // Con esto podemos utilizar directivas de angular (ngif , ngfor) ETC.
    ] 

})

// Exportamos para poder utilizarlo fuera de este archivo
export class HeroesModule{ } 