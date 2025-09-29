/** @format */

import { BaseLanguageAnnotator } from "./baseLang";

class RubyAnnotator implements BaseLanguageAnnotator {
  languageSlugs: string[] = ["rb", "ruby"];
  generateAnnotation(
    author: string,
    kuid: string,
    dateCreated: string,
    lab: string,
    dateLastModified: string,
    purpose: string,
  ): string {
    return `=begin
Author: ${author}
KUID: ${kuid}
Date: ${dateCreated}
Lab: ${lab}
Last Modified: ${dateLastModified}
Purpose: ${purpose}
=end\n\n`;
  }
}

export const rubyAnnotator: RubyAnnotator = new RubyAnnotator();
