import { Directive, Injector } from "@angular/core";
import { Iwe7BaseDirective } from "iwe7-base";
@Directive({
  selector: "[<%= name %>]"
})
export class <%= classify(name) %>Directive extends Iwe7BaseDirective {
  constructor(injector: Injector) {
    super(injector, "<%= name %>");
  }
}
