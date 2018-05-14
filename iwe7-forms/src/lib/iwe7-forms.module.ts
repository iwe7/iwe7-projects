import { NgModule } from "@angular/core";
export const SCHEMA_THIRDS_COMPONENTS = [TinymceWidget, UEditorWidget];
import { Iwe7ShareModule } from "iwe7-share";
import { TinymceWidget } from "./widgets/tinymce/tinymce.widget";
import { UEditorWidget } from "./widgets/ueditor/ueditor.widget";

import { NzSchemaFormModule, WidgetRegistry } from "nz-schema-form";

import { UEditorModule } from "ngx-ueditor";
import { NgxTinymceModule } from "ngx-tinymce";

@NgModule({
  declarations: SCHEMA_THIRDS_COMPONENTS,
  entryComponents: SCHEMA_THIRDS_COMPONENTS,
  imports: [
    Iwe7ShareModule,
    NzSchemaFormModule,
    UEditorModule,
    NgxTinymceModule
  ],
  exports: [...SCHEMA_THIRDS_COMPONENTS]
})
export class Iwe7FormsModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
    widgetRegistry.register(UEditorWidget.KEY, UEditorWidget);
  }
}
