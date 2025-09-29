/** @format */

import { BaseLanguageAnnotator } from "./baseLang";

class RustAnnotator implements BaseLanguageAnnotator {
  languageSlugs: string[] = ["rust", "rs"];
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

export const rustAnnotator: RustAnnotator = new RustAnnotator();
