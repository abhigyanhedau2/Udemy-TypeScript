type Combinable = number | string;
type ConversionDescriptor = "as-text" | "as-number"; // literal type

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor // literal type
): Combinable {
    let result: Combinable;
    if (typeof input1 === "number" && typeof input2 === "number")
        result = input1 + input2;
    else result = input1.toString() + input2.toString();

    if (resultConversion === "as-number") return +result;
    return result.toString();
}

console.log(combine(25, 30, "as-number"));
console.log(combine("Max", "Anna", "as-text"));
