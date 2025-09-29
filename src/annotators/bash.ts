/** @format */

import { BaseLanguageAnnotator } from "./baseLang";

class BashAnnotator implements BaseLanguageAnnotator {
  languageSlugs: string[] = ["bash", "sh"];
  generateAnnotation(
    author: string,
    kuid: string,
    dateCreated: string,
    lab: string,
    dateLastModified: string,
    purpose: string,
  ): string {
    return `# Author: ${author}
# KUID: ${kuid}
# Date: ${dateCreated}
# Lab: ${lab}
# Last Modified: ${dateLastModified}
# Purpose: ${purpose}\n\n`;
  }
}

export const bashAnnotator: BashAnnotator = new BashAnnotator();
