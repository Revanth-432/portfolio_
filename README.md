# Personal Portfolio

A clean, responsive, and modern personal portfolio website built with semantic HTML5, CSS3, and Vanilla JavaScript.

## Features

- **Semantic HTML5:** Well-structured content using `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, and `<footer>`.
- **Responsive Design:** Looks great on mobile, tablet, and desktop screens using a fluid layout and CSS Grid/Flexbox.
- **Dark/Light Mode:** Toggle switch that saves user preference in `localStorage` and respects system preferences.
- **Smooth Scrolling:** Enhanced navigation experience.
- **Mobile Navigation:** Custom off-canvas menu for smaller screens.
- **Modern Aesthetics:** Features CSS variables for easy theming, clean typography, hover animations, and FontAwesome icons.

## Technologies Used

- HTML5
- CSS3 (Vanilla)
- JavaScript (Vanilla)
- [FontAwesome](https://fontawesome.com/) (Icons)
- [Google Fonts](https://fonts.google.com/) (Inter)

## How to Run Locally

Since this project uses only static files without build tools, it's very easy to run locally.

### Option 1: Live Server (Recommended)
1. Open the project folder in Visual Studio Code.
2. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. The site will automatically open in your default browser at `http://localhost:5500`.

### Option 2: Direct File Open
Simply double-click the `index.html` file to open it in your browser. Note: Some JavaScript features related to fetching or local storage might behave differently under the `file://` protocol.

### Option 3: Node HTTP Server
If you have Node.js installed, you can use `http-server`:
```bash
npx http-server
```

## Structure
- `index.html` - The main structure of the page.
- `style.css` - All styling, including responsive media queries and dark mode variables.
- `script.js` - Interactions: Theme toggling, mobile menu, active navigation state, and smooth scrolling.
