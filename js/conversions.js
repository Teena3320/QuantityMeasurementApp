export function applyConversion(value, convObj) {
    if (isNaN(value)) throw new Error("Invalid number");

    if (value === null || value === "") throw new Error("Invalid number");

    if (convObj.factor !== null) {
        const result = value * convObj.factor;
        return parseFloat(result.toFixed(6));
    }

    const expr = convObj.formula.replace("x", value);
    const result = eval(expr);
    return parseFloat(result.toFixed(6));
}