# StackGuard — Secure Your Codebase

StackGuard is a React-based web application that allows users to **register, sign in, and manage their dashboard securely**.  
It focuses on providing a seamless and clean authentication flow while demonstrating the use of **localStorage**, **form validation**, and **modern React practices**.


## Features

**User Registration**  
- Collects first name, last name, email, and password.  
- Password confirmation with validation.  
- Success popup on account creation.  

**Sign In Page**  
- Validates stored user credentials.  
- Redirects to dashboard on successful login.  

**Dashboard**  
- Displays secure content after authentication.  
- Supports logout functionality with localStorage or cookies.  

**Protected Routes**  
- Prevents unauthorized access to pages.  

**Responsive UI**  
- Built with modern CSS and Flexbox styling.  

## Tech Stack

| Category            | Technologies Used      |
|---------------------|------------------------|
| **Frontend**        | React.js, HTML5, CSS3  |
| **Routing**         | React Router           |
| **Storage**         | localStorage           |
| **Styling**         | Custom CSS             |
| **Version Control** | Git + GitHub           |


## Installation & Setup

Follow these steps to run StackGuard locally 

### Clone the Repository

git clone https://github.com/KatlekuntaPrasanna/stackguard.git
cd stackguard


### Install Dependencies

npm install

### Start the Development Server

npm start

> Runs the app in development mode.  
> Open [http://localhost:3000] to view it in your browser.


## Folder Structure

 stackguard/
│
├── public/
│   └── index.html                # Root HTML file loaded by React
│
├── src/
│   ├── components/               # All React components
│   │   ├── RegisterPage.js       # Registration page
│   │   ├── SignInPage.js         # Sign-in page
│   │   ├── Dashboard.js          # Protected dashboard page
│   │   └── ProtectedRoute.js     # Route protection logic
│   │
│   ├── styles/                   # CSS styling for each page
│   │   ├── auth.css
│   │   └── dashboard.css
│   │
│   ├── App.js                    # Main React router and app structure
│   └── index.js                  # Entry point of React app
│
├── package.json                  # Project dependencies and scripts
└── README.md                     # Project documentation


## How It Works

1. **Registration Page** — Saves new user details (name, email, password) to localStorage.  
2. **Sign In Page** — Checks credentials and logs the user in.  
3. **Dashboard** — Displays protected content after successful login.  
4. **Logout** — Clears stored session and returns to Sign In.  


## Author

**Prasanna Katlekunta**  
NxtWave CCBP 4.0 Academy | CVR College of Engineering  
Passionate about Web Development & AI/ML  
