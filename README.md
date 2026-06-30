# Divyanka Saxena — Portfolio (MERN Stack)

Premium, animated portfolio site built with React (frontend) + Express (backend).

> No database needed. Contact form submissions are saved to a local JSON file (`server/data/contacts.json`) **and** emailed directly to you using Gmail (via Nodemailer).

## Structure
```
mern-portfolio/
├── client/                  # React + Vite frontend
│   └── src/
│       ├── components/      # Navbar, Preloader, CursorFX, CommandPalette, BackToTop
│       ├── sections/        # Hero, About, Skills, Projects, Experience, Contact, Footer
│       ├── hooks/           # useTheme, useScrollProgress, useReveal, useCounter
│       ├── data/             # portfolioData.js — all resume/GitHub content, edit here
│       └── styles/           # global.css — design tokens + all styling
└── server/                  # Express backend (no database)
    ├── utils/fileStore.js   # Reads/writes server/data/contacts.json
    ├── utils/mailer.js      # Sends the contact-form email via Gmail
    ├── data/contacts.json   # Backup record of every submission
    ├── controllers/         # Route handlers
    ├── routes/               # /api/contact
    └── server.js             # Express entry point
```

## One-time setup: Gmail App Password
The backend needs a Gmail **App Password** to send mail on your behalf (your normal Gmail password won't work).

1. Go to your Google Account → **Security**.
2. Turn on **2-Step Verification** if it isn't already on.
3. Search for **App Passwords** (or go to `myaccount.google.com/apppasswords`).
4. Create a new app password (name it "Portfolio" or similar) and copy the 16-character code.

## Run locally

### 1. Backend
```bash
cd server
npm install
cp .env.example .env
```
Open `.env` and fill in:
```
SMTP_USER=your-gmail-address@gmail.com
SMTP_PASS=the16characterapppassword
CONTACT_RECEIVER_EMAIL=saxenadivyanka187@gmail.com
```
Then:
```bash
npm run dev             # http://localhost:5000
```

### 2. Frontend
```bash
cd client
npm install
npm run dev              # http://localhost:5173
```

The Contact section's form POSTs to `VITE_API_URL` (defaults to `http://localhost:5000/api/contact`). On submit, the server saves the message to `contacts.json` **and** emails it to `CONTACT_RECEIVER_EMAIL` with the visitor's name/email/message — visible directly in your inbox, with `Reply-To` set to the visitor so you can hit reply.

## Editing your content
All résumé/portfolio content lives in one place: `client/src/data/portfolioData.js`.

## Deploy
- **Client** → Vercel / Netlify (`npm run build` → `dist/`)
- **Server** → Render / Railway / Fly.io. Set the same environment variables (`SMTP_USER`, `SMTP_PASS`, `CONTACT_RECEIVER_EMAIL`, `CLIENT_ORIGIN`) in the host's dashboard.
