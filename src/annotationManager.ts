/** @format */

import {
  bashAnnotator,
  cAnnotator,
  cppAnnotator,
  csharpAnnotator,
  golangAnnotator,
  javaAnnotator,
  javascriptAnnotator,
  kotlinAnnotator,
  mysqlAnnotator,
  phpAnnotator,
  pythonAnnotator,
  rubyAnnotator,
  rustAnnotator,
  scalaAnnotator,
  swiftAnnotator,
  typescriptAnnotator,
} from "./annotators/annotators";
import { BaseLanguageAnnotator } from "./annotators/baseLang";
import { fileManager } from "./fileManager";
import { globalState } from "./globalState";
import { getCurrentFormattedDate } from "./utils";

class AnnotationManager {
  languageAnnotators: BaseLanguageAnnotator[] = [
    golangAnnotator,
    pythonAnnotator,
    bashAnnotator,
    cAnnotator,
    cppAnnotator,
    csharpAnnotator,
    javaAnnotator,
    javascriptAnnotator,
    kotlinAnnotator,
    mysqlAnnotator,
    phpAnnotator,
    rubyAnnotator,
    rustAnnotator,
    scalaAnnotator,
    swiftAnnotator,
    typescriptAnnotator,
  ];

  constructor() {}

  public async initialize(): Promise<void> {}

  public generateAnnotation(
    labNumber: string,
    purpose: string,
    langSlug: string,
  ): void {
    let author =
      globalState.getAuthor() ??
      "<Error getting Author. Try running the setup command.>";
    let kuid =
      String(globalState.getKUID()) ??
      "<Error getting KUID. Try running the setup command.>";
    let lab: string = `lab${labNumber.padStart(2, "0")}`;
    let currentDate: string = getCurrentFormattedDate();
    this.languageAnnotators.forEach((annotator) => {
      if (annotator.languageSlugs.includes(langSlug)) {
        let annotation: string = annotator.generateAnnotation(
          author,
          kuid,
          currentDate,
          lab,
          currentDate,
          purpose,
        );
        fileManager.writeAnnotationToCurrentFile(annotation);
      }
    });
  }
}

export const annotationManager: AnnotationManager = new AnnotationManager();
