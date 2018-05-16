import { Injector } from "@angular/core";
import { GlobalService } from "./global.service";
export abstract class Iwe7BaseModule {
  constructor(private injector: Injector) {
    const _g = this.injector.get(GlobalService);
    _g.init(injector);
  }
}
