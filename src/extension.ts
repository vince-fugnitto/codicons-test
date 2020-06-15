
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    const disposables: vscode.Disposable[] = [];

    disposables.push(vscode.commands.registerCommand('codicons.refreshEntry', () => console.log('refresh')));
    disposables.push(vscode.commands.registerCommand('codicons.plus', () => console.log('plus')));

    context.subscriptions.push(...disposables);
}

export function deactivate() { }
