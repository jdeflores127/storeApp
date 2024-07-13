import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[highlights]',
  standalone: true
})

/*Permite hacer manipulaciones directas del dom*/
export class HighlightsDirective {

  element = inject(ElementRef);

  constructor() {}

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = "red";
  }

}
