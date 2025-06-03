# AILesson1 - Meeting Management with AI

A complete web application for efficient meeting management using AI (Gemini). This project demonstrates how to create secure AI-powered tools for business productivity.

## 🌟 Features

### Frontend (HTML/JavaScript)
- Interactive step-by-step meeting management tutorial
- AI-powered agenda creation
- Meeting invitation generation
- Mock transcript creation
- Meeting summary generation
- Follow-up email drafting
- Hebrew language support
- Modern responsive UI with Tailwind CSS

### Backend (Node.js/Express)
- Secure Gemini AI API integration
- Environment variable management
- CORS configuration
- Error handling and validation
- RESTful API design

## 🚀 Live Demo

- **Frontend**: Deploy `gemprogram.html` to GitHub Pages
- **Backend**: Deploy to Vercel, Netlify, or Render

## 📁 Project Structure

```
AILesson1/
├── frontend/
│   └── gemprogram.html          # Main web application
├── backend/
│   ├── server.js                # Express server
│   ├── package.json             # Node.js dependencies
│   ├── .env                     # Environment variables (not in repo)
│   ├── .gitignore              # Git ignore rules
│   └── README.md               # Backend documentation
├── docs/
│   └── Gem Chat.txt            # Setup instructions (Hebrew)
└── README.md                   # Main project documentation
```

## 🛠️ Setup Instructions

### Frontend Setup
1. Open `frontend/gemprogram.html` in a web browser
2. Or deploy to GitHub Pages for online access

### Backend Setup
1. Navigate to the `backend/` directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file with your Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   PORT=3000
   ```
4. Start the server:
   ```bash
   node server.js
   ```

### Connecting Frontend to Backend
- For local development: Backend runs on `http://localhost:3000`
- For production: Update `backendApiUrl` in the HTML file to your deployed backend URL

## 🔐 Security Features

- API key stored securely in backend environment variables
- Never exposed to client-side code
- CORS configuration for cross-origin requests
- Input validation and sanitization

## 🌐 Deployment Options

### Frontend
- **GitHub Pages**: Free hosting for static files
- **Netlify**: Advanced features and custom domains
- **Vercel**: Seamless GitHub integration

### Backend
- **Vercel**: Serverless functions (recommended)
- **Render**: Full-stack deployment
- **Railway**: Simple deployment with databases
- **Heroku**: Traditional PaaS hosting

## 📚 What You'll Learn

1. **Secure AI Integration**: How to safely use AI APIs without exposing keys
2. **Full-Stack Architecture**: Frontend-backend separation and communication
3. **Modern Web Development**: HTML5, CSS3, JavaScript ES6+
4. **API Design**: RESTful endpoints and error handling
5. **Deployment**: Multiple hosting options and best practices

## 🎯 Use Cases

- **Business Meetings**: Streamline meeting preparation and follow-up
- **Educational Workshops**: Teach AI integration concepts
- **Productivity Tools**: Template for AI-powered business applications
- **Hebrew Language Apps**: Example of RTL language support

## 🔧 Technologies Used

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Tailwind CSS
- **JavaScript**: ES6+ features and async/await
- **Fetch API**: HTTP requests to backend

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **Axios**: HTTP client for API requests
- **dotenv**: Environment variable management
- **CORS**: Cross-origin resource sharing

## 📖 Tutorial Content

The application includes a complete tutorial covering:

1. **Meeting Preparation** - AI-assisted agenda creation
2. **Invitation Writing** - Professional meeting invitations
3. **Documentation** - Mock transcript generation
4. **Summary Creation** - Key points and action items
5. **Follow-up** - Email drafting and task tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🙋‍♂️ Support

For questions or issues:
- Check the documentation in `docs/`
- Review the setup instructions
- Open an issue on GitHub

---

**Note**: This project is designed for educational purposes and demonstrates best practices for AI integration in web applications.
