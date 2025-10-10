export const DATA_USERS = [
  {
    name: 'Demo User',
    email: 'demo@gmail.com',
    password: 'demo123',
  },
];

export const findUserByEmail = (email) => DATA_USERS.find((user) => user.email.toLowerCase() === email.toLowerCase());

export const validateUserCredentials = (email, password) => {
  const user = findUserByEmail(email);
  if (!user) return { valid: false, reason: 'email' };
  if (user.password !== password) return { valid: false, reason: 'password' };
  return { valid: true, user };
};
