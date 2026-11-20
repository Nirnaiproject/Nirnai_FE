# NIRNAI - Legal Guidance Platform

NIRNAI is an interactive web platform connecting clients with verified civil advocates across Indian metropolitan cities (Hyderabad, Bengaluru, Mumbai, Delhi NCR, Chennai, Pune).

Inspired by the clean patterns of GatedPlus and legal guidance principles, NIRNAI features:
- **Dedicated GatedPlus-style Login Page (`/login`)** with Phone & OTP sign-in, Client & Advocate role switching, password login option, and social authentications.
- **Unified Registration Portal (`/register`)** supporting both **Client Registration** (with live OTP verification) and **Advocate Multi-Step Registration (5 Steps)** with Bar Council verification tracking.
- **Dynamic 4-Field Search Card** (Legal Issue, Case Type, City, Locality/Area).
- **Civil Law Directory & Knowledge Hub**.

---

## 🚀 Quick Start Guide (VS Code)

### 1. Extract & Open in VS Code
Extract the project folder and open it inside VS Code:
```bash
cd nirnai
code .
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:5173
```

---

## ✨ Authentication & Registration Architecture

### 1. Dedicated Login Page (`/login`)
- Replicating the modern dual-column GatedPlus pattern.
- Left side: Deep navy branding banner with value propositions and trust metrics.
- Right side:
  - **Client Login** & **Advocate Login** role toggle.
  - **Phone Number with +91 & OTP Verification** (includes 30s timer, Resend OTP, and demo code `123456`).
  - **Password Login Toggle** with show/hide password and "Forgot Password" modal.
  - Social login options (Google, Facebook, Apple).
  - 1-Click Demo Testing buttons for Client and Advocate.

### 2. Unified Registration Page (`/register`)
- Toggle between **Client Registration** and **Advocate Registration**:

#### A. Client Registration
- Full Name
- Mobile Number & Interactive OTP Verification
- Email Address
- Password & Confirm Password
- State & City dropdowns (Telangana, Karnataka, Maharashtra, Delhi, etc.)
- Locality / Area
- Terms of Service & Privacy Policy Acceptance

#### B. Advocate Registration (Multi-Step Form: 5 Steps)
- **Step 1: Personal Details:** Full Name (as per enrollment records), Mobile Number, OTP Verification, Email Address, Languages Known, Profile Photo upload.
- **Step 2: Professional Details:** Bar Council Enrollment Number, State Bar Council, Enrollment Year, Years of Practice, Primary Practice Area, Courts/Forums Practised in.
- **Step 3: Practice Location:** State, District, City, Locality, Chambers/Office Address, Consultation Mode (Online, In-person, Both).
- **Step 4: Verification Documents:** Bar Council Enrollment Certificate upload, Advocate ID Card upload.
- **Step 5: Professional Profile:** Professional Introduction / Bio, Consultation Availability, Bar Council Compliance Terms Acceptance.
- **Post-Submission:** Displays **Pending Verification** screen with generated application tracking ID (`NIR-ADV-XXXXXX`) and Bar compliance timeline.

---

## 🛠️ Tech Stack
- **React 18** with Functional Components & Hooks
- **Vite 6** for fast builds and hot module replacement
- **React Router DOM v6** for multi-page routing
- **Tailwind CSS** for responsive design
- **Lucide React** for icons
