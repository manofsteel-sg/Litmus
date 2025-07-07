# Agent Instructions for SAP TCode Validator Project

This document provides guidelines for the AI agent working on this project.

## Project Overview

-   **Backend:** Spring Boot (Java/Maven) located in the `backend/` directory.
    -   Main application class: `com.example.saptcodevalidator.SaptcodevalidatorApplication`
    -   Configuration: `backend/src/main/resources/application.properties`
    -   Build tool: Maven (`pom.xml`)
-   **Frontend:** React with Vite, TypeScript, and Tailwind CSS located in the `frontend/` directory.
    -   Main component: `frontend/src/App.tsx`
    -   Entry point: `frontend/src/main.tsx`
    -   Build tool: Vite (`vite.config.ts`, scripts in `package.json`)
    -   Styling: Tailwind CSS (`tailwind.config.js`, `frontend/src/index.css`)

## Development Guidelines

### General

1.  **Understand the Goal:** The primary goal is to build an application to validate SAP TCodes. Features should align with this goal.
2.  **Communication:** Clearly explain your plan before making changes. If you encounter issues or need clarification, ask the user.
3.  **Commits:** Use clear and concise commit messages. For this initial setup, a message like "feat: Initial project structure for backend and frontend" would be appropriate. Branch names should be descriptive (e.g., `feature/initial-setup`).
4.  **Testing:**
    -   For backend Java code, write JUnit tests.
    -   For frontend React components, consider React Testing Library for unit/integration tests.
    -   Always aim for test-driven development where practical.

### Backend (Spring Boot)

1.  **API Design:**
    -   RESTful principles should be followed for API design.
    -   Use clear and consistent naming for endpoints.
    -   APIs should be versioned if/when significant changes occur (e.g., `/api/v1/...`). For now, the `vite.config.ts` proxies `/api` to the root of the backend.
2.  **Dependencies:** Add new dependencies to `backend/pom.xml`. After adding, explain the purpose of the dependency.
3.  **Code Style:** Follow standard Java conventions.

### Frontend (React + Vite)

1.  **Component Structure:** Create reusable components where appropriate. Keep components focused on a single responsibility.
2.  **State Management:** For simple state, use React's built-in hooks (`useState`, `useContext`). For more complex global state, we can discuss adding a state management library like Zustand or Redux Toolkit later.
3.  **Styling:** Utilize Tailwind CSS utility classes primarily. Avoid writing custom CSS files unless absolutely necessary for complex styles not achievable with Tailwind.
4.  **Dependencies:** Add new dependencies to `frontend/package.json` using `npm install <package-name>` or `yarn add <package-name>` (mention which one you're simulating). Explain the purpose of the new dependency.
5.  **Proxy:** Remember that the Vite development server proxies `/api` requests to `http://localhost:8080` (the backend). Ensure backend endpoints are designed with this in mind (e.g., a backend endpoint `/users` will be accessed via `/api/users` from the frontend).

## Running the Project (Reminder for Agent)

-   **Backend:**
    -   `cd backend`
    -   `mvn spring-boot:run` (or `./mvnw spring-boot:run` if a wrapper is added later)
-   **Frontend:**
    -   `cd frontend`
    -   `npm install` (if first time or dependencies changed)
    -   `npm run dev`

## Future Considerations (for the agent to remember)

*   User Authentication/Authorization
*   Database Integration for storing TCode information or validation rules
*   More sophisticated error handling and logging
*   CI/CD pipeline setup

If you need to modify this `AGENTS.md` file, please state your proposed changes clearly.
