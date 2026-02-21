# MERN Students Hub

A modern, full-stack Student Management System built using the MERN stack (MongoDB, Express, React, Node.js). 
This application features a beautiful glassmorphism UI and allows you to add, view, and delete student records seamlessly.

![Modern UI Preview](frontend/public/favicon.ico) *(Replace with actual screenshot if available)*

## Features

- **Full-stack Architecture**: Backend RESTful API paired with a React frontend.
- **Premium UI Design**: Built with a sleek glassmorphism design system using raw CSS variables, gradients, and micro-animations.
- **Database Integration**: Connects to a local MongoDB instance to perform real-time CRUD operations.
- **Form Validation**: Clean error handling integrated between the frontend and backend.

## Tech Stack

* **Frontend:** React, HTML, Vanilla CSS (Modern CSS framework with CSS variables)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (using Mongoose for schema modeling)
* **API Communication:** Native Javascript `fetch` API

## Quick Start Guide

Follow these instructions to run the project locally on your machine.

### Prerequisites

You must have the following installed on your computer:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally on default port 27017)
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shayan-mir002/mern-basic-project.git
   cd mern-basic-project
   ```

2. **Install Backend Dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Return to Root:**
   ```bash
   cd ..
   ```

### Configuration

Ensure your MongoDB instance is running locally.

In the `backend` folder, there is a `.env` file that contains the necessary environment variables:

```env
MONGO_URI=mongodb://localhost:27017/MERN
PORT=5000
```
*(No action is required unless you want to change the database port or name)*.

### Running the Application

This project uses `concurrently` to run both the frontend and backend servers simultaneously from the root directory.

1. **Open a terminal in the root project folder.**
2. **Run the start command:**
   ```bash
   npm run dev
   ```

The backend server will start on `http://localhost:5000`.
The React frontend will start on `http://localhost:3000` and automatically open in your default browser.

## API Endpoints

The backend Express server exposes the following endpoints at `http://localhost:5000/api/students`:

* `GET /` - Retrieve all students
* `POST /` - Add a new student (requires `name`, `email`, `age` in body)
* `PUT /:id` - Update an existing student by ID
* `DELETE /:id` - Delete a student by ID

## Troubleshooting

- **MongoDB Connection Error:** Ensure your local MongoDB server is active.
- **E11000 Duplicate Key Error:** If you face unique index errors in MongoDB (like stale `studentId` or `rollNumber` indexes), you can clear them using the provided script `node backend/fixdb.js`.

---


