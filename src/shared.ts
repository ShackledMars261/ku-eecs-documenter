/** @format */

export const langExt: Map<string, string> = new Map([
  ["bash", "sh"],
  ["c", "c"],
  ["cpp", "cpp"],
  ["csharp", "cs"],
  ["golang", "go"],
  ["java", "java"],
  ["javascript", "js"],
  ["kotlin", "kt"],
  ["mysql", "sql"],
  ["php", "php"],
  ["python3", "py"],
  ["python", "py"],
  ["ruby", "rb"],
  ["rust", "rs"],
  ["scala", "scala"],
  ["swift", "swift"],
  ["typescript", "ts"],
]);

export interface OpenedFile {
  fileContents: string;
  filename: string;
  titleSlug: string;
  lang: string;
}

export interface AnnotationFields {
  author: string;
  kuid: number;
  dateCreated: string;
  labNumber: number;
  lastModified: string;
  purpose: string;
}
