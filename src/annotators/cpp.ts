/** @format */

import { BaseLanguageAnnotator } from "./baseLang";

class CPPAnnotator implements BaseLanguageAnnotator {
  languageSlugs: string[] = ["c++", "cpp", "cplusplus"];
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

export const cppAnnotator: CPPAnnotator = new CPPAnnotator();
