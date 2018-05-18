import {
  Injector,
  Renderer2
} from "@angular/core";
import { Iwe7BaseDirective } from "./base-directive";
export abstract class Iwe7BaseComponent extends Iwe7BaseDirective {
  constructor(injector: Injector, prefixCls: string) {
    super(injector, prefixCls);
  }
}
