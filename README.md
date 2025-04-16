# 🚀 Angular Portfolio Website

A modern, responsive portfolio website built using Angular. This project showcases your work, skills, and experience in a visually engaging format, and is hosted using GitHub Pages.

---

## 🧑‍💻 Features

- Responsive and clean UI built with Angular
- Smooth animations and modern SCSS styling
- Project showcase, resume download, and contact form
- Easy deployment to GitHub Pages

---

## 📦 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [Angular CLI](https://angular.io/cli)
- Git

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/rohithreddydepa/latest-portfolio.git
cd latest-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

The app will be available at: [http://localhost:4200](http://localhost:4200)

---

## 🚢 Deployment

To build and deploy the project to GitHub Pages, run:

```bash
bash deploy.sh
```

This script will:

- Build the Angular project using `ng build --base-href "/<repo-name>/"`
- Push the built files in the `dist/` directory to the `gh-pages` branch
- Publish the site to: `https://your-username.github.io/<repo-name>/`

Make sure to replace `<repo-name>` with your actual GitHub repository name.

---

## 📁 Project Structure

```
src/
│
├── app/                # Angular components and modules
├── assets/             # Static assets like images and fonts
├── environments/       # Environment configuration
└── styles.scss         # Global SCSS styles
```

---

## 💡 Customization

- Edit content in Angular components (e.g., `about`, `projects`, `contact`)
- Update styles in `styles.scss` and component-specific styles
- Replace image assets in `src/assets`

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

Thanks to the open-source community for Angular, SCSS, and GitHub Pages.
