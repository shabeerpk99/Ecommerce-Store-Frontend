# Production Deployment Checklist

## Pre-deployment
- [ ] Run `npm run build` and verify no errors
- [ ] Run `npm run lint` and fix any warnings
- [ ] Test all pages and features manually
- [ ] Test on mobile devices (responsive design)
- [ ] Check lighthouse score in DevTools

## Build & Performance
- [ ] Remove all console logs (✓ Done)
- [ ] Remove debug code (✓ Done)
- [ ] Set appropriate cache headers on CDN
- [ ] Enable gzip compression on server
- [ ] Minify and bundle assets (✓ Configured in vite.config.ts)

## Security
- [ ] Update to latest React/dependency versions: `npm update`
- [ ] Run security audit: `npm audit`
- [ ] Use HTTPS only in production
- [ ] Add security headers (Content-Security-Policy, etc.) on server
- [ ] Validate all user inputs server-side (when API is added)
- [ ] Sanitize HTML if rendering user content

## Data & State Management
- [ ] Cart persistence works (✓ localStorage added)
- [ ] Test cart recovery after page reload
- [ ] Implement API calls for real product data (replace mock data)
- [ ] Add authentication/JWT if needed

## Error Handling & Monitoring
- [ ] Error Boundary in place (✓ Done)
- [ ] 404 page configured (✓ Done)
- [ ] Setup error tracking (Sentry, LogRocket, etc.)
- [ ] Setup analytics (Google Analytics, Mixpanel, etc.)
- [ ] Test error scenarios (network failures, invalid routes)

## SEO & Meta
- [ ] Meta tags updated (✓ Done)
- [ ] Favicon configured
- [ ] robots.txt created
- [ ] sitemap.xml created
- [ ] Schema.org markup (optional, for rich snippets)

## Deployment
- [ ] Configure environment variables (.env.example, .env.production)
- [ ] Choose hosting (Vercel, Netlify, AWS, GitHub Pages, etc.)
- [ ] Setup CI/CD pipeline
- [ ] Configure custom domain and SSL certificate
- [ ] Setup automatic backups

## Post-deployment
- [ ] Monitor error logs
- [ ] Monitor performance metrics
- [ ] Setup uptime monitoring
- [ ] Create incident response plan
