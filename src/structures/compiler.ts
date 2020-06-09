import { VariableManager } from "./variableManager";
import { Arguments } from "./arguments";
import { parseString } from "../util/parseString";
import { keywords, Keyword } from "../util/keywords";
import readline from "readline";
export interface Std {
	in: () => Promise<string>;
	out: (str: unknown) => unknown;
	err: (str: string) => unknown;
}
export class Compiler {
	public varManager = new VariableManager();
	public rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	constructor(
		public std: Std = {
			in: () => new Promise(res => this.rl.question(">> ", res)),
			out: console.log,
			err(e) {
				console.error(e);
				process.exit(1);
			},
		}
	) {}
	async compile(str: string) {
		const args = new Arguments(parseString(str));
		for (const arg of args) {
			if (keywords.hasOwnProperty(arg.toLowerCase())) await keywords[arg.toLowerCase() as keyof typeof keywords](args, this.varManager, this.std);
		}
		this.std.out(">>> END OF NOOT")
	}
}
