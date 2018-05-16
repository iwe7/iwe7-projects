import { Injector } from "@angular/core";
import { ElementService } from "./global.service";
export abstract class Iwe7BaseModule {
  constructor(public injector: Injector) {
    const _g = this.injector.get(ElementService);
    _g.init(injector);
  }
}
