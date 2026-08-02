# Placement Portal

A Full Stack Placement Portal developed using **Spring Boot**, **React.js**, and **MySQL**.

The application provides separate modules for **Admin** and **Students**. Admins can manage aptitude and technical questions, while students can take online placement quizzes and view their results.

---

# Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- CSS

## Backend
- Spring Boot
- Spring Data JPA
- REST APIs

## Database
- MySQL

## Tools
- VS Code
- IntelliJ IDEA
- Postman
- Git & GitHub

---

# Features

## Authentication
- User Registration
- User Login
- Role-based Login (Admin / Student)

---

# Admin Module

### Dashboard
- View All Questions
- Add New Questions
- Update Existing Questions
- Delete Questions
- Search Questions by Category

### Question Management
- CRUD Operations
- Form Validation
- Real-time UI Updates

---

# Student Module

### Quiz
- Start Quiz
- Display One Question at a Time
- Previous & Next Navigation
- Select Answers
- Submit Quiz

### Result
- Calculate Score
- Display Correct Score
- Show Total Questions
- Show Correct Answers
- Show Wrong Answers

---

# Backend APIs

## Authentication APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

---

## Question APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/questions | Get All Questions |
| POST | /api/questions | Add Question |
| PUT | /api/questions/{id} | Update Question |
| DELETE | /api/questions/{id} | Delete Question |
| GET | /api/questions/search?category=Java | Search Questions |

---

## Quiz APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/questions | Fetch Quiz Questions |
| POST | /api/quiz/submit *(Optional)* | Submit Quiz |

---

# Project Structure

```
placementportal
│
├── backend
│   │
│   ├── controller
│   │     ├── AuthController.java
│   │     └── QuestionController.java
│   │
│   ├── service
│   │     ├── AuthService.java
│   │     └── QuestionService.java
│   │
│   ├── repository
│   │     ├── UserRepository.java
│   │     └── QuestionRepository.java
│   │
│   ├── entity
│   │     ├── User.java
│   │     └── Question.java
│   │
│   └── PlacementPortalApplication.java
│
└── frontend
    │
    ├── src
    │
    ├── pages
    │     ├── Login.jsx
    │     ├── Register.jsx
    │     ├── Dashboard.jsx
    │     ├── AdminDashboard.jsx
    │     ├── Quiz.jsx
    │     └── Result.jsx
    │
    ├── services
    │     └── api.js
    │
    ├── App.jsx
    └── main.jsx
```

---

# Screenshots

### Login Page

(Add Screenshot)

---

### Register Page

(Add Screenshot)

---

### Student Dashboard

(Add Screenshot)

---

### Admin Dashboard

(Add Screenshot)

---

### Add Question

(Add Screenshot)

---

### Edit Question

(Add Screenshot)

---

### Delete Question

(Add Screenshot)

---

### Search Questions

(Add Screenshot)

---

### Quiz Page

(Add Screenshot)

---

### Result Page

(Add Screenshot)

---

# How to Run

## Clone Repository

```bash
git clone https://github.com/Khushi7870/placement-portal-backend.git
```

---

## Backend

```bash
cd placementportal
```

Run the Spring Boot Application.

Backend URL

```
http://localhost:8082
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

# Git Commands

```bash
git add .

git commit -m "Updated Placement Portal"

git push origin main
```

---

# Completed Milestones

## Day 1
- Project Setup
- Spring Boot Configuration

## Day 2
- MySQL Configuration
- Entity Creation

## Day 3
- User Registration API

## Day 4
- Login API

## Day 5
- React Project Setup

## Day 6
- Login Integration

## Day 7
- Dashboard Creation

## Day 8
- Question Entity
- Repository

## Day 9
- Question REST APIs

## Day 10
- React Backend Integration

## Day 11
- Admin Dashboard UI

## Day 12
- CRUD Operations

## Day 13
- View Questions
- Add Questions
- Update Questions
- Delete Questions
- Search Questions by Category
- End-to-End Testing

## Day 14
- Quiz Page
- Display Questions
- Next & Previous Buttons
- Answer Selection
- Submit Quiz
- Score Calculation
- Result Page

---

# Upcoming Features

- Quiz Timer
- Leaderboard
- Company-wise Mock Tests
- Student Progress Tracking
- Admin Analytics Dashboard
- Excel/PDF Report Export
- Difficulty-wise Quiz
- Random Question Generation

---

# Author

**Khushi**

GitHub:
https://github.com/Khushi7870

---

# License

This project is developed for learning purposes.