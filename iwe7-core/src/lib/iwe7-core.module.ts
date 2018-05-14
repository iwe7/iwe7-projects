import { NgModule } from "@angular/core";
import { LocationStrategy, APP_BASE_HREF } from "@angular/common";
import { We7LocationStrategy } from "iwe7-router";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgZorroAntdModule } from "ng-zorro-antd";
import {
  DelonAuthModule,
  SimpleInterceptor,
  DelonAuthConfig
} from "@delon/auth";
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";

export function delonAuthConfig(): DelonAuthConfig {
  return Object.assign(new DelonAuthConfig(), <DelonAuthConfig>{
    login_url: "/passport/login"
  });
}

import { DelonACLModule } from "@delon/acl";
import { DelonFormModule } from "@delon/form";
import { DelonCacheModule } from "@delon/cache";
import { DelonUtilModule } from "@delon/util";
import { AlainThemeModule } from "@delon/theme";

import { registerLocaleData } from "@angular/common";
import localeZhHans from "@angular/common/locales/zh-Hans";
registerLocaleData(localeZhHans);

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ALAIN_I18N_TOKEN } from "@delon/theme";
import { I18NService } from "./i18n.service";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `assets/i18n/`, '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AlainThemeModule.forRoot(),
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot([]),
    DelonAuthModule.forRoot(),
    DelonACLModule.forRoot(),
    DelonFormModule.forRoot(),
    DelonCacheModule.forRoot(),
    DelonUtilModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: We7LocationStrategy
    },
    {
      provide: APP_BASE_HREF,
      useValue: "/"
    },
    { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
    { provide: DelonAuthConfig, useFactory: delonAuthConfig }
  ]
})
export class Iwe7CoreModule {}
