import { Injector, NgModule } from "@angular/core";
import { Iwe7BaseModule } from "iwe7-base";
import { CommonModule } from "@angular/common";

import { NzCardComponent } from "./nz-card.component";
import { NzCardDirective } from "./nz-card.directive";

import { NzCardTabComponent } from "./nz-card-tab/nz-card-tab.component";
import { NzCardLoadingComponent } from "./nz-card-loading/nz-card-loading.component";
import { NzCardGridDirective } from "./nz-card-grid/nz-card-grid.directive";
import { NzCardMetaComponent } from "./nz-card-meta/nz-card-meta.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    NzCardDirective,
    NzCardGridDirective,
    NzCardLoadingComponent,
    NzCardComponent,
    NzCardTabComponent,
    NzCardMetaComponent
  ],
  exports: [
    NzCardDirective,
    NzCardGridDirective,
    NzCardLoadingComponent,
    NzCardComponent,
    NzCardTabComponent,
    NzCardMetaComponent
  ]
})
export class NzCardModule extends Iwe7BaseModule {
  constructor(injector: Injector) {
    super(injector);
  }
}
