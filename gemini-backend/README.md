# Gemini API Backend Server

A secure Node.js/Express backend server for handling Gemini AI API requests.

## Features

- Secure API key management using environment variables
- CORS enabled for frontend integration
- Error handling and validation
- Hebrew language support

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   PORT=3000
   ```
4. Start the server:
   ```bash
   node server.js
   ```

## API Endpoints

### POST /api/gemini

Send a prompt to Gemini AI and receive a response.

**Request Body:**
```json
{
  "prompt": "Your question or prompt here"
}
```

**Response:**
```json
{
  "generatedText": "AI response text"
}
```

## Environment Variables

- `GEMINI_API_KEY`: Your Google AI Studio API key
- `PORT`: Server port (default: 3000)

## Security

- API key is never exposed to the frontend
- CORS configured for cross-origin requests
- Input validation and error handling

## Deployment

This backend can be deployed to:
- Vercel
- Netlify
- Render
- Heroku

Make sure to set the environment variables in your deployment platform.
