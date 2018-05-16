import { NgModule, LOCALE_ID, APP_INITIALIZER } from "@angular/core";
import { LocationStrategy, APP_BASE_HREF } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgZorroAntdModule } from "ng-zorro-antd";
import {
  DelonAuthModule,
  SimpleInterceptor,
  DelonAuthConfig
} from "@delon/auth";
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule
} from "@angular/common/http";

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
  return new TranslateHttpLoader(http, `assets/i18n/`, ".json");
}
import { DefaultInterceptor } from "./default.interceptor";
import { RouteReuseStrategy } from "@angular/router";
import { DelonABCModule, ReuseTabService, ReuseTabStrategy } from "@delon/abc";
import { StartupService } from "./startup.service";
// export const StartupServiceFactory = (startupService: StartupService) => {
//   return () => startupService.load();
// };

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DelonABCModule.forRoot(),
    // abc
    AlainThemeModule.forRoot(),
    NgZorroAntdModule.forRoot(),
    // abc end
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
      provide: APP_BASE_HREF,
      useValue: "/"
    },
    { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
    { provide: ALAIN_I18N_TOKEN, useClass: I18NService, multi: false },
    { provide: DelonAuthConfig, useFactory: delonAuthConfig },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: () => {
    //     return () => {};
    //   },
    //   multi: true,
    //   deps: [StartupService]
    // },
    {
      provide: RouteReuseStrategy,
      useClass: ReuseTabStrategy,
      deps: [ReuseTabService]
    },
    { provide: LOCALE_ID, useValue: "zh-Hans" }
  ]
})
export class Iwe7CoreModule {}
