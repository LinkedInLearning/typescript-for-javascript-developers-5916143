const users = [];

function addUser(user) {
  users.push(user);
}

function getUser(id) {
  const user = users.find(u => u.id === id);
  if (user) {
    return user;
  } else {
    return 'User not found';
  }
}

module.exports = { addUser, getUser };
