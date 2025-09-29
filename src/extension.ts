/** @format */

import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "ku-eecs-lab-annotator" is now active!',
  );

  const disposable = vscode.commands.registerCommand(
    "ku-eecs-lab-annotator.helloWorld",
    () => {
      vscode.window.showInformationMessage(
        "Hello World from ku-eecs-lab-annotator!",
      );
    },
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
