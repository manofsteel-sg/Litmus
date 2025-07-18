# SAP TCode Validator

This project is a web application designed to validate SAP TCodes. It consists of a Spring Boot backend and a React (Vite + TypeScript + Tailwind CSS) frontend.

## Project Structure

-   `backend/`: Contains the Spring Boot application.
-   `frontend/`: Contains the React frontend application.

## Prerequisites

-   Java 17 or later
-   Maven 3.6 or later (for backend)
-   Node.js 18 or later (for frontend)
-   npm or yarn (for frontend)

## Getting Started

### Backend (Spring Boot)

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Build the project:**
    ```bash
    mvn clean install
    ```

3.  **Run the application:**
    ```bash
    mvn spring-boot:run
    ```
    The backend will typically start on port `8080`.

### Frontend (React + Vite)

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    ```
    The frontend development server will typically start on port `3000`. It's configured to proxy API requests starting with `/api` to `http://localhost:8080`.

## Available Scripts

### Frontend

-   `npm run dev` or `yarn dev`: Starts the development server.
-   `npm run build` or `yarn build`: Builds the app for production.
-   `npm run preview` or `yarn preview`: Locally previews the production build.
-   `npm run lint` or `yarn lint`: Lints the TypeScript/TSX files.

### Backend

-   `mvn spring-boot:run`: Runs the Spring Boot application.
-   `mvn clean install`: Cleans the project and builds the JAR file.
-   `mvn test`: Runs the tests.

## API Proxy

The frontend development server (`vite.config.ts`) is configured to proxy requests from `/api` to the backend server running at `http://localhost:8080`. For example, a request to `/api/users` in the frontend will be forwarded to `http://localhost:8080/users`.
This avoids CORS issues during development.
Make sure your Spring Boot controllers are mapped accordingly (e.g., `@GetMapping("/users")`).
