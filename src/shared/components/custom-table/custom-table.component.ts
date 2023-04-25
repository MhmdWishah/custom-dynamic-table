import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, OnInit, Input, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import { customDirectives } from 'src/shared/directives/directives';
import { TemplateNameDirective } from 'src/shared/directives/templateName.directive';
import { customPipes } from 'src/shared/pipes/pipes';
import { TemplateByTemplateNamePipe } from '../../pipes/templateByTemplateName.pipe';

@Component({
  selector: 'custom-table[columns][data]',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['columns', 'data', 'tableClasses'],
  standalone: false,
})
export class CustomTableComponent implements OnInit {
  columns!: CustomTableColumn<string>[];
  data!: any[];
  tableClasses: string = "table table-light table-hover table-bordered";
  @ContentChildren(TemplateNameDirective) templates!: QueryList<TemplateNameDirective>;
  constructor() {
  }

  ngOnInit(): void {
  }

}
export interface CustomTableColumn<Field>{
  field?: Field;
  header?: string;
  headerClasses?: string;
  fieldContainerClasses?: string;
  fieldTextClasses?: string;
  type?: 'text' | 'custom';
  iconClass?: string;
  width?: string;
  templateName?: string;
  btnFunction?: Function;
  toolTip?: string;
  headerToolTip?: string;
}
