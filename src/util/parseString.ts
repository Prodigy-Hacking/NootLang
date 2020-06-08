import { brackets } from "./brackets"

export const parseString = (str: string) => {
	const bracketStrings = brackets(str);
	for (const [index, bracket] of bracketStrings.entries()) str = str.replace(bracket, `{${index}}`);
	const args = str.match(/[^\s"']+|"([^"]*)"|'([^']*)'/g)!
		.map(x => x.replace(/^"(.+?)"$/, "$1"))
		.map(x => x.replace(/\{(\d+)\}/, x => bracketStrings[+RegExp.$1]));
	return args;
}