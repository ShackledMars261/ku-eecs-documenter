/** @format */

import { BaseLanguageAnnotator } from "./baseLang";

class CSharpAnnotator implements BaseLanguageAnnotator {
  languageSlugs: string[] = ["cs", "csharp"];
  generateAnnotation(
    author: string,
    kuid: string,
    dateCreated: string,
    lab: string,
    dateLastModified: string,
    purpose: string,
  ): string {
    return `/*
Author: ${author}
KUID: ${kuid}
Date: ${dateCreated}
Lab: ${lab}
Last Modified: ${dateLastModified}
Purpose: ${purpose}
*/\n\n`;
  }
}

export const csharpAnnotator: CSharpAnnotator = new CSharpAnnotator();
