import { NgModule, Injector } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Iwe7BaseModule } from "iwe7-base";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "elements.nz-card",
        loadChildren: "./nz-card.module#NzCardModule"
      }
    ])
  ]
})
export class NzCardLazyModule {}
