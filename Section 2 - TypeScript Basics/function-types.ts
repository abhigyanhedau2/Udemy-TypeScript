function addValues(num1: number, num2: number): number {
    return num1 + num2;
}

const combineValues: (num1: number, num2: number) => number = addValues;

console.log(combineValues(25, 30));
