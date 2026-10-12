# Sakshi Walke portfolio

A floral, editorial portfolio for an aspiring UI/UX designer with web development experience. Built using plain HTML, CSS, JavaScript and inline SVG. No dependencies, build step, remote fonts or API keys.

## Run in VS Code

1. Extract the ZIP and open the `sakshi-portfolio` folder in VS Code.
2. Open `index.html` in your browser. The portfolio works directly from the filesystem.
3. Edit files, save and refresh the browser.

Optional local server, from the same folder:

```sh
python -m http.server 8000
```

Then visit http://localhost:8000.

## Publish on GitHub and Vercel

Create an empty GitHub repository using your own account. Do not initialise it with a README, licence or .gitignore because the project already contains files. In the project folder run:

```sh
git init
git add .
git commit -m "Add Sakshi Walke portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sakshi-portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with the actual repository owner. Authenticate with GitHub when prompted. If Git asks for your identity, set `git config --global user.name "Your Name"` and `git config --global user.email "YOUR_GITHUB_EMAIL"` before committing.

In Vercel:

1. Choose Add New → Project and connect your GitHub account.
2. Import the existing `sakshi-portfolio` repository. Do not choose a template-cloning flow.
3. Framework Preset: Other.
4. Root Directory: the directory containing `index.html`, normally `./`.
5. Build Command and Install Command: leave empty. Output Directory: `.` if an explicit override is needed; otherwise use the static default.
6. No environment variables are required.
7. Deploy and open the URL Vercel returns.

Official guidance: https://vercel.com/docs/deployments

Test the production URL, resume download, mobile layout, project panels and palette controls before sharing it. Future pushes to the connected production branch redeploy the site.

## Editing

- `index.html`: name, introduction, projects, education, skills and links.
- `styles.css`: layouts, responsive breakpoints, flower and text animations.
- `themes.css`: three global colour palettes and seasonal SVG/CSS visual effects.
- `app.js`: project-panel content, colour studio, sample save interaction, and motion control.
- `assets/Sakshi_Walke_Resume.pdf`: supplied résumé, downloadable from the page.
- `assets/favicon.svg`: custom SW monogram.
- `vercel.json`: response headers.

To update the resume, replace the PDF using the same filename. To edit expanded project notes, change the `projects` object in `app.js`. The page uses email links rather than a backend contact form.

## Design and interactions

The cream, forest-green and blush palette takes its cue from the supplied reference. Large typography makes Sakshi's name and intended roles prominent. Botanical SVG lilies and hydrangeas bloom at the page borders without covering the primary content. The design includes gently moving floral motifs, a slow ribbon, colour-changing accent text and illustrated interfaces.

The colour studio changes the entire portfolio, including navigation, project art, dialogs, typography accents, section backgrounds and border illustrations. Rose Garden shows blooming flowers, Seaside Morning shows shells, sand and gentle waves, and Apricot Afternoon shows drifting autumn leaves. The chosen theme is saved in localStorage when available; blocked storage falls back gracefully. Only the theme name is stored. Its save button is an in-memory demonstration that resets on page reload. Nothing is sent to a server or stored permanently.

Project buttons open native HTML dialogs, with Escape support, an accessible close button and focus restored to the triggering button. Keyboard focus styles and a skip link are included. Reduced-motion preferences disable animations. The footer contains a motion pause button. CSS animations pause when the page is hidden.

## Content accuracy

All biographical, education and project claims come from the supplied Sakshi Walke resume and the user's requested aspiring UI/UX positioning. B.E. Computer Science, expected graduation 2027, and CGPA 7.16 are reproduced from the resume. No SSC/HSC details were supplied for Sakshi.

There are five projects: AI-Based Timetable Generator, Student Placement Prediction, Roommate Finder, AI-Based Interview Platform, and Personal Finance Management Dashboard. LinkedIn and the three available project repository links were extracted from the resume. Some repositories belong to collaborators; the portfolio labels them accordingly. No personal GitHub URL was invented.

Project visuals are recreated concepts and are explicitly labelled. No user interviews, usability-study results, quantified UX improvements, employment experience, testimonials, certifications or Figma proficiency have been invented. The hero's “petal.” interface is a portfolio-only creative exploration, not a claimed client project. The source resume remains unmodified.

## Verification

JavaScript syntax, local asset paths, IDs and anchors, project data coverage, dialog open/close/focus behaviour, colour selection, save toggle, motion controls and ZIP integrity were checked. Browser-based visual testing and Vercel deployment were unavailable in the authoring environment. The portfolio has CSS layouts for desktop, tablet and phone widths, but real-device appearance should be checked after deployment.
