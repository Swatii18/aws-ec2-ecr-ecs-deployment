# Dockerized Flask and Node.js Application

A containerized web application featuring a **Node.js + Express frontend** and a **Python Flask backend**, connected using Docker Compose.

The application provides a signup form through the frontend. Submitted data is forwarded to the Flask backend, which handles data storage using JSON and MongoDB.

## Project Overview

This project demonstrates how to:

- Build a frontend using Node.js and Express.
- Develop a backend using Python Flask.
- Connect two independent services.
- Create Docker images for both services.
- Run multiple containers using Docker Compose.
- Configure environment variables.
- Containerize and deploy an application using Docker.

## Architecture

```text
             User / Browser
                   |
                   |
             Frontend
          Node.js + Express
              Port 3000
                   |
                   | HTTP Request
                   |
             Backend
              Python Flask
              Port 9000
                   |
             +-----+-----+
             |           |
          data.json    MongoDB
```

Docker Compose manages the frontend and backend services and provides network communication between them.

## Technologies Used

| Technology     | Purpose                      |
| -------------- | ---------------------------- |
| Node.js        | JavaScript runtime           |
| Express.js     | Frontend web server          |
| EJS            | Dynamic HTML templating      |
| Axios          | HTTP communication           |
| Python         | Backend programming          |
| Flask          | Backend framework            |
| MongoDB        | Database                     |
| Docker         | Application containerization |
| Docker Compose | Multi-container management   |
| Git & GitHub   | Version control              |

## Project Structure

```text
docker_swati/
│
├── backend/
│   ├── app.py
│   ├── data.json
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .dockerignore
│
├── frontend/
│   ├── views/
│   │   └── index.ejs
│   ├── app.js
│   ├── package.json
│   ├── package-lock.json
│   ├── Dockerfile
│   └── .dockerignore
│
├── docker-compose.yaml
├── .gitignore
└── README.md
```

## Application Features

### Frontend

- Signup form using EJS templates.
- Node.js and Express server.
- Axios for communicating with the Flask backend.
- Form submission through an HTTP POST request.

### Backend

- Flask API for handling submitted data.
- JSON file-based data storage.
- MongoDB integration.
- API endpoint for retrieving stored JSON records.

## API Endpoints

| Method | Endpoint  | Description                         |
| ------ | --------- | ----------------------------------- |
| GET    | `/`       | Displays the signup page (frontend) |
| POST   | `/submit` | Submits form data to the backend    |
| GET    | `/api`    | Retrieves records from `data.json`  |
| GET    | `/View`   | Retrieves records from MongoDB      |

## Prerequisites

Install the following before running the project:

- Docker Desktop
- Git
- A MongoDB database and connection URI

## Environment Configuration

Create a `.env` file inside the `backend` directory.

Add your MongoDB connection string:

```env
MONGO_URI=your_mongodb_connection_string
```

**Important:** Never commit your `.env` file or expose database credentials publicly.

## Running the Application Using Docker Compose

Clone the repository:

```bash
git clone https://github.com/Swatii18/dockerized-flask-node-app.git
```

Navigate to the project directory:

```bash
cd dockerized-flask-node-app
```

Build and start both services:

```bash
docker compose up --build
```

Access the application:

- **Frontend:** http://localhost:3000/
- **Backend API:** http://localhost:9000/api

To check running containers:

```bash
docker ps
```

To stop the application:

```bash
docker compose down
```

## Docker Images

The application uses separate Docker images for the frontend and backend.

Build the frontend image:

```bash
docker build -t docker-swati-frontend:1.0 ./frontend
```

Build the backend image:

```bash
docker build -t docker-swati-backend:1.0 ./backend
```

## Docker Compose

Docker Compose is used to manage both application services.

The frontend communicates with the backend using the Compose service hostname:

```text
http://backend:9000
```

This allows the containers to communicate through Docker's internal network.

## Security Considerations

- Environment variables are kept outside the Docker images.
- `.env` files are excluded using `.gitignore` and `.dockerignore`.
- `node_modules` and Python cache files are excluded from version control.
- Production applications should hash passwords and avoid storing confirmation passwords.

## Repository

GitHub: https://github.com/Swatii18/dockerized-flask-node-app

---

**Project:** Dockerized Flask and Node.js Application  
**Author:** Swati Singh Chauhan
