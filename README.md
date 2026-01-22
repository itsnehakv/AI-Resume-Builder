# AI Resume Builder | MERN 
The AI Resume Builder is a high-performance **MERN-stack application** designed to streamline the professional resume creation process. It leverages **Google Gemini via an OpenAI-compatible integration** to generate and 
enhance professional resumes.
It bridges the gap between raw data and professional presentation by utilizing AI for content enhancement and image processing. 
The app features a robust authentication system, a private user dashboard, and a sophisticated "Split-Pane" editor that allows for real-time visual feedback.
## Tech Used:
**Languages**
- **JavaScript** : Powers the full-stack logic.
- **CSS3** : Handles the application's styling.
- **HTML5** : Defines the semantic structure of the UI
  
**Frontend**
- **React** : Drives the entire Single Page Application (SPA) and the live preview engine.
- **Redux** : Manages global state to keep user data consistent.
- **React-Hot-Toast** : Delivers instant, elegant notifications for user actions.
- **Tailwind CSS** : Framework for rapid, responsive, and modern styling.
- **JSON** : Standard format for structured data exchange

**Backend**
- **Node JS** : The runtime environment executing server-side JavaScript logic.
- **Express JS** : Manages API routing and server-to-client communication.
- **Mongo DB** : Stores user profiles and resume data.
  
**Security**
- **JWT** : Handles secure, stateless user authentication via encrypted tokens.
- **Bcrypt.js** : Protects accounts by hashing and salting passwords before storage.
- **Cors** : Regulates secure data sharing between the Vercel and Render domains.

**AI & Media Processing**
- **Google Gemini 3 Flash** : An advanced LLM that professionalizes and enhances resume text.
- **OpenAI SDK Compatibility** : Standardizes AI integration using an industry-standard interface.
- **ImageKit AI**: Automates background removal and intelligent face-focus for professional headshots.
- 
**Deployment**
- **Vercel**: Hosts the Frontend (React).
- **Render**: Hosts the Backend (Node/Express).
- **MongoDB Atlas**: Hosts th Database

  
## Features
1. AI-Powered Content Polishing
Dynamic Enhancement: Integrated "AI Enhance" buttons in the Professional Summary and Work Experience sections.

Contextual Reasoning: The model doesn't just check grammar; it analyzes the context of a user's role to suggest high-impact keywords and professional phrasing.

2. Intelligent Image Processing
Minimal Image Template: A specialized layout that includes a profile picture.

AI Face-Focus: Using ImageKit's AI, the app automatically removes cluttered backgrounds and focuses on the user's face, ensuring a professional headshot look from any photo.
