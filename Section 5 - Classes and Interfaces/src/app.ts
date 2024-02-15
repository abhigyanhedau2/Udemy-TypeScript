// interface is used only for objects

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

let user1: Person;
user1 = {
    name: "Max",
    age: 25,
    greet(phrase: string) {
        console.log(`Hello ${phrase}`);
    },
};
