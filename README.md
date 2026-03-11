# 🎵 RevPlay – Full Stack Music Streaming Platform

RevPlay is a **full-stack music streaming web application** built using **Spring Boot and Angular**.
It allows users to **discover music, create playlists, manage favorites, and track listening history**.
The application demonstrates **modern full-stack architecture**, including **JWT authentication, REST APIs, Docker deployment, and a modular frontend architecture**.

# 🚀 Features
## 🔐 Authentication & Security
* User registration
* Login with **JWT authentication**
* Secure REST APIs using **Spring Security**
* Role-based access support

## 🎧 Music Features

* Browse songs, albums, and artists
* Play music through integrated player
* Create and manage playlists
* Add songs to favorites
* View listening history

## 👤 User Profile

* Update profile information
* Manage personal playlists
* Track listening activity

## 🔎 Search

* Search songs
* Search artists
* Explore albums

# 🏗 System Architecture

Frontend (Angular)
        │
        │ REST API
        ▼
Backend (Spring Boot)
        │
        │ JPA / Hibernate
        ▼
MySQL Database

Docker support allows the full system to run as **containerized services**.

# 🛠 Tech Stack

## Backend

* Java
* Spring Boot
* Spring Security
* JWT Authentication
* Spring Data JPA
* Maven

## Frontend

* Angular
* TypeScript
* HTML
* CSS

## Database

* MySQL

## DevOps

* Docker
* Docker Compose
* Nginx (for frontend container)

# 📁 Project Structure

springrev
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   ├── dto
│   └── config
│
├── revplay-frontend
│   ├── features
│   ├── models
│   ├── services
│   └── components
│
├── database
│   └── database scripts
│
├── uploads
│   └── uploaded music files
│
├── docker-compose.yml
└── README.md

# 🐳 Run with Docker (Recommended)
Start all services:
```bash
docker-compose up --build
```
Access the application:

Frontend
```
http://localhost:4200
```
Backend API
```
http://localhost:8080

# 💻 Run Manually

## Backend

Navigate to backend:

```bash
cd backend
```

Run application:

```bash
mvn spring-boot:run

Backend starts on:

http://localhost:8080
```


## Frontend
Navigate to frontend:

```bash
cd revplay-frontend
```
Install dependencies:

```bash
npm install
```

Run Angular application:

```bash
ng serve
```

Frontend starts on:

```
http://localhost:4200
```
# 🗄 Database Setup

Database configuration instructions are available in:

MYSQL_SETUP.md
```
SQL scripts can be found inside:

database/
```
# 📡 Main API Modules

* Authentication API
* User Management
* Songs API
* Albums API
* Artists API
* Playlist Management
* Favorites Management
* Listening History

# 🧪 Testing

Testing documentation is available in:

TESTING_COMPLETE.md

# 📌 Future Improvements

* Music recommendation engine
* Social features (share playlists)
* Streaming optimization
* Mobile UI improvements
* Admin dashboard

# 👩‍💻 Author

**Aishwarya**

Full Stack Developer
Java | Spring Boot | Angular | MySQL

