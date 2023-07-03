# Epitech Project Management Application

This project is a React-based application designed for managing projects at Epitech. It provides an interface for users to view, create and manage projects.

## Table of Contents

1. [File Structure](#file-structure)
2. [Usage](#usage)

## File Structure

The application is composed of several TypeScript files each serving a unique purpose in the functionality of the application.

- **`App.tsx`**: This is the main application component. It sets up the routing for the app and initializes and manages the main state.

- **`Home.tsx`**: This component serves as the home page of the application. It contains links to the Project List and Project Submission views.

- **`Interfaces.ts`**: This file holds TypeScript interfaces for the `Project` and `Step` data structures used throughout the application.

- **`ProjectList.tsx`**: This component fetches and displays a list of all projects. Each project can be clicked on for a detailed view.

- **`ProjectView.tsx`**: This component displays the details of a single project. It receives a `Project` object as a prop and displays its properties.

- **`ProjectTimeline.tsx`**: This component provides a form for creating and modifying the steps of a project.

- **`FormContext.tsx`**: This file creates a React context for handling form data throughout the application. It provides functionality for updating the form state and submitting the form.

- **`ProjectContext.tsx`, `ProjectDelivery.tsx`**: These components handle project creation. `ProjectContext` is responsible for defining the context, goal, and description of a project, while `ProjectDelivery` manages the timeline and participants.

## Usage

These instructions will guide you through running and building the project.

### Running the Application in Development Mode

1. Navigate into the project directory.

2. Install all dependencies using NPM:

   `npm install`

3. Start the development server:

   `npm run start`

   This will start the development server. You can now access the application at [http://localhost:3000](http://localhost:3000) in your browser. The page will reload if you make edits. You will also see any lint errors in the console.

### Building the Application for Production

To build the application for production, run:

`npm run build`

This command builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.