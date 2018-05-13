import { Component, Injector } from '@angular/core';
import { <%= name %>Directive } from './<%= name %>.directive';
@Component({
  selector: "<%= name %>",
  templateUrl: "./<%= name %>.component.html",
  styleUrls: ["./<%= name %>.component.scss"]
})
export class <%= name %>Component extends <%= name %>Directive{
  constructor(injector){
    super(injector,"<%= name %>");
  }
}
