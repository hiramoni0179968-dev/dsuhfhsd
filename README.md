# FF TopUp Demo

A frontend-only **demo/UI prototype** of a diamond top-up landing page, built with React,
TypeScript, and Tailwind CSS. This project is for educational/portfolio purposes only.

## ⚠️ Important — this is a demo

- No real payment processing exists anywhere in this codebase.
- No Garena account access, login, or credential collection is implemented.
- All packages, prices, activity feed entries, and testimonials are mock data
  defined in `src/data/mockData.ts`.
- Submitting the top-up form only shows a simulated confirmation modal — it does
  not contact any server or third party.
- This project is **not affiliated with Garena or Free Fire** in any way.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    Navbar.tsx
    Hero.tsx
    TopUpForm.tsx
    PackageCard.tsx
    PackageGrid.tsx
    HowItWorks.tsx
    Features.tsx
    DemoActivity.tsx
    Testimonials.tsx
    FAQ.tsx
    Footer.tsx
    ConfirmationModal.tsx
    Toast.tsx
  data/
    mockData.ts
  App.tsx
  main.tsx
  index.css
```

## Tech stack

- React 18 + TypeScript
- Tailwind CSS (custom "char" / "ember" gaming color palette)
- Vite
- lucide-react icons
