import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "elements.<%= name %>",
        loadChildren: "./<%= name %>.module#<%= classify(name) %>Module"
      }
    ])
  ],
  exports: [],
  declarations: [],
  providers: []
})
export class <%= classify(name) %>LazyModule {}
