<h1 align="center">🚀 RentPe — Your Events, Our Assets</h1>

<p align="center">
  A modern rental marketplace to rent event essentials like tents, sound systems, décor, lighting, and venues — all in one place.
</p>

---


---

## 📌 Overview

In India, renting event essentials is still offline, confusing, and time-consuming.  
**RentPe makes the entire process digital, seamless, and secure.**

Users and vendors can:
- Create rental listings
- Contact via real-time chat
- Make secure payments
- Manage orders and subscriptions

---

## ✨ Features

- 🔐 **Authentication**
  - JWT secure login system
  - Role-based users (Buyer / Seller)
  - OTP verification (Email/SMS)

- 🛒 **Rentals System**
  - Post, update & manage listings
  - Media uploads via Cloudinary
  - Categories & advanced filtering

- 💬 **Real-time Chat**
  - Socket.io powered messaging
  - Seen status & timestamps

- 💳 **Payments**
  - Razorpay integration
  - Free plan → 3 ads/month
  - Premium plan → Unlimited ads


---

## 🛠 Tech Stack

| Area | Technologies |
|------|-------------|
| Frontend | React, Redux, HTML, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Real-time | Socket.io |
| Storage | Cloudinary |
| Auth | JWT + bcrypt |
| Payment | Razorpay |
| Deployment | Render |

---

## 🧩 System Architecture


---

## 🚀 Getting Started

### 1️⃣ Clone Repository

```sh
git clone https://github.com/YOUR-USERNAME/rentpe.git
cd rentpe
cd Client
npm install
cd Server
npm install

PORT=5000
MONGO_URI=your_mongo_url
JWT_SECRET=your_secret
CLOUDINARY_KEY=xxxx
CLOUDINARY_SECRET=xxxx
RAZORPAY_KEY=xxxx
RAZORPAY_SECRET=xxxx
TWILIO_SID=xxxx
TWILIO_TOKEN=xxxx

VITE_BACKEND_URL=http://localhost:5000
VITE_RAZORPAY_KEY=xxxx
npm run dev