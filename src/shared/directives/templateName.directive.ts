import { Directive, Input, TemplateRef, OnInit } from '@angular/core';

@Directive({
  selector: '[templateName]',
  exportAs: 'temName',
  standalone: true,
  inputs: ['templateName']
})
export class TemplateNameDirective {
  templateName!: string;
  constructor(public templateRef: TemplateRef<any>) {
  }

}
