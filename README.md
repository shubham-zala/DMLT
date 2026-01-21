# DMLT Viva Prep App

A full-stack web application designed to help DMLT (Diploma in Medical Laboratory Technology) students prepare for their viva exams. It uses Google's Gemini AI to generate exam-oriented explanations, diagrams descriptions, and viva questions.

## Features
- **Instant Topic Explanation**: Simple, student-friendly explanations for any DMLT topic.
- **Viva Questions**: Generates 10 most likely viva questions.
- **Common Mistakes**: Highlights 3 common errors students make.
- **Diagram References**: Describes what diagrams to draw.
- **Premium UI**: Modern, clean, and responsive interface.

## Tech Stack
- **Frontend**: React, Vite, Vanilla CSS
- **Backend**: Node.js, Express.js
- **AI**: Google Gemini API

## Setup Instructions

### Prerequisites
- Node.js installed
- Google Gemini API Key

### 1. Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` folder and add your API Key:
   ```env
   GEMINI_API_KEY=your_actual_api_key_here
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm start
   # or
   node server.js
   ```
   Server will run on `http://localhost:5000`.

### 2. Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the link shown in terminal (usually `http://localhost:5173`).

## Usage
1. Enter a medical topic (e.g., "Gram Staining", "ESR", "Autoclave").
2. Click "Explain".
3. Read the simplified notes and practice the viva questions.

## License
MIT
