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
export function compareValues(v1, u1, v2, u2, base1, base2) {
    if (isNaN(v1) || isNaN(v2)) return "Invalid values — cannot compare";

    if (base1 > base2) {
        return `${v1} ${u1} is GREATER than ${v2} ${u2}`;
    }

    if (base1 < base2) {
        return `${v1} ${u1} is LESS than ${v2} ${u2}`;
    }

    return `${v1} ${u1} is EQUAL to ${v2} ${u2}`;
}