const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

app.use(cors());
app.use(express.json());

const SECRET_KEY = 'your-secret-key';

// Baza użytkowników w pamięci
const users = [
    {
        id: 1,
        name: "Test User",
        email: "test@example.com",
        password: "123456"
    }
];

// Endpoint do logowania
app.post('/users/login', (req, res) => {
    const { email, password } = req.body;

    console.log('Login attempt:', { email, password });

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, SECRET_KEY);

    res.json({
        user: {
            name: user.name,
            email: user.email
        },
        token
    });
});

// Endpoint do rejestracji
app.post('/users/signup', (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password
    };

    users.push(newUser);

    const token = jwt.sign({ userId: newUser.id }, SECRET_KEY);

    res.status(201).json({
        user: {
            name: newUser.name,
            email: newUser.email
        },
        token
    });
});

// Endpoint do wylogowania
app.post('/users/logout', (req, res) => {
    res.status(200).json({ message: 'Logged out successfully' });
});

// Endpoint do pobrania aktualnego użytkownika
app.get('/users/current', (req, res) => {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const user = users.find(u => u.id === decoded.userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({
            name: user.name,
            email: user.email
        });
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
});

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Auth server running on http://localhost:${PORT}`);
});