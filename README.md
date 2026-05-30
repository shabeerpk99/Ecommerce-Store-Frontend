# Ecommerce Alibaba Store

A React + TypeScript ecommerce storefront built with Vite and Tailwind CSS.

## 🚀 Features

- Fully functional category navigation and product listing
- Product detail pages with image gallery and related products
- Cart management with add, remove, quantity updates, and checkout flow
- Search-style layout, filters, and pagination for category browsing
- Responsive design with modern Tailwind styling

## 📦 Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v3
- React Router DOM 7
- ESLint for code quality

## ▶️ Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## ✅ Production build

```bash
npm run build
npm run preview
```

## 🧩 Available scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## 📁 Project structure

- `src/App.tsx` — application routing and provider setup
- `src/components/` — shared UI components
- `src/components/sections/` — homepage section components
- `src/context/` — cart state provider and hooks
- `src/data/` — product and homepage data
- `src/pages/` — page screens for home, category, product detail, cart, checkout

## 🧠 Notes

- Cart state is managed via React Context
- Category query strings use `?cat=` for navigation
- Related products are limited to 3 items on the details page
- The codebase has been cleaned and verified with ESLint and production build
