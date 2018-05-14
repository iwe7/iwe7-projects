import { join, normalize, Path, basename, dirname } from "@angular-devkit/core";
import * as strings from "@angular-devkit/core/src/utils/strings";
import {
  apply,
  mergeWith,
  move,
  Rule,
  Source,
  template,
  url
} from "@angular-devkit/schematics";
import { Schema as PipeOptions } from "./schema";

export interface ParseOptions {
  name: string;
  path?: string;
}

export interface Location {
  name: string;
  path: Path;
}

export class NameParser {
  constructor() {}

  public parse(options: ParseOptions): Location {
    const nameWithoutPath: string = basename(options.name as Path);
    const namePath: string = dirname((options.path === undefined
      ? ""
      : options.path
    )
      .concat("/")
      .concat(options.name) as Path);
    return {
      name: nameWithoutPath,
      path: normalize("/".concat(namePath))
    };
  }
}

export default function (options: PipeOptions): Rule {
  options = transform(options);
  return mergeWith(generate(options));
}

function transform(options: PipeOptions): PipeOptions {
  const target: PipeOptions = Object.assign({}, options);
  target.path =
    target.path !== undefined
      ? join(normalize("src"), target.path)
      : normalize("src");
  const location: Location = new NameParser().parse(target);
  target.name = strings.dasherize(location.name);
  target.path = strings.dasherize(location.path);
  return target;
}

function generate(options: PipeOptions): Source {
  return apply(url("./files"), [
    template({
      ...strings,
      ...options
    }),
    move(join(options.path as Path, options.name))
  ]);
}
