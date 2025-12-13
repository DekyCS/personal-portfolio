# Personal Portfolio

A modern personal portfolio website built to showcase my projects and technical articles. This application features a clean, responsive design using the latest React ecosystem tools.

## Key Features

- **Modern & Responsive UI**: Built with [Top-tier UI components](https://ui.shadcn.com/) and Tailwind CSS for a seamless experience across all devices.
- **Dynamic Content**: Dedicated sections for **Projects** and **Blog** posts.
- **Contact Integration**: Fully functional contact form powered by EmailJS.
- **Smooth Navigation**: intuitive routing with React Router v7.
- **Interactive Elements**: Animations and accessible primitives powered by Radix UI.

## Tech Stack

This project leverages the following technologies:

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [Tailwind Merge](https://github.com/dcastil/tailwind-merge)
- **UI Library**: [Shadcn/UI](https://ui.shadcn.com/) (Radix UI + Tailwind)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

THe application should now be running at `http://localhost:5173`.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint to check for code quality issues.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page views (Home, Projects, Blog, Contact)
├── lib/            # Utility functions
├── assets/         # Static assets
└── App.jsx         # Main application entry component
```
