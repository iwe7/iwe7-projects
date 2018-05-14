import { Injector, NgModule } from "@angular/core";
import { Iwe7BaseModule } from "iwe7-base";
import { CommonModule } from "@angular/common";

import {  <%= classify(name) %>Component } from './<%= name %>.component';
import {  <%= classify(name) %>Directive } from './<%= name %>.directive';


@NgModule({
  imports: [CommonModule],
  declarations: [
    <%= classify(name) %>Directive,
    <%= classify(name) %>Component
  ],
  exports: [
    <%= classify(name) %>Directive
  ],
  entryComponents: [
    <%= classify(name) %>Component
  ]
})
export class <%= classify(name) %>Module extends Iwe7BaseModule {
  constructor(injector: Injector) {
    super(injector);
    this.registerElement("<%= name %>", <%= classify(name) %>Component);
  }
}
