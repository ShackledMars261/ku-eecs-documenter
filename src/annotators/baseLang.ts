/** @format */

export interface BaseLanguageAnnotator {
  languageSlugs: string[];
  generateAnnotation(
    author: string,
    kuid: string,
    dateCreated: string,
    lab: string,
    dateLastModified: string,
    purpose: string,
  ): string;
}
