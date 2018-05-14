import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

const COMPONENTS = [];
const DIRECTIVES = [];

@NgModule({
  imports: [HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: [HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule]
})
export class Iwe7ShareModule {}
