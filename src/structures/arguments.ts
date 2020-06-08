export class Arguments {
	private index = 0;
	constructor(private args: string[]) {};
	getAtIndex(i: number): string | null {
		return this.args[i] ?? null;
	}
	indexExists(i: number): boolean {
		return i in this.args;
	}
	get currentIndex() {
		return this.index;
	}
	skipIndex() {
		return ++this.index;
	}
	*[Symbol.iterator]() {
		for (this.index = 0; this.index < this.args.length; this.index++) yield this.args[this.index];
	}
}