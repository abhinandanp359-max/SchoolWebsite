# Mount Carmel School Website

A professional, full-stack website for Mount Carmel School — a Christian missionary school committed to education, values, character, service, compassion, and excellence.

## Tech Stack

**Frontend:** React, Vite, Tailwind CSS v4, React Router, Framer Motion, Lucide React  
**Backend:** Node.js, Express.js, MongoDB (Mongoose)  
**Auth:** JWT with HTTP-only cookies, bcryptjs

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB running locally or a MongoDB Atlas URI

### 1. Clone & Install

```bash
# Server
cd server
npm install

# Client
cd ../client
npm install
```

### 2. Environment Variables

```bash
cd server
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
```

### 3. Run Development

```bash
# Terminal 1 — Server (port 5000)
cd server
npm run dev

# Terminal 2 — Client (port 3000)
cd client
npm run dev
```

### 4. Default Admin Login

- **URL:** http://localhost:3000/admin/login
- **Username:** `admin`
- **Password:** `MountCarmel@2024`

## Project Structure

```
mount-carmel-school/
├── client/          # React + Vite frontend
│   ├── public/      # Static images
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── pages/admin/
│       ├── layouts/
│       ├── hooks/
│       ├── services/
│       ├── data/
│       └── utils/
├── server/          # Express + MongoDB backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── config/
└── .env.example
```

## Features

- 13 public pages with professional design
- Full admin panel with CRUD for events, news, gallery, enquiries
- JWT authentication with HTTP-only cookies
- MongoDB-backed dynamic content
- SEO-optimized with Schema.org structured data
- Responsive design (mobile to large desktop)
- Lazy-loaded routes and images
- Accessible forms with proper labels

## School Information

- **Established:** 2004
- **Previous Location:** Simanagar
- **Current Location:** Chapra
- **Academic Level:** Primary through Class X
- **Administration:** Maestre Pie Venerini (MPV) Sisters (since June 2026)
- **Diocese:** Krishnanagar
