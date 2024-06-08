export interface User {
  id: number;
  name: string;
  email?: string;
}

const users: User[] = [];

export function addUser(user: User): void {
  users.push(user);
}

export function getUser(id: number | string): User | "User not found" | never {
  if (typeof id !== 'number') {
    throw new Error("Invalid ID type");
  }

  const user = users.find(u => u.id === id);
  return user || "User not found";
}

export function processInputData(input: any): void {
  let verifiedInput: unknown = input;
  if (typeof verifiedInput === 'string') {
    console.log("Processing string:", verifiedInput);
  } else if (typeof verifiedInput === 'number') {
    console.log("Processing number:", verifiedInput);
  } else {
    console.log("Type not supported");
  }
}
