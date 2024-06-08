const { addUser, getUser } = require('./user');

addUser({ id: 1, name: 'Jeema', email: 'jeema@example.com' });
addUser({ id: 2, name: 'Ali', email: 'ali@example.com' });

console.log(getUser(1));
console.log(getUser(3));  // Should return 'User not found'
