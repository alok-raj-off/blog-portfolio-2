# VOID — Blog System

A premium dark/red themed personal blog system with a live-preview editor, Firebase backend, and a custom markup language (VML).

---

## Files

| File | Purpose |
|------|---------|
| `blog.html` | Public-facing blog — Blogs, Projects, Stuff |
| `admin.html` | Password-protected admin panel for writing & managing posts |
| `README.md` | This file |

---

## Setup

### 1. Create a Firebase Project

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project** → name it (e.g. `void-blog`)
3. Disable Google Analytics if you don't need it → **Create project**

---

### 2. Enable Firestore Database

1. In the Firebase console, go to **Build → Firestore Database**
2. Click **Create database**
3. Choose **Start in test mode** (you'll secure it later)
4. Select your region → **Done**

---

### 3. Enable Authentication

1. Go to **Build → Authentication**
2. Click **Get started**
3. Under **Sign-in method**, enable **Email/Password**
4. Go to **Users** tab → **Add user**
5. Enter your email and a strong password — this is your admin login

---

### 4. Get Your Firebase Config

1. Go to **Project Settings** (gear icon ⚙️)
2. Scroll down to **Your apps**
3. Click **</>** (Web) to register a web app
4. Name it `void-blog-web` → **Register app**
5. Copy the `firebaseConfig` object — it looks like:

```js
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "void-blog.firebaseapp.com",
  projectId: "void-blog",
  storageBucket: "void-blog.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

---

### 5. Paste Config into Both Files

Open **both** `blog.html` and `admin.html` and find the `firebaseConfig` object near the top (inside the `<script type="module">` block).

Replace the placeholder values:

```js
// ⚠️ Replace with your Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",          // ← replace
  authDomain: "YOUR_AUTH_DOMAIN",  // ← replace
  projectId: "YOUR_PROJECT_ID",    // ← replace
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

---

### 6. Set Up Firestore Security Rules

In Firebase console → **Firestore Database → Rules**, paste:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public read for all collections
    match /{collection}/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

Click **Publish**.

This allows anyone to **read** posts (for the blog), but only authenticated users can **write** (for the admin).

---

### 7. Deploy / Host

**Option A — Just open locally:**
Open `blog.html` and `admin.html` directly in your browser. Works out of the box.

**Option B — Firebase Hosting (recommended):**

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Set public dir to current folder
# Single-page app: No
firebase deploy
```

**Option C — Any static host:**
Upload both files to GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc. No server needed.

---

## Usage

### Admin Panel (`admin.html`)

1. Open `admin.html` in your browser
2. Log in with the email/password you created in Firebase Auth
3. Use the sidebar to navigate:
   - **Dashboard** — stats and recent posts
   - **Editor** — write/edit posts with live preview
   - **Blogs / Projects / Stuff** — manage each collection
   - **Syntax Guide** — quick reference for VML

### Writing a Post

1. Click **+ NEW POST** (or choose from sidebar)
2. Fill in:
   - **Title** — the post headline
   - **Section** — Blogs, Projects, or Stuff
   - **Tag** — short label like `DEV`, `DESIGN`, `TOOLS`
   - **Tags (CSV)** — comma-separated tags like `react, css, firebase`
   - **Icon** — emoji for Stuff items (e.g. `🔧`)
3. Write in the left pane — preview updates live on the right
4. Use the **toolbar** buttons or type syntax manually
5. Press **Save Post** or `Ctrl+S`

---

## VML — VOID Markup Language

The custom syntax used inside posts:

| Syntax | Output |
|--------|--------|
| `-h- Your Title -;h-` | Heading 1 (largest) |
| `-hh- Your Title -;hh-` | Heading 2 (medium) |
| `-hhh- Your Title -;hhh-` | Heading 3 (smallest) |
| `-p- Your paragraph text -;p-` | Paragraph block |
| `-b- bold text -;b-` | **Bold** / emphasis (inline) |
| `-\`\`\`-` ... `-\`\`\`-` | Code snippet block |
| `link[https://url.com, Text]` | Hyperlink (text is optional) |
| `link[https://url.com]` | Hyperlink using URL as text |
| `linkimg[https://url.com, 800, 400]` | Image (width, height optional) |
| `--hig-- This line is highlighted` | Full-line highlight callout |
| `-;h-` | Horizontal divider rule |
| `--section--` ... `--;section--` | Styled content block / section wrapper |

### Example Post

```
-h- My First Post -;h-

--section--
-p- This is an intro. You can use -b- bold text -;b- inline too. -;p-

--hig-- This whole line will be highlighted as a callout block.
--;section--

-hh- A Subheading -;hh-

-hhh- An Even Smaller One -;hhh-

-```-
const greet = (name) => {
  return `Hello, ${name}!`;
};
-```-

-;h-

-p- Check out my link: link[https://github.com, GitHub Profile] -;p-

linkimg[https://picsum.photos/800/300, 800, 300]
```

### Multiple Images

Repeat `linkimg` tags on the same line or separate lines:

```
linkimg[https://url1.com/img.jpg, 400, 300]
linkimg[https://url2.com/img.jpg, 400, 300]
```

They'll render side by side automatically.

---

## Collections Structure (Firestore)

Each post document stores:

```json
{
  "title": "Post Title",
  "tag": "DEV",
  "tags": ["react", "css"],
  "icon": "🔧",
  "content": "VML content string...",
  "excerpt": "Auto-generated plain text preview...",
  "_section": "blogs",
  "createdAt": "Firestore Timestamp",
  "updatedAt": "Firestore Timestamp"
}
```

Collections: `blogs`, `projects`, `stuff`

---

## Customization

### Change the Site Name
Search for `VOID` in both HTML files and replace with your name/brand.

### Change Colors
Both files use CSS variables at the top:

```css
:root {
  --red: #c0392b;
  --red-bright: #e74c3c;
  --bg: #080808;
  /* etc... */
}
```

Change `--red` and `--red-bright` to any color you like.

### Add New Sections
1. Add a new tab in `blog.html`
2. Add a new Firestore collection
3. Add a sidebar item in `admin.html`
4. Add render/list functions mirroring the existing ones

---

## Keyboard Shortcuts (Admin)

| Shortcut | Action |
|----------|--------|
| `Ctrl+S` / `Cmd+S` | Save current post |

---

## Tech Stack

- **Frontend**: Pure HTML, CSS, JavaScript (no build tools)
- **Backend**: Firebase Firestore (database) + Firebase Auth
- **Fonts**: Bebas Neue, Crimson Pro, JetBrains Mono (Google Fonts)
- **Hosting**: Any static host or Firebase Hosting

---

*Built with obsessive attention to dark aesthetics.*
