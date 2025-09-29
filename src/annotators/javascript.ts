/** @format */

import { BaseLanguageAnnotator } from "./baseLang";

class JavascriptAnnotator implements BaseLanguageAnnotator {
  languageSlugs: string[] = ["javascript", "js", "jsx"];
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

export const javascriptAnnotator: BaseLanguageAnnotator =
  new JavascriptAnnotator();
