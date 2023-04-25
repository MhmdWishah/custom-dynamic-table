import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomTableComponent } from "./components/custom-table/custom-table.component";
import { customDirectives } from "./directives/directives";
import { customPipes } from "./pipes/pipes";

@NgModule({
  imports: [
    CommonModule,
    ...customDirectives,
    ...customPipes
  ],
  exports: [
    CustomTableComponent,
    ...customDirectives,
    ...customPipes
  ],
  declarations: [
    CustomTableComponent,
  ],
  providers: [],
})
export class SharedModule { }
