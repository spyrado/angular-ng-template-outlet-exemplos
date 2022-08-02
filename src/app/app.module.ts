import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateOutletListComHtmlExampleModule } from './shared/components/template-outlet-list-com-html-example/template-outlet-list-com-html-example.module';
import { TemplateOutletListExampleModule } from './shared/components/template-outlet-list-example/template-outlet-list-example.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TemplateOutletListExampleModule,
    TemplateOutletListComHtmlExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
