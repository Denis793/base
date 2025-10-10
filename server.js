import fs from 'fs';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;
const MESSAGES_FILE = 'messages.json';
const USERS_FILE = 'users.json';

app.use(cors());
app.use(express.json());

const initializeMessagesFile = () => {
  if (!fs.existsSync(MESSAGES_FILE)) {
    fs.writeFileSync(MESSAGES_FILE, '[]', 'utf-8');
    console.log(`Created new ${MESSAGES_FILE}`);
  }
};

const initializeUsersFile = () => {
  if (!fs.existsSync(USERS_FILE)) {
    const initialUsers = [
      {
        name: 'Demo User',
        email: 'demo@gmail.com',
        password: 'demo123',
      },
    ];
    fs.writeFileSync(USERS_FILE, JSON.stringify(initialUsers, null, 2), 'utf-8');
    console.log(`Created new ${USERS_FILE} with a demo user.`);
  }
};

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'API Server is running! Use POST /api/messages, POST /api/register, or POST /api/login.',
  });
});

app.post('/api/messages', (req, res) => {
  initializeMessagesFile();

  try {
    const data = fs.readFileSync(MESSAGES_FILE, 'utf-8');
    const messages = JSON.parse(data);

    const newMessage = {
      ...req.body,
      timestamp: new Date().toISOString(),
    };

    messages.push(newMessage);

    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));

    console.log(`✅ New message saved to ${MESSAGES_FILE}:`, newMessage.email);
    res.status(200).json({ status: 'success', message: 'Message successfully saved.' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ status: 'error', message: 'Failed to save message.' });
  }
});

app.post('/api/register', (req, res) => {
  initializeUsersFile();

  try {
    const { fullName, username: email, password } = req.body;

    const data = fs.readFileSync(USERS_FILE, 'utf-8');
    const users = JSON.parse(data);

    if (users.some((user) => user.email.toLowerCase() === email.toLowerCase())) {
      console.log(`❌ Registration failed: Email already registered: ${email}`);
      return res.status(409).json({ status: 'error', message: 'This email is already registered.' });
    }

    const newUser = {
      name: fullName,
      email: email,
      password: password,
      registeredAt: new Date().toISOString(),
    };

    users.push(newUser);

    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

    console.log(`✅ New user registered and saved to ${USERS_FILE}:`, newUser.email);
    res.status(201).json({
      status: 'success',
      message: 'User successfully registered.',
      user: { name: newUser.name, email: newUser.email },
    });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ status: 'error', message: 'Failed to process registration.' });
  }
});

app.post('/api/login', (req, res) => {
  initializeUsersFile();

  try {
    const { username: email, password } = req.body;

    const data = fs.readFileSync(USERS_FILE, 'utf-8');
    const users = JSON.parse(data);

    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      return res.status(401).json({ status: 'error', reason: 'email', message: 'Email is not registered.' });
    }

    if (user.password !== password) {
      return res.status(401).json({ status: 'error', reason: 'password', message: 'Incorrect password.' });
    }

    res.status(200).json({ status: 'success', user: { name: user.name, email: user.email } });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ status: 'error', message: 'Failed to process login.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 API Server running at http://localhost:${PORT}`);
});
