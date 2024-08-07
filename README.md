## Getting Started

First, run the development server:

command promt

npm run dev
# or 
yarn dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Features

Homepage: Lists all posts with titles and excerpts.
Post Detail Page: Displays the full post details along with comments for that post.
Responsive Design: Uses Material-UI for styling and ensures a responsive layout.
Unit Tests: Includes unit tests for components using Jest and React Testing Library.

Project Structure

app/ - Contains Next.js pages and API routes.
components/ - Reusable React components.
public/ - Static assets such as images.
styles/ - Global and component-specific styles.
jest.config.js - Jest configuration file.
babel.config.js - Babel configuration file for transforming JavaScript and JSX.
tsconfig.json - TypeScript configuration file.

Adding New Features

Create New Pages: Add new pages in the app/ directory.
Add Components: Place reusable components in the components/ directory.
Update Styling: Modify styles in the styles/ directory or create new ones as needed

API Endpoints

Posts: https://jsonplaceholder.typicode.com/posts
Comments: https://jsonplaceholder.typicode.com/comments

Troubleshooting
Error: React is not defined: Ensure that React is imported in your test files if you're using JSX.
Build Issues: Verify that your configuration files (jest.config.js, babel.config.js, tsconfig.json) are set up correctly.

