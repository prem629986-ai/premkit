# PremTools

Simple, Fast & Free Image Tools.

## Run
```bash
npm install
npm run dev
```

Production:
```bash
npm run build
npm run preview
```

## What is implemented
- Responsive React + TypeScript + Vite UI
- Global instant tool search and category filtering
- LocalStorage recent/favorite tools and dark mode
- Browser-side image upload, preview, resize, crop, rotate, flip, grayscale, black & white, blur, pixelate, borders, text/watermark, format conversion
- Target-size compression with iterative JPEG quality search
- Passport/signature/social-size presets
- Image joining/splitting
- Image-to-PDF
- Multi-file ZIP download
- Metadata viewing where browser APIs expose it
- AI service adapter placeholders that never fake successful AI processing
- SEO-friendly per-tool titles and descriptions
- Friendly errors/loading states

## Privacy
Local image tools process files in the browser. No upload endpoint is included. AI-dependent tools expose a clear not-configured state until a real service adapter is connected.

## Architecture
`src/data/tools.ts` is the centralized registry. `src/utils/image.ts` contains browser-side processing utilities. AI adapters live under `src/services/`.
