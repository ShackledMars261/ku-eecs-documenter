/** @format */

import { BaseLanguageAnnotator } from "./baseLang";

class TypescriptAnnotator implements BaseLanguageAnnotator {
  languageSlugs: string[] = ["ts", "typescript", "tsx"];
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

export const typescriptAnnotator: TypescriptAnnotator =
  new TypescriptAnnotator();
