import { Component } from '@angular/core';
import { CustomTableColumn } from 'src/shared/components/custom-table/custom-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-dynamic-table';
  columns!: CustomTableColumn<keyof TableData>[];
  data!: TableData[];
  constructor(){
    this.data = [
      {
        name: 'John',
        age: 25,
        nationality: 'American',
      },
      {
        name: 'Jane',
        age: 26,
        nationality: 'American',
      },
    ];
    this.columns = [
      {
        field: 'name',
        header: 'Name',
        width: '20%'
      },
      {
        field: 'age',
        header: 'Age',
        templateName: 'ageTemplate',
        type: 'custom',
      },
      {
        field: 'nationality',
        header: 'Nationality',
        type: 'custom',
        templateName: 'nationalityTemplate'
      }
    ];
  }
}
export interface TableData{
  name: string;
  age: number;
  nationality: string;
}
