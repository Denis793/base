import fs from 'fs';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;
const MESSAGES_FILE = 'messages.json';

app.use(cors());
app.use(express.json());

const initializeMessagesFile = () => {
  if (!fs.existsSync(MESSAGES_FILE)) {
    fs.writeFileSync(MESSAGES_FILE, '[]', 'utf-8');
    console.log(`Created new ${MESSAGES_FILE}`);
  }
};

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'API Server is running! Use POST /api/messages for submitting the form data.',
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
    res.status(201).json({ success: true, message: 'Message saved successfully' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🛑 PRESS CTRL+C TO STOP SERVER`);
});
