import { Component, Injector } from "@angular/core";
import { <%= classify(name) %>Directive } from "./<%= name %>.directive";
@Component({
  selector: "<%= name %>",
  templateUrl: "./<%= name %>.component.html",
  styleUrls: ["./<%= name %>.component.scss"]
})
export class <%= classify(name) %>Component extends <%= classify(name) %>Directive {
  constructor(injector: Injector) {
    super(injector);
  }
}
