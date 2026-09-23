# Yuvraj A. Chaurasiya's Personal Portfolio

A responsive, single-page personal portfolio created for the CodeKrafters SRM 2026 first-year beginner web-development task. It presents Yuvraj A. Chaurasiya as a first-year CSE Cybersecurity student and documents his progression from Class 11 and 12 projects into college-level web development and cybersecurity learning.

## What it demonstrates

- Semantic HTML structure with About, Skills, Projects, Achievements, and Contact sections
- Responsive CSS layouts for desktop, tablet, and phone screens
- Basic JavaScript for the mobile menu, scroll-reveal animations, contact-form validation, and the dynamic footer year
- UI/UX details including focus states, an accessible mobile navigation menu, labelled form controls, and a skip-to-content link
- Real project history including CraveCart, Cybersecurity First Year, SMS, Maths Quiz, and the Trigonometry Matching Game beta
- External links to the Cybersecurity GitHub repository, CodePen projects, and TryHackMe profile
- Honest project descriptions that distinguish completed work from beta/experimental work

## Project structure

```
.
├── index.html     # Page content and semantic structure
├── styles.css     # Visual design, responsive rules, and animations
├── script.js      # Menu, animation, form, and footer interactions
└── README.md      # Setup, testing, and submission notes
```

## Run locally

No build step or installation is required. Open `index.html` in a browser.

## Before publishing

1. Confirm the external GitHub, CodePen, and TryHackMe links before publishing.
2. Create a public GitHub repository and push these files with meaningful commits.
3. Deploy the repository on GitHub Pages, Netlify, or Vercel, then add the live link to your submission.
4. Record a 60-second walkthrough showing the desktop layout, mobile menu, scroll animations, theme switcher, and form validation.

## Test checklist

- [x] Navigation anchors point to existing sections
- [x] Mobile menu opens and closes with correct ARIA state
- [x] Required-field and invalid-email messages work
- [x] Valid form feedback is displayed without a page reload
- [x] Phone-specific layout reduces hero overflow and removes the overlapping scroll cue

> The contact form is frontend-only by design. It validates the message locally but does not send email until a backend or form service is connected.
