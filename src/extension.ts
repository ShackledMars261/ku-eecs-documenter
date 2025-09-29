/** @format */

import * as vscode from "vscode";
import { annotationManager } from "./annotationManager";
import * as commands from "./commands/commands";
import { fileManager } from "./fileManager";
import { globalState } from "./globalState";

export function activate(context: vscode.ExtensionContext) {
  globalState.initialize(context);

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "ku-eecs-documenter.generateAndWriteAnnotation",
      async () => {
        await annotationManager.initialize();
        await fileManager.initialize();
        await commands.generateAnnotation();
      },
    ),
    vscode.commands.registerCommand("ku-eecs-documenter.setup", async () => {
      await commands.setup();
    }),
  );
}

export function deactivate() {}
