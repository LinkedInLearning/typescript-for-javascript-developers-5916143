function add(x: number, y: number): number {
  return x + y;
}

const sum = add(2, 3);  // Valid call
// const result = add(2, "3");  // Compile-time error 

const multiply = (a: number, b: number): number => {
  return a * b;
};

const product = multiply(4, 5);  // Valid call
// const productError = multiply(4, "5");  // Compile-time error 

function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

console.log(greet("Yasmina"));  // Outputs: Hello, Yasmina!
console.log(greet("Yasmina", "Hi"));  // Outputs: Hi, Yasmina! 

function greetOptional(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}

console.log(greetOptional("Bob"));  // Outputs: Hello, Bob! 
console.log(greetOptional("Bob", "Hi"));  // Outputs: Hi, Bob! 

function greetWithReturnType(name: string, greeting: string = "Hello"): void {
  console.log(`${greeting}, ${name}!`);
} 

function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll(1, 2, 3, 4));  // Outputs: 10 

type MathOperation = (a: number, b: number) => number;

const addOperation: MathOperation = (a, b) => a + b;
const subtractOperation: MathOperation = (a, b) => a - b;

console.log(addOperation(10, 5));  // Outputs: 15
console.log(subtractOperation(10, 5));  // Outputs: 5
