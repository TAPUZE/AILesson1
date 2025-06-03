// server.js
require('dotenv').config(); // טוען משתני סביבה מהקובץ .env
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001; // השתמש ב-PORT ממשתני הסביבה או ב-3001 כברירת מחדל

app.use(cors()); // מאפשר בקשות CORS מכל המקורות (ניתן להגביל יותר בסביבת פרודקשן)
app.use(express.json()); // מאפשר לשרת לקבל JSON בגוף הבקשה

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

app.post('/api/gemini', async (req, res) => {
    const userPrompt = req.body.prompt;

    if (!userPrompt) {
        return res.status(400).json({ error: 'No prompt provided' });
    }

    if (!GEMINI_API_KEY) {
        console.error('Gemini API key is not set.');
        return res.status(500).json({ error: 'Server configuration error: API key missing.' });
    }
    
    const payload = {
        contents: [{
            role: "user",
            parts: [{ text: userPrompt }]
        }]
        // ניתן להוסיף כאן הגדרות נוספות כמו generationConfig אם צריך
    };

    try {
        const geminiResponse = await axios.post(GEMINI_API_URL, payload, {
            headers: { 'Content-Type': 'application/json' }
        });
        
        // החזרת התשובה המלאה מ-Gemini, או רק את הטקסט הרלוונטי
        // res.json(geminiResponse.data); 
        
        // החזרת הטקסט בלבד, אם זה מה שה-frontend מצפה לו
         if (geminiResponse.data.candidates && geminiResponse.data.candidates.length > 0 &&
             geminiResponse.data.candidates[0].content && geminiResponse.data.candidates[0].content.parts &&
             geminiResponse.data.candidates[0].content.parts.length > 0) {
             const generatedText = geminiResponse.data.candidates[0].content.parts[0].text;
             res.json({ generatedText: generatedText });
         } else {
             // אם התשובה במבנה לא צפוי או ריקה
             console.warn('Unexpected response structure from Gemini API:', geminiResponse.data);
             res.json({ generatedText: "לא התקבלה תשובה טקסטואלית ברורה מה-AI." });
         }

    } catch (error) {
        console.error('Error calling Gemini API:', error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).json({ 
            error: 'Failed to get response from Gemini API', 
            details: error.response ? error.response.data : error.message 
        });
    }
});

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});
