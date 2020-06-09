import { Compiler } from "./structures/compiler";
import { readFileSync } from "fs";
import { createInterface } from "readline";
const compiler = new Compiler();
compiler.compile(readFileSync(process.argv[2], { encoding: "utf8" })).then(x => process.exit(0));