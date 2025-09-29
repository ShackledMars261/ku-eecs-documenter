/** @format */

import * as vscode from "vscode";
import { annotationManager } from "../annotationManager";
import { fileManager } from "../fileManager";

export async function generateAnnotation() {
  let labNumber = await vscode.window.showInputBox({
    placeHolder: "The lab's number.",
    prompt: "Please enter the lab number.",
    value: "",
  });
  labNumber = labNumber ? labNumber : "<Error getting lab number.>";
  let description = await vscode.window.showInputBox({
    placeHolder: 'Ex. "Code for exercise 1".',
    prompt: "Please enter the purpose of the file.",
    value: "",
  });
  description =
    description ? description : "<Error getting description/purpose>";
  let currentFile = await fileManager.getCurrentFile();
  if (currentFile === undefined) {
    return;
  }
  annotationManager.generateAnnotation(
    labNumber,
    description,
    currentFile.lang,
  );
}
