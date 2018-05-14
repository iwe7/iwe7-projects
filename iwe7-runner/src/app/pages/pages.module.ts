import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {
  UrlSegment,
  UrlSegmentGroup,
  Route,
  UrlMatchResult
} from "@angular/router";

import { parse, parseUrl, extract, stringify } from "query-string";

export function getMatcher(_do: string) {
  let parseQuery = parse(location.search);
  return parseQuery.do === _do;
}

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "web",
        children: [
          {
            path: "index",
            loadChildren: "./index/index.page.module#IndexPageModule"
          },
          {
            path: "member",
            loadChildren: "./member/member.page.module#MemberPageModule"
          }
        ]
      }
    ])
  ],
  exports: [],
  declarations: [],
  providers: []
})
export class PagesModule {}
