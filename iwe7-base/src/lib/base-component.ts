import {
  OnInit,
  Injector,
  Renderer2,
  ElementRef,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  SimpleChange
} from "@angular/core";
import { forEach, defaultsDeep, kebabCase } from "lodash";
import { Iwe7IcssService } from "iwe7-icss";
import { BehaviorSubject } from "rxjs";
import { Iwe7BaseDirective } from "./base-directive";
export abstract class Iwe7BaseComponent extends Iwe7BaseDirective {
  constructor(injector: Injector, prefixCls: string) {
    super(injector, prefixCls);
  }
}
