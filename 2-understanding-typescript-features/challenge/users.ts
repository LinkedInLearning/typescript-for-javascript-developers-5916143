export interface User {
  id: number;
  name: string;
  email?: string;
}

const users: User[] = [];

export function addUser(user: User): void {
  users.push(user);
}

export function getUser(id: number): User | undefined {
  return users.find(u => u.id === id);
}
