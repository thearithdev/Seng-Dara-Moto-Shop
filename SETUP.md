# Setting up your admin dashboard (one-time setup, ~10 minutes)

You're adding a free database (Supabase) so you can manage your motorcycle
listings from a real dashboard instead of editing code.

## 1. Create a free Supabase project
1. Go to https://supabase.com → **Start your project** → sign up (free, no card required).
2. Click **New project**. Give it a name (e.g. `ride-motorcycles`), set a database password (save it somewhere safe), pick a region close to Cambodia (e.g. Singapore), and create it.
3. Wait ~1 minute for the project to finish setting up.

## 2. Create the database table
1. In your Supabase project, open **SQL Editor** (left sidebar) → **New query**.
2. Open the file `supabase-schema.sql` (included with your files), copy all of it, paste it into the SQL editor, and click **Run**.
3. This creates your `motorcycles` table, sets permissions, and loads your current catalog as starting data.

## 3. Create the photo storage bucket
1. In Supabase, open **Storage** (left sidebar) → **New bucket**.
2. Name it exactly: `motorcycle-images`
3. Toggle **Public bucket: ON** → Create bucket.
   (This lets photos display on your public website. Only logged-in admins can upload/delete — visitors can only view.)

## 4. Get your API credentials
1. In Supabase, open **Project Settings** (gear icon) → **API**.
2. Copy the **Project URL** and the **anon public** key.
3. Open `config.js` in your website files and paste them in:
   ```js
   const SUPABASE_URL = "https://xxxxxxxx.supabase.co";
   const SUPABASE_ANON_KEY = "eyJhbGciOi........";
   ```

## 5. Create your admin login
1. In Supabase, open **Authentication** → **Users** → **Add user**.
2. Enter the email and password you want to use to log into `admin.html`.
3. Click **Create user**. (You can add more staff logins the same way later.)

## 6. Upload your files and go live
Upload these files together to your hosting (see hosting options below):
- `index.html` — your public site
- `admin.html` — your management dashboard
- `app.js`
- `config.js` (with your real credentials filled in)

Visit `yoursite.com/admin.html`, log in with the email/password from step 5,
and you can now add, edit, and delete motorcycles — changes appear on your
public site immediately.

## Free hosting reminder
Any of these work great for these files (just drag-and-drop the whole folder):
- **Netlify** — netlify.com → "Deploy manually" → drag the folder in
- **Cloudflare Pages** — pages.cloudflare.com
- **Vercel** — vercel.com
- **GitHub Pages** — push files to a GitHub repo, enable Pages in repo settings

## Notes on security
- The `anon` key in `config.js` is safe to expose publicly — it can only do what
  your database's Row Level Security rules allow (anyone can *view* motorcycles,
  only logged-in users can add/edit/delete).
- Don't share your database password (from step 1) or create logins for people
  you don't trust with inventory access.
