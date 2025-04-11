# PackUpPal
PackUpPal is a travel planning web app that allows users to log in using Google or GitHub and manage their travel plans with ease. The app features a user-friendly interface with a dark/light theme toggle, destination and date selection, and personalized trip management.

🔒 Authentication: Uses Firebase Auth for secure Google and GitHub sign-ins.

🌍 Travel Dashboard: Users can search destinations, set travel dates, and view upcoming trips.

🧠 Dynamic UI: React & Tailwind-based interface with popup modals for creating new travel plans.

🧾 Backend Support: Built with Express.js to handle all CRUD operations for trip data securely.

🛠️ Getting Started
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/MohitG780/PackUpPal.git
cd PackUpPal
2. Setup Environment Variables
Create a .env file in the backend/ directory with your Firebase and OpenAI credentials. Example:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongo_uri
FIREBASE_API_KEY=your_firebase_api_key
OPENAI_API_KEY=your_openai_api_key
⚠️ Make sure .env is listed in .gitignore to avoid committing secrets.

3. Install Dependencies
Frontend
bash
Copy
Edit
cd frontend
npm install
Backend
bash
Copy
Edit
cd ../backend
npm install
4. Run the App
Start both servers:

Backend
bash
Copy
Edit
npm run dev
Frontend (in another terminal)
bash
Copy
Edit
npm run dev
