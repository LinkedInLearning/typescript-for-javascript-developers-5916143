export interface User {
  id: number;
  username: string;
  email?: string;  // Optional property
}

function registerUser(user: User) {
  console.log(`User ${user.username} registered successfully.`);
}

// Correct usage
registerUser({ id: 1, username: 'johnsmith' });

// Incorrect usage - will cause a compile-time error
// registerUser({ username: 'johnsmith' });
