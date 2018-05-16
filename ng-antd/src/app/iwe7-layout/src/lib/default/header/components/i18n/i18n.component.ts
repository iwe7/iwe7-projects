import { Component, OnInit, Inject } from "@angular/core";
import {
  SettingsService,
  MenuService,
  TitleService,
  ALAIN_I18N_TOKEN
} from "@delon/theme";
import { I18NService } from "iwe7-core";

@Component({
  selector: "header-i18n",
  templateUrl: "./i18n.component.html",
  styleUrls: ["./i18n.component.css"]
})
export class I18nComponent {
  langs: any[];

  constructor(
    public settings: SettingsService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService
  ) {
    this.langs = this.i18n.getLangs();
  }

  change(lang: string) {
    this.i18n.use(lang);
    this.settings.setLayout("lang", lang);
  }
}
