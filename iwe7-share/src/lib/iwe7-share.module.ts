import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
  declarations: [],
  exports: [HttpClientModule, FormsModule, ReactiveFormsModule]
})
export class Iwe7ShareModule {}
