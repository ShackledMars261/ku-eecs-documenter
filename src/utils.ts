/** @format */

import * as vscode from "vscode";
import { langExt } from "./shared";

export function findKeyByValue<K, V>(
  map: Map<K, V>,
  valueToFind: V,
): K | undefined {
  for (let [key, value] of map.entries()) {
    if (value === valueToFind) {
      return key;
    }
  }
  return undefined; // Value not found
}

export function genFileExt(language: string): string {
  const ext: string | undefined = langExt.get(language);
  if (!ext) {
    throw new Error(`The language "${language}" is not supported.`);
  }
  return ext;
}

export function getCurrentFormattedDate(): string {
  let extConfig: vscode.WorkspaceConfiguration =
    vscode.workspace.getConfiguration("ku-eecs-lab-annotator");
  const dateFormat = extConfig.get<string>("dateFormat", "");

  const currentDate: Date = new Date();
  const year: number = currentDate.getFullYear();
  const month: string = (currentDate.getMonth() + 1)
    .toString()
    .padStart(2, "0");
  const day: string = currentDate.getDate().toString().padStart(2, "0");

  const customFormattedDate: string =
    dateFormat === "mm/dd/yyyy" ?
      `${month}/${day}/${year}`
    : `${day}/${month}/${year}`;
  return customFormattedDate;
}
