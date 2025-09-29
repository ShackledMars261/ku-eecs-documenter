/** @format */

import { pythonAnnotator } from "./annotators/annotators";
import { BaseLanguageAnnotator } from "./annotators/baseLang";
import { fileManager } from "./fileManager";
import { globalState } from "./globalState";
import { getCurrentFormattedDate } from "./utils";

class AnnotationManager {
  languageAnnotators: BaseLanguageAnnotator[] = [pythonAnnotator];

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
