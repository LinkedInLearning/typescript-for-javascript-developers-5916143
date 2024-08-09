let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
console.log(strLength);  // Outputs: 16 

let anotherValue: any = "another string";
let anotherStrLength: number = (<string>anotherValue).length;
console.log(anotherStrLength);  // Outputs: 14
