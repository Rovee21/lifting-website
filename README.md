# Lifting Tracker

## Overview

Lifting Tracker is a full-stack web application designed to help users track their lifting progress and goals. Users can input their current lifts and goals, and the app will calculate and display how close they are to reaching their goals.

## Features

- Add and view lifts with exercise name, weight, and reps.
- Calculate and display progress towards lifting goals.
- Persist data using MongoDB.

## Technologies

- **Frontend**: React, Axios
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Setup

### Prerequisites

- Node.js and npm
- MongoDB Atlas account or local MongoDB instance

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/lifting-tracker.git
    cd lifting-tracker
    ```

2. **Install backend dependencies**:
    ```sh
    cd server
    npm install
    ```

3. **Install frontend dependencies**:
    ```sh
    cd ../client
    npm install
    ```

4. **Set up MongoDB**:
    - Create a MongoDB Atlas account and set up a new cluster, or use a local MongoDB instance.
    - Create a `.env` file in the `server` directory with the following content:
        ```env
        MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/weightlifting?retryWrites=true&w=majority
        PORT=5001
        ```

### Running the Application

1. **Start the backend server**:
    ```sh
    cd server
    npm start
    ```

2. **Start the frontend development server**:
    ```sh
    cd ../client
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

### Backend (`server`)

- **`server.js`**: Entry point of the backend server.
- **`models/Lift.js`**: Mongoose model for the lift data.
- **`routes/lifts.js`**: Express routes for handling API requests related to lifts.
- **`controllers/liftController.js`**: Controller for handling lift logic.

### Frontend (`client/src`)

- **`index.js`**: Entry point of the React application.
- **`App.jsx`**: Main component that integrates `LiftForm` and `LiftList`.
- **`components/LiftForm.jsx`**: Form component for adding new lifts.
- **`components/LiftList.jsx`**: Component for displaying a list of lifts.
- **`components/LiftItem.jsx`**: Component for displaying individual lift details.
- **`api.js`**: Axios instance configured for making API requests.

## Usage

1. **Add a Lift**:
    - Enter the exercise name, weight, and reps in the form.
    - Click "Add Lift" to save the lift.

2. **View Lifts**:
    - The list of added lifts will be displayed below the form.

3. **Progress Calculation**:
    - The app will automatically calculate and display how close you are to your lifting goals based on the entered lifts.

