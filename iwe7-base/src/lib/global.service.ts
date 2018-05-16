import {
  Injectable,
  Type,
  Injector,
  ComponentFactoryResolver
} from "@angular/core";
import { NgElementConstructor } from "@angular/elements";
import { Observable, of } from "rxjs";
import { fromPromise } from "rxjs/observable/fromPromise";
import { createCustomElement } from "@angular/elements";
declare const window: any;

export function factoryGlobalService() {
  (<any>window).meepo =
    (<any>window).meepo || new GlobalService();
  return (<any>window).meepo;
}

@Injectable({
  providedIn: "root",
  useFactory: factoryGlobalService
})
export class GlobalService {
  map: Map<string, NgElementConstructor<any>> = new Map();

  constructor() {}

  init(injector: Injector) {
    const factoryResolver = injector.get(ComponentFactoryResolver);
    const _factories = (<any>factoryResolver)._factories;
    _factories.forEach((item, key) => {
      this.registerElement(item.selector, item.componentType, injector);
    });
  }

  set(key: string, item: NgElementConstructor<any>) {
    this.map.set(key, item);
  }

  get(key: string): NgElementConstructor<any> {
    return this.map.get(key);
  }

  registerElement(
    selector: string,
    type: Type<any>,
    injector: Injector
  ): Observable<string> {
    let element = customElements.get(selector);
    if (!element) {
      let ngElementConstructor = createCustomElement(type, {
        injector: injector
      });
      customElements.define(selector, ngElementConstructor);
      this.set(selector, ngElementConstructor);
      return fromPromise(
        customElements.whenDefined(selector).then(res => selector)
      );
    } else {
      return of(selector);
    }
  }
}
