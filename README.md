# Dynamik Challenge - Developer Registry System

## Overview

The Dynamik Challenge is a fullstack application designed to manage a registry of developers. This system consists of a **Spring Boot REST API** backend and a **React** frontend that provides a complete solution for developer management according to the specified requirements.

### Key Features

- **Complete CRUD Operations**: Create, read, and search developers
- **Search Functionality**: Find developers by nickname, name, or technology stack
- **Modern Tech Stack**: Spring Boot 3.5.3 + React 19 + TypeScript
- **Containerized Deployment**: Docker support for easy setup
- **Responsive UI**: Modern interface built with Styled Components

## Technology Stack

### Backend
- **Spring Boot 3.5.3** - REST API framework
- **Java 23** - Latest Java features
- **MySQL 8.2.0** - Primary database
- **H2 Database** - Testing and development
- **Spring Data JPA** - Data persistence
- **Spring Validation** - Request validation
- **Spring Security** - Security configuration(disable since spingboot 3 as basic auth underhood)
- **Maven** - Dependency management

### Frontend
- **React 19.1.0** - Framework
- **TypeScript 5.8.3** - Type safety
- **Vite 7.0.4** - Build tool and dev server
- **React Router 7.7.0** - Client-side routing
- **Styled Components 6.1.19** - CSS-in-JS styling
- **Axios 1.10.0** - HTTP client

## Getting Started

### Prerequisites
- Docker and Docker Compose
- Git

### Running the Application

#### 1. Clone the Repository
```bash
git clone git@github.com:GabrielDevJourney/Dynamik-challenge.git
cd Dynamik-challenge
```

#### 2. Start the Backend
```bash
cd backend/gabriel
docker-compose up --build
```
The API will be available at `http://localhost:8080`

#### 3. Start the Frontend
```bash
cd frontend/dynamikChallenge
docker-compose up --build
```
The web application will be available at `http://localhost:3000`

#### 4. Access the Application
Open your browser and navigate to `http://localhost:3000` to start using the developer registry system.

## API Documentation

### Endpoints

| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| POST | `/devs` | Create a new developer | 201 Created + Location header |
| GET | `/devs` | List all developers (max 20) | 200 OK + X-Total-Count header |
| GET | `/devs/{id}` | Get developer by UUID | 200 OK or 404 Not Found |
| GET | `/devs?terms=search` | Search developers | 200 OK |

### Developer Schema

```json
{
  "nickname": "string (required, unique, max 32 chars)",
  "name": "string (required, max 100 chars)",
  "birth_date": "YYYY-MM-DD (required)",
  "stack": ["string (optional, each max 32 chars)"]
}
```

### Example Requests

#### Create Developer
```bash
curl -X POST http://localhost:8080/devs \
  -H "Content-Type: application/json" \
  -d '{
    "nickname": "john_doe",
    "name": "John Doe",
    "birth_date": "1990-05-15",
    "stack": ["Java", "Spring Boot", "React"]
  }'
```

#### Search Developers
```bash
curl "http://localhost:8080/devs?terms=java"
```


### Areas for Enhancement

#### Backend Improvements
- **Enhanced Validation**: More sophisticated input validation
- **Unit Tests**: Comprehensive test coverage for services and controllers
- **Integration Tests**: End-to-end API testing
- **Database Optimization**: Indexing and query optimization
- **API Documentation**: Swagger/OpenAPI documentation
- **Security**: Authentication and authorization
- **Logging**: Structured logging with monitoring

#### Frontend Improvements
- **Form Validation**: Real-time client-side validation
- **Error Handling**: Better user feedback for errors
- **Loading States**: Improved UX with loading indicators
- **Responsive Design**: Mobile-first responsive layout
- **Testing**: Unit and integration tests with React Testing Library
- **Performance**: Code splitting and optimization
- **Accessibility**: WCAG compliance improvements

## Development Decisions

### Why Spring Boot?
- **Rapid Development**: More used to it
- **Ecosystem**: Rich ecosystem with excellent JPA and validation support
- **Standards**: Follows REST and Java enterprise patterns
- **Scalability**: Easy to scale and maintain

### Why React + TypeScript?
- **Developer Experience**: Excellent tooling and development experience
- **Type Safety**: TypeScript provides compile-time error checking
- **Component Architecture**: Reusable and maintainable UI components
- **Performance**: Vite provides fast development and build times

### Why Styled Components?
- **Component Isolation**: Styles scoped to components
- **Dynamic Styling**: JavaScript-powered styling capabilities
- **Modern CSS**: Support for modern CSS features
- **Developer Experience**: Great integration with React and TypeScript

**Developed for the Dynamik Challenge** 
