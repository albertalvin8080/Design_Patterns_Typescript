import { Command } from "../command/Command";

export class Invoker {
    constructor(
        private insertCommands: Command[],
        private removeCommands: Command[],
    ) {}

    executeInsertCommand(idx: number, line: string) {
        this.insertCommands[idx].execute(line);
    }

    executeRemoveCommand(idx:number, lineIdx: number) {
        this.removeCommands[idx].execute(lineIdx);
    }
}