import { Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { fromPromise } from "rxjs/observable/fromPromise";
export abstract class Iwe7BaseModule {
  constructor(public injector: Injector) {}

  registerElement(selector, type) {
    let ngElementConstructor = createCustomElement(type, {
      injector: this.injector
    });
    customElements.define(selector, ngElementConstructor);
    return fromPromise(
      customElements.whenDefined(selector).then(res => selector)
    );
  }
}
