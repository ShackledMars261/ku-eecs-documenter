/** @format */

import { BaseLanguageAnnotator } from "./baseLang";

class MySQLAnnotator implements BaseLanguageAnnotator {
  languageSlugs: string[] = ["mysql", "sql"];
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

export const mysqlAnnotator: MySQLAnnotator = new MySQLAnnotator();
