/** @format */

import * as vscode from "vscode";
import { langExt, OpenedFile } from "./shared";
import { findKeyByValue } from "./utils";

class FileManager {
  constructor() {}

  public async initialize(): Promise<void> {}

  public async getCurrentFile(): Promise<OpenedFile | undefined> {
    if (vscode.workspace.workspaceFolders !== undefined) {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const fileContents = editor.document.getText();
        const filename =
          editor.document.fileName.split("/")[
            editor.document.fileName.split("/").length - 1
          ];
        let titleSlug = filename.split(".")[0];
        const lang = this.getFileLanguage(filename);
        let openFile: OpenedFile = {
          fileContents: fileContents,
          filename: filename,
          titleSlug: titleSlug,
          lang: lang,
        };
        return openFile;
      } else {
        vscode.window.showErrorMessage("No open editor found.");
      }
    } else {
      vscode.window.showErrorMessage("Please open a folder and try again.");
    }
  }

  public writeAnnotationToCurrentFile(annotation: string): void {
    if (vscode.workspace.workspaceFolders !== undefined) {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        editor.edit((editBuilder) => {
          const startOfDocument = new vscode.Position(0, 0);
          editBuilder.insert(startOfDocument, annotation);
        });
      } else {
        vscode.window.showErrorMessage("No open editor found.");
      }
    } else {
      vscode.window.showErrorMessage("Please open a folder and try again.");
    }
  }

  public getFileLanguage(fileName: string) {
    const fileExt = fileName.split(".")[fileName.split(".").length - 1];
    return findKeyByValue(langExt, fileExt) || "javascript";
  }
}

export const fileManager: FileManager = new FileManager();
