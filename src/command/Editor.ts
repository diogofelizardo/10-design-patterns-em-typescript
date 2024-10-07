interface Command {
  execute(): void;
  undo(): void;
}

class Editor {
  private content: string = '';

  append(text: string): void {
    this.content += text;
    console.log(`Conteúdo atual: "${this.content}"`);
  }

  deleteLast(n: number): void {
    this.content = this.content.slice(0, -n);
    console.log(`Conteúdo atual: "${this.content}"`);
  }

  getContent(): string {
    return this.content;
  }
}

class AppendCommand implements Command {
  constructor(private editor: Editor, private text: string) { }

  execute(): void {
    this.editor.append(this.text);
  }

  undo(): void {
    this.editor.deleteLast(this.text.length);
  }
}

class DeleteCommand implements Command {
  private deletedText: string = '';

  constructor(private editor: Editor, private count: number) { }

  execute(): void {
    const content = this.editor.getContent();
    this.deletedText = content.slice(-this.count);
    this.editor.deleteLast(this.count);
  }

  undo(): void {
    this.editor.append(this.deletedText);
  }
}

class CommandManager {
  private history: Command[] = [];
  private undone: Command[] = [];

  executeCommand(command: Command): void {
    command.execute();
    this.history.push(command);
    this.undone = [];
  }

  undo(): void {
    const command = this.history.pop();
    if (command) {
      command.undo();
      this.undone.push(command);
    }
  }

  redo(): void {
    const command = this.undone.pop();
    if (command) {
      command.execute();
      this.history.push(command);
    }
  }
}

// Uso
const editor = new Editor();
const manager = new CommandManager();

const appendHello = new AppendCommand(editor, 'Hello');
manager.executeCommand(appendHello);

const appendWorld = new AppendCommand(editor, ' World');
manager.executeCommand(appendWorld);

manager.undo();
manager.redo();

const deleteWorld = new DeleteCommand(editor, 6);
manager.executeCommand(deleteWorld);

manager.undo();