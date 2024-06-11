// Define a type alias for the user object
type User = {
  id: number;
  name: string;
  role: 'admin' | 'user' | 'guest';
};

// Sample data
const data: User[] = [
  { id: 1, name: 'Zia', role: 'admin' },
  { id: 2, name: 'Gaia', role: 'user' },
  { id: 3, name: 'Noora', role: 'guest' }
];

// Function to find a user by ID
function findUserById(id: number): User | undefined {
  return data.find(user => user.id === id);
}

// Function to log user details with type assertions
function logUserDetails(user: User): void {
  console.log(`Name: ${user.name}, Role: ${user.role}`);
}

// Create an intersection type
type MergedObject = User & { age: number };

// Function to merge two objects using intersection type
function mergeObjects(obj1: User, obj2: { age: number }): MergedObject {
  return { ...obj1, ...obj2 };
}

// Testing the functions
const user = findUserById(1);
if (user) {
  logUserDetails(user);
}

const merged = mergeObjects({ id: 4, name: 'Mariya', role: 'user' }, { age: 30 });
console.log(merged);
