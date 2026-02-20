<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1u6KTP6H0nKHnXYKaaG5b_emIzTSqNPG5

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Vercel

1. **Root Directory**: Select `ronchiodontologia` folder as root directory in Vercel.
2. **Environment Variables**: Add the following variables in Vercel Project Settings:
   - `GEMINI_API_KEY`: Your Gemini API key.
   - `VITE_FORMSPREE_URL`: Your Formspree URL.
3. **Build Command**: `npm run build` (Vite default).
4. **Output Directory**: `dist` (Vite default).

