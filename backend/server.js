const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { generateContent } = require('./services/aiService');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/explain', async (req, res) => {
    try {
        const { topic } = req.body;

        if (!topic) {
            return res.status(400).json({ error: "Topic is required" });
        }

        console.log(`Generating content for topic: ${topic}`);
        const data = await generateContent(topic);
        res.json(data);

    } catch (error) {
        console.error("Server Error:", error.message);
        res.status(500).json({
            error: "Failed to fetch explanation. Please try again.",
            details: error.message
        });
    }
});

// Health check
app.get('/', (req, res) => {
    res.send('DMLT Viva Prep Backend is running');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`OpenRouter Key loaded: ${process.env.OPENROUTER_API_KEY ? 'Yes' : 'NO'}`);
});
