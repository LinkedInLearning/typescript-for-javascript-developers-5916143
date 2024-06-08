interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [];

function addUser(user: User): void {
  users.push(user);
}

function getUser(id: number): User | string {
  const user = users.find(u => u.id === id);
  if (user) {
    return user;
  } else {
    return 'User not found';
  }
}

export { addUser, getUser, User };
