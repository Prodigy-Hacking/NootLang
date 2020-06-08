export enum NLVarType {
	STR = "semen",
	INT = "cum",
	FLT = "piss",
	STK = "condom",
	DIC = "dick",
}
export const types = Object.values(NLVarType);
export type NLToType<T> = T extends NLVarType.STR
	? string
	: T extends NLVarType.INT
	? number
	: T extends NLVarType.FLT
	? number
	: T extends NLVarType.STK
	? unknown[]
	: T extends NLVarType.DIC
	? Map<unknown, unknown>
	: never;
const typeDictionary = {
	[NLVarType.STR]: { default: "", convert: String, check: () => true },
	[NLVarType.INT]: { default: 0, convert: Number, check: val => !isNaN(+val) && !(val % 1) },
	[NLVarType.FLT]: { default: 0, convert: Math.round, check: val => !isNaN(+val) },
	[NLVarType.STK]: {
		get default() {
			return [];
		},
		convert: val => [val],
		check: Array.isArray
	},
	[NLVarType.DIC]: {
		get default() {
			return new Map();
		},
		convert: () => new Map(),
		check: val => val instanceof Map
	},
} as { [index: string]: { default: any, convert(val: unknown): any, check(val: any): boolean } };
export const getDefault = <T extends NLVarType>(type: T): NLToType<T> => typeDictionary[type].default;
export const isType = (type: NLVarType, val: any): boolean => typeDictionary[type].check(val);
export const convertType = <T extends NLVarType>(type: T, val: any): NLToType<T> => typeDictionary[type].convert(val);
export class NLVariable {
	public value = getDefault(this.type);
	constructor(public type: NLVarType, public name: string) {}
}
