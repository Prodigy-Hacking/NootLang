export const brackets = (str: string) => {
    let startI = 0;
    let level = 0;
    const found: string[] = []
    for (const [index, char] of str.split("").entries()) {
        if (char === "[") {
            level++;
            if (level === 1) startI = index;
        } else if (char === "]" && --level === 0) {
            found.push(str.slice(startI + 1, index))
        }
    }
    return found;
}