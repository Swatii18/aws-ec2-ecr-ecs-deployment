# AWS Cloud Deployment Project – Dockerized Flask and Node.js Application

## 1. Project Overview

This project demonstrates three different approaches to deploying a containerized web application using Amazon Web Services (AWS).

The application consists of a Node.js and Express frontend, a Python Flask backend, and MongoDB Atlas for database storage.

The project covers EC2 deployment, Docker containerisation, multi-instance networking, Amazon ECR image management, and Amazon ECS container orchestration.

## 2. Technologies and AWS Services

**Application Technologies**

- Node.js and Express.js
- Python and Flask
- EJS and Axios
- MongoDB Atlas
- Docker and Docker Compose
- Git and GitHub

**AWS Services**

- Amazon EC2 – Virtual server hosting
- Amazon ECR – Private Docker image repositories
- Amazon ECS – Container orchestration
- AWS Fargate – Serverless container execution
- Amazon VPC – Networking and security
- AWS IAM – Identity and access management
- AWS Secrets Manager – Secure configuration management
- Amazon CloudWatch – Container log monitoring

---

## 3. Task 1 – Single EC2 Deployment Using Docker Compose

### Objective

Deploy the Flask backend and Node.js frontend on a single Amazon EC2 instance using Docker Compose.

### Implementation

1. Launched an Ubuntu EC2 instance.
2. Installed Docker and Docker Compose.
3. Configured the application environment variables.
4. Built the frontend and backend Docker images.
5. Used Docker Compose to run both application containers.
6. Configured security group rules to allow frontend access.
7. Accessed and tested the application through the EC2 public IP.

### Architecture

Both containers run on the same EC2 instance:

- Frontend: Express.js – Port 3000
- Backend: Flask – Port 9000
- Database: MongoDB Atlas

### Testing and Validation

- Frontend successfully accessed through the browser.
- Frontend-to-backend communication verified.
- Form submission tested successfully.
- Submitted records verified in MongoDB Atlas.

### Evidence

Refer to the screenshots in `1_Single_EC2_Deployment/screenshots/`.

---

## 4. Task 2 – Separate EC2 Deployment

### Objective

Deploy the Flask backend and Node.js frontend on two separate Amazon EC2 instances.

### Implementation

1. Created two Ubuntu EC2 instances.
2. Installed Docker on both instances.
3. Built and deployed the Flask backend container.
4. Built and deployed the Express frontend container.
5. Configured the frontend to communicate with the backend using its private IP address.
6. Configured security groups to control communication between the instances.
7. Accessed and tested the frontend through its public IP.

### Architecture

**Frontend EC2**

- Hosts the Express.js application.
- Exposes port 3000 for browser access.

**Backend EC2**

- Hosts the Flask application.
- Runs on port 9000.
- Accessible internally from the frontend instance.

**Database:** MongoDB Atlas.

### Testing and Validation

- Frontend successfully accessed through the browser.
- Private network communication verified.
- Form submission tested successfully.
- Submitted records verified in MongoDB Atlas.

### Evidence

Refer to the screenshots in `2_Separate_EC2_Deployment/screenshots/`.

---

## 5. Task 3 – Docker Deployment Using Amazon ECR and ECS

### Objective

Build and deploy the frontend and backend Docker containers using Amazon ECR, Amazon ECS, and AWS Fargate.

### Implementation

**Step 1 – Amazon ECR**

- Created two private ECR repositories:
  - `swati-flask-backend`
  - `swati-express-frontend`
- Built the respective Docker images.
- Authenticated with Amazon ECR.
- Pushed both images to their repositories.

**Step 2 – Amazon ECS**

- Created the ECS cluster `Swati-Docker-Cluster`.
- Created the task definition `swati-docker-task`.
- Configured the frontend and backend as separate containers within the same ECS task.
- Configured the application environment variables and container ports.

**Step 3 – AWS Configuration**

- Used AWS Fargate as the compute engine.
- Configured VPC networking and security groups.
- Configured IAM task execution permissions.
- Stored the MongoDB connection string in AWS Secrets Manager.
- Used CloudWatch for container log monitoring.

**Step 4 – ECS Deployment**

- Created the ECS service `swati-docker-service`.
- Deployed the task using Fargate.
- Enabled public IP assignment for frontend access.
- Configured frontend-to-backend communication using the shared task network.

### Architecture

- Frontend container: Express.js – Port 3000.
- Backend container: Flask – Port 9000.
- Container images: Amazon ECR.
- Orchestration: Amazon ECS.
- Compute: AWS Fargate.
- Database: MongoDB Atlas.

### Testing and Validation

- Both containers successfully deployed.
- Frontend successfully accessed through the browser.
- Frontend-to-backend communication verified.
- Form submission tested successfully.
- Submitted records verified in MongoDB Atlas.

### Evidence

Refer to the screenshots in `3_Docker_ECR_ECS_Deployment/screenshots/`.

---

## 6. Security and Configuration

The following security practices were applied:

- Environment variables were used for application configuration.
- MongoDB credentials were stored securely using AWS Secrets Manager for the ECS deployment.
- IAM permissions were configured for ECS task execution and secret access.
- Security groups restricted unnecessary network access.
- The backend service was not exposed directly to public internet access in the separate EC2 deployment.
- Sensitive files, credentials, and private keys are excluded from the project submission.

---

## 7. Source Code and Repository

**GitHub Repository:**

https://github.com/Swatii18/dockerized-flask-node-app

The repository contains the Flask backend, Express frontend, Dockerfiles, Docker Compose configuration, and application documentation.

---

## 8. Project Outcome

All three deployment approaches were successfully implemented and tested.

This project provided practical experience in:

- Deploying applications on Amazon EC2.
- Configuring networking between multiple instances.
- Building and managing Docker containers.
- Using Docker Compose for multi-container applications.
- Managing container images through Amazon ECR.
- Orchestrating containers using Amazon ECS and AWS Fargate.
- Managing application secrets and IAM permissions.
- Testing application functionality and database connectivity.

**Project Status: Successfully Completed**

git clone https://github.com/Swatii18/aws-ec2-ecr-ecs-deployment.git

**Project:** Dockerized Flask and Node.js Application – AWS Deployment

**Author:** Swati Singh Chauhan
