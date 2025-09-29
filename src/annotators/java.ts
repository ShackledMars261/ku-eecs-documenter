/** @format */

import { BaseLanguageAnnotator } from "./baseLang";

class JavaAnnotator implements BaseLanguageAnnotator {
  languageSlugs: string[] = ["java"];
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

export const javaAnnotator: JavaAnnotator = new JavaAnnotator();
