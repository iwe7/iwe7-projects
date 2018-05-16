import { InjectionToken, Provider, ReflectiveInjector } from "injection-js";
import { of as observableOf } from "rxjs";
import { take, map, catchError } from "rxjs/operators";
import { BuildGraph } from "../brocc/build-graph";
import { Transform } from "../brocc/transform";
import { TsConfig } from "../ts/tsconfig";
import * as log from "../util/log";
import { provideTsConfig } from "./init/init-tsconfig.di";
import { ENTRY_POINT_PROVIDERS } from "./entry-point.di";
import { PACKAGE_TRANSFORM, PACKAGE_PROVIDERS } from "./package.di";
import { provideProject } from "./project.di";

/**
 * The original ng-packagr implemented on top of a rxjs-ified and di-jectable transformation pipeline.
 *
 * See the `docs/transformations.md` for more prose description.
 *
 * @link https://github.com/dherges/ng-packagr/pull/572
 */
export class NgPackagr {
  private buildTransform: InjectionToken<Transform> = PACKAGE_TRANSFORM.provide;
  constructor(private providers: Provider[]) { }
  public forProject(project: string): NgPackagr {
    this.providers.push(provideProject(project));
    return this;
  }
  public withProviders(providers: Provider[]): NgPackagr {
    this.providers = [...this.providers, ...providers];
    return this;
  }
  public withTsConfig(defaultValues: TsConfig | string): NgPackagr {
    this.providers.push(provideTsConfig(defaultValues));
    return this;
  }
  public withBuildTransform(transform: InjectionToken<Transform>): NgPackagr {
    this.buildTransform = transform;
    return this;
  }
  public build(): Promise<void> {
    const injector = ReflectiveInjector.resolveAndCreate(this.providers);
    const buildTransformOperator = injector.get(this.buildTransform);
    return observableOf(new BuildGraph())
      .pipe(
        buildTransformOperator,
        take(1),
        catchError(err => {
          log.error(err);
          throw err;
        }),
        map(() => { })
      )
      .toPromise();
  }
}

export const ngPackagr = (): NgPackagr =>
  new NgPackagr([
    ...PACKAGE_PROVIDERS,
    ...ENTRY_POINT_PROVIDERS
  ]);
