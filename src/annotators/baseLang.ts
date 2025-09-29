/** @format */

export interface BaseLanguageAnnotator {
  languageSlugs: string[];
  generateAnnotation(
    author: string,
    kuid: string,
    dateCreated: string,
    labNumber: string,
    dateLastModified: string,
    purpose: string,
  ): string;
}
