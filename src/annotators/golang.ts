/** @format */

import { BaseLanguageAnnotator } from "./baseLang";

class GolangAnnotator implements BaseLanguageAnnotator {
  languageSlugs: string[] = ["go", "golang"];
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

export const golangAnnotator: GolangAnnotator = new GolangAnnotator();
