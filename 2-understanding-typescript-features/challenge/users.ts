// Sample data
const data = [
  { id: 1, name: 'Zia', role: 'admin' },
  { id: 2, name: 'Gaia', role: 'user' },
  { id: 3, name: 'Noora', role: 'guest' }
];

// Function to find a user by ID
function findUserById(id) {
  return data.find(user => user.id === id);
}

// Function to log user details
function logUserDetails(user) {
  console.log(`Name: ${user.name}, Role: ${user.role}`);
}

// Function to merge two objects
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
