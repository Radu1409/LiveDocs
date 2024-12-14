<div align="center">
  <h1>✨ <b>LiveDocs - Real-Time Document Collaboration Platform</b> 🚀</h1>
</div>

LiveDocs is an innovative application that enables seamless real-time document collaboration. It offers personalized access control, notifications, and advanced editing tools, making it a perfect platform to enhance full-stack development skills.

## 📸 Screenshots
<p align="center">
  <img src="https://raw.githubusercontent.com/Radu1409/LiveDocs/refs/heads/main/public/assets/media/livedocs_1.png" alt="Photo 1" width="400"/>
  <img src="https://raw.githubusercontent.com/Radu1409/LiveDocs/refs/heads/main/public/assets/media/livedocs_8.PNG" alt="Photo 8" width="400"/>
  <img src="https://raw.githubusercontent.com/Radu1409/LiveDocs/refs/heads/main/public/assets/media/livedocs_0.png" alt="Photo 0" width="400"/>
  <img src="https://raw.githubusercontent.com/Radu1409/LiveDocs/refs/heads/main/public/assets/media/livedocs_2.png" alt="Photo 2" width="400"/>
  <img src="https://raw.githubusercontent.com/Radu1409/LiveDocs/refs/heads/main/public/assets/media/livedocs_3.png" alt="Photo 3" width="400"/>
  <img src="https://raw.githubusercontent.com/Radu1409/LiveDocs/refs/heads/main/public/assets/media/livedocs_5.png" alt="Photo 5" width="400"/>
  <img src="https://raw.githubusercontent.com/Radu1409/LiveDocs/refs/heads/main/public/assets/media/livedocs_6.png" alt="Photo 6" width="400"/>
  <img src="https://raw.githubusercontent.com/Radu1409/LiveDocs/refs/heads/main/public/assets/media/livedocs_7.png" alt="Photo 7" width="400"/>
</p>

## 📝 Project Overview
LiveDocs is a collaborative platform that allows users to create and edit documents in real time. Document owners can invite collaborators with view-only or edit access. Features like Live Cursor, commenting, and notifications significantly enhance the user experience.

## 🔋 Features
- 👉 **Real-Time Editing**: Collaborate with others simultaneously, with Live Cursor tracking every change.
- 👉 **Access Control**: Invite users with view-only or edit permissions.
- 👉 **Comments and Tagging**: Add comments to specific text fragments and tag collaborators for notifications.
- 👉 **Notifications**: Get notified about new comments or edits.
- 👉 **Document Styling**: Rich text editing with bold, italic, underline, alignment, and more.
- 👉 **Document Sharing**: Share documents with controlled access and view active permissions.

## <a name="tech-stack">⚙️ Tech Stack</a>
- ✅ **TypeScript & NextJS**: Ensures performance and scalability for real-time features.
- ✅ **LiveBlocks**: Powers live presence, collaborative cursor, and synchronized editing.
- ✅ **Tailwind CSS & Shadcn**: Provides a modern, responsive, and intuitive design.
- ✅ **Clerk**: Handles secure user authentication and management.
- ✅ **Sentry**: Tracks errors and monitors performance for a smooth user experience.
- ✅ **Lexical**: Enables advanced text editing with rich formatting options.

## 📑 Contents
- 🌟 [Getting Started](#getting-started)
- 🛠️ [Installation Commands](#installation-commands)
- 🎬 [Running the App](#running-the-app)

## 🌟 Getting Started
Follow the steps below to run the LiveDocs application locally.

### 1️⃣ Initialize the Project
```bash
npx create-next-app@latest livedocs
```
### 2️⃣ Set Up Node.js
```bash
nvm install 20.16.0
nvm use 20.16.0
```
### 3️⃣ Start the Application
```bash
npm run dev
```
## 🛠️ Installation Commands
### Install Tailwind CSS and Shadcn
```bash
npm install tailwindcss postcss autoprefixer  
npx tailwindcss init  
npm install shadcn
```
### Install Additional Libraries
```bash
npm install @clerk/nextjs  
npm install @liveblocks/client @liveblocks/zustand  
npm install lexical @lexical/react  
npm install sentry-nextjs
```
## 🎬 Running the App
Start the development server:
```bash
npm run dev  
```
Open your browser and navigate to http://localhost:8081.
