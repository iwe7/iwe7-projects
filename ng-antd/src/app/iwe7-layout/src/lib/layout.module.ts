import { Injector, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Iwe7BaseModule } from "iwe7-base";
import { Iwe7ShareModule } from "iwe7-share";

import { CommonModule } from "@angular/common";
import { LayoutDefaultComponent } from "./default/default.component";
import { SidebarComponent } from "./default/sidebar/sidebar.component";
import { HeaderComponent } from "./default/header/header.component";
import { FullscreenComponent } from "./default/header/components/fullscreen/fullscreen.component";
import { I18nComponent } from "./default/header/components/i18n/i18n.component";
import { IconComponent } from "./default/header/components/icon/icon.component";
import { NotifyComponent } from "./default/header/components/notify/notify.component";
import { SearchComponent } from "./default/header/components/search/search.component";
import { StorageComponent } from "./default/header/components/storage/storage.component";
import { TaskComponent } from "./default/header/components/task/task.component";
import { UserComponent } from "./default/header/components/user/user.component";
import { LayoutFullScreenComponent } from "./fullscreen/fullscreen.component";
import { PassportComponent } from "./passport/passport.component";
export const components = [
  LayoutDefaultComponent,
  SidebarComponent,
  HeaderComponent,
  FullscreenComponent,
  I18nComponent,
  IconComponent,
  NotifyComponent,
  SearchComponent,
  StorageComponent,
  TaskComponent,
  UserComponent,
  LayoutFullScreenComponent,
  PassportComponent
];
@NgModule({
  imports: [CommonModule, Iwe7ShareModule],
  declarations: [...components],
  exports: [...components],
  entryComponents: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LayoutModule extends Iwe7BaseModule {
  constructor(injector: Injector) {
    super(injector);
  }
}
