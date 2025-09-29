/** @format */

import * as vscode from "vscode";

const AuthorKey = "ku-eecs-documenter-author";
const KUIDKey = "ku-eecs-documenter-kuid";

class GlobalState {
  private context!: vscode.ExtensionContext;
  private _state!: vscode.Memento;
  private _author!: string;
  private _kuid!: number;

  constructor() {}

  public initialize(context: vscode.ExtensionContext): void {
    this.context = context;
    this._state = this.context.globalState;
  }

  public setAuthor(author: string): any {
    this._author = author;
    let extConfig: vscode.WorkspaceConfiguration =
      vscode.workspace.getConfiguration("ku-eecs-documenter");
    extConfig.update("author", author, vscode.ConfigurationTarget.Global);
    return this._state.update(AuthorKey, this._author);
  }

  public getAuthor(): string | undefined {
    let extConfig: vscode.WorkspaceConfiguration =
      vscode.workspace.getConfiguration("ku-eecs-documenter");
    const configAuthor = extConfig.get<string>("author", "");
    if ((this._author ?? this._state.get(AuthorKey)) !== configAuthor) {
      this.setAuthor(configAuthor);
    }
    return this._author ?? this._state.get(AuthorKey);
  }

  public removeAuthor(): void {
    let extConfig: vscode.WorkspaceConfiguration =
      vscode.workspace.getConfiguration("ku-eecs-documenter");
    extConfig.update("author", "");
    this._state.update(AuthorKey, undefined);
  }

  public setKUID(kuid: number): any {
    this._kuid = kuid;
    let extConfig: vscode.WorkspaceConfiguration =
      vscode.workspace.getConfiguration("ku-eecs-documenter");
    extConfig.update("kuid", kuid, vscode.ConfigurationTarget.Global);
    return this._state.update(KUIDKey, this._kuid);
  }

  public getKUID(): number | undefined {
    let extConfig: vscode.WorkspaceConfiguration =
      vscode.workspace.getConfiguration("ku-eecs-documenter");
    const configKUID = extConfig.get<number>("kuid", 1234567);
    if ((this._kuid ?? this._state.get(KUIDKey)) !== configKUID) {
      this.setKUID(configKUID);
    }
    return this._kuid ?? this._state.get(KUIDKey);
  }

  public removeKUID(): void {
    let extConfig: vscode.WorkspaceConfiguration =
      vscode.workspace.getConfiguration("ku-eecs-documenter");
    extConfig.update("kuid", 1234567);
    this._state.update(KUIDKey, undefined);
  }

  public removeAll(): void {
    this._state.update(AuthorKey, undefined);
    this._state.update(KUIDKey, undefined);
  }
}

export const globalState: GlobalState = new GlobalState();
