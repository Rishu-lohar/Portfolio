# Rishu Lohar — Portfolio

A full-stack MERN portfolio website built with React + Vite (frontend) and Express (backend).

## Stack
- **Frontend**: React 19, Vite, React Router v7, Bootstrap 5, react-toastify
- **Backend**: Node.js, Express 5 (contact form API)

## Running the project

Two workflows run concurrently:

| Workflow | Command | Port |
|---|---|---|
| Start application | `npm run dev` | 5000 (webview) |
| Backend API | `node backend/index.mjs` | 3001 |

The Vite dev server proxies `/contact` requests to the Express backend on port 3001.

## Project structure
```
/                  → Vite + React frontend
src/
  components/      → Navbar, Hero, Skills, Certificate, Footer, ProjectCard
  pages/           → Home, About, Projects, Contact, Dashboard
  data/projects.js → Project list
  assests/         → profile.jpg (replace with real photo)
backend/
  index.mjs        → Express entry point (port 3001)
  src/routes/      → contactRoutes.mjs
  src/controllers/ → contactController.mjs
public/
  Rishu_Lohar_Resume.txt → Resume file (replace with PDF)
```

## To personalise
- **Profile photo**: Replace `src/assests/profile.jpg` with your actual photo (any size; keep the filename)
- **Social links**: Update URLs in `src/components/Navbar.jsx` and `src/pages/Contact.jsx`
- **Projects**: Edit `src/data/projects.js` with real project links
- **Contact details**: Update email/phone in `src/pages/Contact.jsx`
- **Resume**: Replace `public/Rishu_Lohar_Resume.txt` with a PDF and update the href in `src/components/Hero.jsx`

## User preferences
- Dark theme with lime-green (#7CFC00) accent — do not change the colour palette
- Single-page scrolling layout on the home route
- Keep Bootstrap in the project (already installed)
