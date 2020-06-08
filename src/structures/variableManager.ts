import { NLVariable, getDefault, NLVarType } from "./variable";

export class VariableManager {
	protected variables: {[index: string]: NLVariable} = {};
	getVariable(name: string) {
		return this.variables[name] ?? null;
	}
	setVariable(name: string, value: ReturnType<typeof getDefault>) {
		return this.variables[name].value = value;
	}
	hasVariable(name: string) {
		return this.variables.hasOwnProperty(name);
	}
	newVariable(type: NLVarType, name: string) {
		return this.variables[name] = new NLVariable(type, name);
	}
}