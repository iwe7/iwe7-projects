import { pipe } from "rxjs";
import { map } from "rxjs/operators";
import { Transform } from "../../../brocc/transform";
import * as log from "../../../util/log";
import { transformSourceFiles } from "../../../ngc/transform-source-files";
import { transformComponentSourceFiles } from "../../../ts/ng-component-transformer";
import {
  isEntryPointInProgress,
  fileUrl,
  isTypeScriptSources,
  TypeScriptSourceNode,
  EntryPointNode
} from "../../nodes";

export const transformSourcesTransform: Transform = pipe(
  map(graph => {
    const entryPoint = graph.find(isEntryPointInProgress()) as EntryPointNode;
    log.debug(
      `Transforming TypeScript sources for ${
        entryPoint.data.entryPoint.moduleId
      }`
    );

    // Transformer that inlines template and style data
    const inlineResources = transformComponentSourceFiles({
      template: ({ templateFilePath }) => {
        return entryPoint.find(node => node.url === fileUrl(templateFilePath))
          .data.content;
      },
      stylesheet: ({ styleFilePath }) => {
        return entryPoint.find(node => node.url === fileUrl(styleFilePath)).data
          .content;
      }
    });

    // TypeScriptSourcesNode
    const tsSources = entryPoint.find(
      isTypeScriptSources
    ) as TypeScriptSourceNode;
    const previousTransform = tsSources.data;

    // Modify the TypeScript source files
    tsSources.data = transformSourceFiles(previousTransform, [inlineResources]);

    // Dispose the previous transformation result
    previousTransform.dispose();

    return graph;
  })
);
