/** @format */
import * as vscode from "vscode";
import { globalState } from "../globalState";

export async function setup() {
  let author = await vscode.window.showInputBox({
    placeHolder: 'Value for the "Author" field.',
    prompt: "Please enter your first and last name.",
    value: "",
  });
  author = author ? author : "";
  if (author !== "") {
    globalState.setAuthor(author);
  }
  let kuidResp = await vscode.window.showInputBox({
    placeHolder: 'Value for the "KUID" field.',
    prompt: "Please enter your KUID number.",
    value: "",
  });
  let kuid = kuidResp ? Number(kuidResp) : -1;
  if (kuid !== -1) {
    globalState.setKUID(kuid);
  }
  vscode.window.showInformationMessage("Setup finished successfully!");
}
