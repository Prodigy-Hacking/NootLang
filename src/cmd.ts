import { Compiler } from "./structures/compiler";
import { readFileSync } from "fs";
const compiler = new Compiler();
if (!process.argv[2]) throw "NO FILE PATH SPECIFIED."
compiler.compile(readFileSync(process.argv[2], { encoding: "utf8" })).then(x => process.exit(0));