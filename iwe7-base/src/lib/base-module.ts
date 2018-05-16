import { Injector, Type, ComponentFactoryResolver } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { Observable, of } from "rxjs";
import { fromPromise } from "rxjs/observable/fromPromise";
export abstract class Iwe7BaseModule {
  constructor(private injector: Injector) {
    const factoryResolver = this.injector.get(ComponentFactoryResolver);
    const _factories = (<any>factoryResolver)._factories;
    _factories.forEach((item, key) => {
      this.registerElement(item.selector, item.componentType);
    });
  }

  registerElement(selector: string, type: Type<any>): Observable<string> {
    // 检查是否已经存在
    let element = customElements.get(selector);
    if (!element) {
      let ngElementConstructor = createCustomElement(type, {
        injector: this.injector
      });
      customElements.define(selector, ngElementConstructor);
      return fromPromise(
        customElements.whenDefined(selector).then(res => selector)
      );
    } else {
      return of(selector);
    }
  }
}
