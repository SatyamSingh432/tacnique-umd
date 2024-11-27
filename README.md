# User Management Dashboard

This project is a React-based User Management Application created using Vite. It showcases the ability to view, add, edit, and delete user data. The UI is styled using plain CSS without any component libraries to ensure full customization and simplicity.

## Features

- Display Users: Fetch and display a list of users with their details.
- Add Users: Add new users to the system via a user-friendly form.
- Edit Users: Modify existing user information dynamically.
- Delete Users: Remove users from the list.
- Responsive Design: The UI adapts well to different screen sizes.
- Error Handling: Informative error messages when API requests fail.

## Technologies Used

- Frontend Framework: React
- Build Tool: Vite
- Styling: Plain CSS (No component libraries)
- API: Data fetched from JSONPlaceholder (a free REST API for testing)

## Setup Instructions

1. Clone the Repository
   ```bash
   git clone https://github.com/SatyamSingh432/tacnique-umd.git
   ```
2. Navigate to the Project Directory
   ```bash
   cd tacnique-umd
   ```
3. Install Dependencies
   ```bash
   npm install
   ```
4. Start the Development Server
   ```bash
   npm run dev
   ```
   The application will be available at http://localhost:5173 (default Vite port).

## How It Works

### 1. Viewing Users

- On loading the app, a list of users is fetched from JSONPlaceholder and displayed.

### 2. Adding a User

- Click the "Create User" button to open the form.
- Fill out the user's details and submit to see the new user added to the list (simulated).

### 3. Editing a User

- Click the "Edit" button next to a user's details.
- Update the desired fields in the form and submit.

### 4. Deleting a User

- Click the "Delete" button to remove a user from the list (simulated).

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build.

## Styling

This project uses plain CSS for styling to maintain simplicity.

## Future Enhancements

- Implement pagination for large user lists.
- Use React Hook Form for form management.
- Enhance the styling for a more modern design.
- Use a state management library like Redux or Context API for better state handling.
