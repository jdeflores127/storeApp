import { Component, Input, input, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input() duration: number = 0;
  @Input() message: string = '';
  counter = signal(0);
  
  intervalRef : any;

  constructor(){
    /*no puede ser asincrono y no incluir promesas async, etc
    Usado para crear valores por defecto*/
    console.log('Constructor: Lo primero que se ejecuta, se realiza antes de la renderizacion');
    console.log('-'.repeat(10));
  }
  
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChange: se ejecuta antes y durante el render')
    console.log('-'.repeat(10));
    console.log(changes);
    /*Se corre cuando detecta cambios en los input properties*/
    /*Por defecto, cuando cambia alguna variable este metodo se ejecuta, si queremos filtrar 
    una cierta variable debemos hacer lo siguiente */
    const changesEvent = changes['duration'];
    if(changesEvent){
      console.log('duration cambio');
    }

    
  }
  
  ngOnInit() {
    //Se ejecuta despues del render, solo se va a ejecitar una vez
    /*Aca se acostumbra hacer las llamadas asincronas, fetch, llamadas a API */
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log(`El estado de duration es ${this.duration}`);
    console.log(`El estado de message es ${this.message}`);
    /*El ng destroy no dentendrá el contador, importante considerar los memory leaks */
    this.intervalRef = setInterval(()=>{
      console.log("contador actualizado");
      this.counter.update(counter => counter+1);
    }, 1000);
  }
  
  ngAfterViewInit(){
    //Tambien se ejeuta despues del render y pregunta si los hijos ya fueron renderizados
    console.log(`hijos instanciados`);
    
  }

  ngOnDestroy(){
    console.log("Cuando el componente se destruye");    
    clearInterval(this.intervalRef);
  }
}
