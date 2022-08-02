import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateOutletListExampleComponent } from './template-outlet-list-example.component';



@NgModule({
  declarations: [
    TemplateOutletListExampleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateOutletListExampleComponent
  ]
})
export class TemplateOutletListExampleModule { }
