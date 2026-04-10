# otp-secure-api
otp-secure-api
# 🚀 Secure OTP Authentication API (DevSecOps Project)

A secure OTP authentication system built with **Node.js, Docker, AWS EC2, and GitHub Actions CI/CD**.

This project demonstrates a real-world **DevSecOps pipeline** including secure API design, automated testing, containerization, and cloud deployment.

---

## 📌 Features

- 🔐 OTP generation and verification
- ⏳ OTP expiry handling (2 minutes)
- 🚫 Brute-force protection (attempt limits)
- 🧂 Secure OTP hashing using bcrypt
- ⚡ API rate limiting (abuse protection)
- 📊 Request logging
- 🐳 Docker containerization
- 🔄 CI/CD pipeline using GitHub Actions
- ☁️ Automated deployment to AWS EC2

---

## 🧱 Tech Stack

- **Backend:** Node.js (Express)
- **Database:** MongoDB
- **Security:** bcrypt, express-rate-limit
- **DevOps:** Docker
- **CI/CD:** GitHub Actions
- **Cloud:** AWS EC2

---

## 🏗️ Architecture

```text
User
  ↓
Express API (Node.js)
  ↓
MongoDB (OTP storage)
  ↓
Security Layer (rate limiting, hashing, validation)
  ↓
GitHub Actions CI/CD
  ↓
AWS EC2 (Docker container deployment)