/** @format */

import { BaseLanguageAnnotator } from "./baseLang";

class PythonAnnotator implements BaseLanguageAnnotator {
  languageSlugs: string[] = ["python", "python3"];
  generateAnnotation(
    author: string,
    kuid: string,
    dateCreated: string,
    lab: string,
    dateLastModified: string,
    purpose: string,
  ): string {
    return `"""
Author: ${author}
KUID: ${kuid}
Date: ${dateCreated}
Lab: ${lab}
Last Modified: ${dateLastModified}
Purpose: ${purpose}
"""\n\n`;
  }
}

export const pythonAnnotator: PythonAnnotator = new PythonAnnotator();
