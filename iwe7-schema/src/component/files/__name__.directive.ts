import { Directive, Injector } from '@angular/core';
import { Iwe7BaseDirective } from 'iwe7-base';
@Component({
  selector: "[<%= name %>]"
})
export class <%= name %>Directive extends Iwe7BaseDirective {
  constructor(injector){
    super(injector,"<%= name %>");
  }
}
