import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string [] = ["Spiderman", "Batman", "Linterna verde", "Flash"]; 
  
  heroeBorrado: string  = "" ;

BorrarHeroe(): void
{
 this.heroeBorrado = this.heroes.pop() || ""; 
}

}
