# StackGuard — Secure Your Codebase

StackGuard is a **React-based web application** that allows users to **register, sign in, and securely manage their dashboard**.  
It focuses on providing a seamless authentication flow using **localStorage**, **form validation**, and **modern React practices**.

---

## Live Demo

**Deployed Link:** [https://stackguard-lyart.vercel.app/register](https://stackguard-lyart.vercel.app/register)  
**GitHub Repository:** [https://github.com/KatlekuntaPrasanna/stackguard](https://github.com/KatlekuntaPrasanna/stackguard)

---

## Features

### User Registration
- Collects **first name**, **last name**, **email**, and **password**.  
- Confirms password and validates user input.  
- Displays a success popup upon account creation.  

### Sign In Page
- Validates stored credentials using **localStorage**.  
- Redirects the user to the dashboard upon successful login.  

### Dashboard
- Displays secure user content.  
- Includes **Logout** functionality that clears session data.  

### Protected Routes
- Prevents unauthorized users from accessing private pages.  

### Responsive UI
- Built with **modern CSS** and **Flexbox layout** for all screen sizes.

---

## Tech Stack

| Category            | Technologies Used      |
|---------------------|------------------------|
| **Frontend**        | React.js, HTML5, CSS3  |
| **Routing**         | React Router DOM       |
| **Storage**         | localStorage           |
| **Styling**         | Custom CSS / Flexbox   |
| **Version Control** | Git + GitHub           |
| **Deployment**      | Vercel                 |

---

## Installation & Setup

Follow these steps to run StackGuard locally 

### Clone the Repository
```bash
git clone https://github.com/KatlekuntaPrasanna/stackguard.git
cd stackguard

```

Install Dependencies
```bash
npm install

```

### Start the Development Server
```bash
npm start

```

> Runs the app in development mode.  
> Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📁 Project Structure
```
stackguard/
│
├── public/
│ └── index.html
│
├── src/
│ ├── components/
│ │ ├── RegisterPage.js
│ │ ├── SignInPage.js
│ │ ├── Dashboard.js
│ │ └── ProtectedRoute.js
│ │
│ ├── styles/
│ │ ├── auth.css
│ │ └── dashboard.css
│ │
│ ├── App.js
│ └── index.js
│
├── package.json
└── README.md
```

## How It Works

1. **Registration Page** — Saves new user details (name, email, password) to localStorage.  
2. **Sign In Page** — Checks credentials and logs the user in.  
3. **Dashboard** — Displays protected content after successful login.  
4. **Logout** — Clears stored session and returns to Sign In.  


## Author

Prasanna Katlekunta
NxtWave CCBP 4.0 Academy | CVR College of Engineering
Passionate about Web Development & AI/ML


Live App: https://stackguard-lyart.vercel.app/register

GitHub Repo: https://github.com/KatlekuntaPrasanna/stackguard
