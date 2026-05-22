# Ecommerce Store — Desktop Home Page

Pixel-faithful implementation of the [Figma Ecommerce Web Design (Community)](https://www.figma.com/design/8Igr4IzlG1bE1ko7gOyNQP/Ecommerce-Web-Design--Community-?node-id=1-776) home page (`web-main` frame, 1440px desktop).

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v3
- Inter (Google Fonts)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Project structure

- `src/components/` — Header, Navbar, Footer, shared UI
- `src/components/sections/` — Home page sections (hero, deals, categories, inquiry, etc.)
- `src/data/homeData.ts` — Copy and product data from Figma
- `public/images/` — Assets exported from Figma via MCP

## Design tokens (from Figma)

| Token | Value |
|-------|-------|
| Primary | `#0D6EFD` |
| Primary gradient | `linear-gradient(180deg, #127FFF → #0067FF)` |
| Dark | `#1C1C1C` |
| Gray 100–800 | `#F7FAFC` … `#606060` |
| Max width | `1440px` |
| Side padding | `130px` |
