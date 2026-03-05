# Quick Start Guide - AbirKhalil.Art Next.js Site

## 🚀 Getting Started in 3 Steps

### 1. Install Dependencies
```bash
cd nextjs-abirkhalil
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit: **http://localhost:3001** (or http://localhost:3000)

---

## 📂 Project Location

The Next.js project is located at:
```
/Users/elma777boubi/Downloads/saveweb2zip-com-abirkhalil-art/nextjs-abirkhalil/
```

---

## 🎨 What You'll See

### Homepage Features:
- Auto-rotating hero carousel with portfolio images
- Professional welcome section with logo
- Three service cards (Custom Portraits, Bird Paintings, Art Lessons)
- About section
- Call-to-action buttons

### Available Pages:
- **/** - Homepage
- **/about** - About the artist
- **/portfolio** - Gallery of work
- **/commission** - Pricing and rates
- **/contact** - Contact form
- **/courses** - Art lessons

---

## 🛠️ Making Changes

### Edit Homepage Content
File: `src/app/page.tsx`

### Edit Global Styles
File: `src/app/globals.css`

### Edit Header/Navigation
File: `src/components/Header.tsx`

### Edit Footer
File: `src/components/Footer.tsx`

### Add Images
Place in: `public/images/`
Use in code: `/images/filename.jpg`

---

## 📱 Responsive Design

The site automatically adapts to:
- **Mobile** (< 768px)
- **Tablet** (768px - 1024px)
- **Desktop** (> 1024px)

Test responsive design:
1. Open Chrome DevTools (F12)
2. Click device toolbar icon
3. Select different devices

---

## 🎨 Colors Used

```css
Primary:  #e8cac6 (soft pink)
Accent:   #b2221b (deep red)
Dark:     #3f3e3e (charcoal)
Light:    #ededed (off-white)
White:    #ffffff
```

---

## 🚢 Deploying to Production

### Option 1: Vercel (Easiest)
1. Push code to GitHub
2. Visit https://vercel.com
3. Import your repository
4. Deploy (automatic!)

### Option 2: Build Manually
```bash
npm run build
npm start
```

---

## ⚡ Available Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Check code quality
```

---

## 📝 Key Files

```
nextjs-abirkhalil/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout (header/footer)
│   │   ├── globals.css        # Global styles
│   │   ├── about/page.tsx     # About page
│   │   ├── contact/page.tsx   # Contact page
│   │   └── ...                # Other pages
│   └── components/
│       ├── Header.tsx         # Navigation
│       ├── Footer.tsx         # Footer
│       └── HeroCarousel.tsx   # Homepage carousel
├── public/
│   ├── images/                # All images
│   └── fonts/                 # Font files
└── tailwind.config.ts         # Styling config
```

---

## 🆘 Need Help?

### Common Issues

**Port 3000 already in use?**
- The server will automatically use port 3001
- Or stop other services using port 3000

**Images not showing?**
- Make sure images are in `public/images/`
- Use correct path: `/images/filename.jpg` (starts with /)

**Styles not updating?**
- Save the file
- Refresh browser (Cmd/Ctrl + R)
- Clear cache if needed (Cmd/Ctrl + Shift + R)

**Build errors?**
- Delete `.next` folder
- Run `npm install` again
- Clear npm cache: `npm cache clean --force`

---

## ✅ Everything is Ready!

The site has been fully migrated with:
- ✅ All original design preserved
- ✅ All images copied
- ✅ Responsive navigation
- ✅ Contact form
- ✅ Portfolio gallery
- ✅ And more!

Just run `npm run dev` and start customizing! 🎨

---

**Questions?** Check:
- README.md - Full documentation
- MIGRATION_SUMMARY.md - What was migrated
- Next.js Docs - https://nextjs.org/docs
