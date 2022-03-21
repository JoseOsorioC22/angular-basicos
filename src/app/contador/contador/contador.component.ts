import {Component} from '@angular/core'; 


@Component(
    {
        selector: 'app-contador',
        template: `
        <h1>{{numero}}</h1>

<br>
<h3>La base es: <strong>{{base}}</strong> </h3>

<span (click)="acomular(base)" ><button> {{base}} </button></span>
<span>{{numero}}</span>
<span (click)="acomular(-base)"><button> - {{base}} </button></span>
        `
    }
)
export class ContadorComponent
{
    title = 'contador app';
    numero: number = 15; 
    base: number = 5; 
  
  
  acomular(valor:  number)
  {
    this.numero += valor; 
  }
  

}