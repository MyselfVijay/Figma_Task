const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./Models/User');


const app = express();
app.use(express.json());
app.use(cors());

// Mock Login API
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;  

  // You can add logic to reject invalid ones if needed
  if (username && password) {
    res.json({
      token: 'mocked-token-123456',
      user_id: 101,
      user_name: username
    });
  } else {
    res.status(401).json({ error: 'Missing username or password' });
  }
});

mongoose.connect('mongodb://127.0.0.1:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

const jwt = require('jsonwebtoken'); // if not installed, run `npm install jsonwebtoken`

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && user.password === password) {
      const token = jwt.sign({ email }, 'secret_key');
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Mock Doctor List API
app.post('/api/doctors', (req, res) => {
  const doctors = [
    {
      name: 'Dr. Ayesha Khan',
      specialty: 'Clinical Psychologist',
      availability: '10:00 AM - 4:00 PM'
    },
    {
      name: 'Dr. Rajesh Kumar',
      specialty: 'Clinical Psychologist',
      availability: '12:00 PM - 6:00 PM'
    },
    {
      name: 'Dr. Saira Banu',
      specialty: 'Clinical Psychologist',
      availability: '9:00 AM - 2:00 PM'
    }
  ];

  res.json({ data: doctors });
});

// Optional Home Route
app.get('/', (req, res) => {
  res.send('Mock backend is running!');
});

app.listen(5000, () => {
  console.log('Mock server running on http://localhost:5000');
});
