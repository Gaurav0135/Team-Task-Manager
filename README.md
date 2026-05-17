# 🎯 Team Task Manager

> A production-ready MERN Stack team task management application with role-based access control, multi-member task assignment, and comprehensive analytics dashboard.

[![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-blue?logo=react)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6+-green?logo=mongodb)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-5+-black?logo=express)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-ISC-blue)](#license)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-green)]()

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running the Project](#-running-the-project)
- [API Overview](#-api-overview)
- [Authentication & Roles](#-authentication--roles)
- [Dashboard Features](#-dashboard-features)
- [Deployment Guide](#-deployment-guide)
- [Demo Credentials](#-demo-credentials)
- [Branch Workflow](#-branch-workflow)
- [Future Improvements](#-future-improvements)
- [Troubleshooting](#-troubleshooting)
- [Author](#-author)
- [License](#-license)

---

## 🎨 Project Overview

**Team Task Manager** is a comprehensive task management platform designed for teams to collaborate efficiently. Admins can create projects, manage team members, create tasks, and assign work to multiple team members. Members can track assigned tasks, update task status, and access a personalized dashboard with analytics.

The application features **Role-Based Access Control (RBAC)**, ensuring admins have full control while members have limited permissions based on their assignments. It's built with modern web technologies and follows professional development practices.

**Key Use Cases:**
- Small to mid-size team project management
- Task assignment and tracking
- Team member onboarding and management
- Project analytics and reporting
- Task status monitoring and updates

---

## ✨ Features

### 🔐 Authentication & Security
- ✅ JWT-based authentication with secure token generation
- ✅ Password hashing with bcryptjs
- ✅ Protected routes with middleware
- ✅ Role-based access control (Admin/Member)
- ✅ 7-day token expiration for security

### 📊 Project Management
- ✅ Create, read, update, delete projects (Admin)
- ✅ Add/remove team members to projects (Admin)
- ✅ Project prioritization (Low, Medium, High)
- ✅ Project statistics and member count
- ✅ Team member search and filtering

### 📝 Task Management
- ✅ Create tasks with title, description, priority, due dates
- ✅ Assign tasks to multiple team members
- ✅ Task status tracking (Todo, In Progress, Completed)
- ✅ Task filtering by status, priority, and project
- ✅ Due date management with overdue detection
- ✅ Multi-member task assignment system
- ✅ Bulk task management capabilities

### 📈 Analytics Dashboard
- ✅ Real-time task statistics
- ✅ Total tasks, completed, pending, overdue counts
- ✅ Project and member analytics
- ✅ Task distribution charts
- ✅ Member workload overview
- ✅ Responsive analytics cards

### 🎯 Role-Based Features
- ✅ **Admin Privileges:**
  - Create and manage projects
  - Add/remove team members
  - Create and assign tasks
  - View full dashboard analytics
  - Delete/edit tasks and projects
  
- ✅ **Member Privileges:**
  - View assigned projects and tasks
  - Update own task status
  - Access personal dashboard
  - View task details and assignments

### 💎 UI/UX Enhancements
- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Tailwind CSS for modern styling
- ✅ Smooth animations and transitions
- ✅ Toast notifications for user feedback
- ✅ Loading spinners and empty states
- ✅ Modal dialogs for actions
- ✅ Professional dark/light compatible design

### 🔍 Search & Filter
- ✅ Advanced task filtering
- ✅ Project search functionality
- ✅ Member search and selection
- ✅ Status and priority filtering
- ✅ Date-based filtering

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React 18** | UI library and component framework |
| **Vite** | Fast build tool and dev server |
| **Tailwind CSS** | Utility-first CSS framework |
| **Axios** | HTTP client for API calls |
| **React Router DOM** | Client-side routing |
| **React Toastify** | Toast notifications |
| **Chart.js & React ChartJS 2** | Data visualization |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web application framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | MongoDB object modeling |
| **JWT** | Secure authentication |
| **bcryptjs** | Password hashing |
| **CORS** | Cross-origin resource sharing |
| **dotenv** | Environment variable management |

### Development Tools
| Tool | Purpose |
|------|---------|
| **nodemon** | Auto-restart server on changes |
| **Jest** | Testing framework |
| **ESLint** | Code quality |

### Deployment
| Platform | Component |
|----------|-----------|
| **Railway** | Backend deployment |
| **Vercel** | Frontend deployment (optional) |

---

## 📂 Project Structure

```
team-task-manager/
│
├── 📁 client/                          # Frontend - React + Vite
│   ├── src/
│   │   ├── 📁 components/              # Reusable React components
│   │   │   ├── AnalyticsCards.jsx
│   │   │   ├── AnalyticsChart.jsx
│   │   │   ├── AssignTaskModal.jsx
│   │   │   ├── DashboardCards.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectForm.jsx
│   │   │   ├── ProjectMembersModal.jsx
│   │   │   ├── ProjectTasksModal.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskFilters.jsx
│   │   │   ├── MultiMemberSelect.jsx
│   │   │   └── ToastNotifications.jsx
│   │   │
│   │   ├── 📁 pages/                   # Page components
│   │   │   ├── Dashboard.jsx           # Admin/Member dashboard
│   │   │   ├── Login.jsx               # Authentication login
│   │   │   ├── Signup.jsx              # User registration
│   │   │   ├── Projects.jsx            # Projects management
│   │   │   └── Tasks.jsx               # Task management
│   │   │
│   │   ├── 📁 context/                 # React Context
│   │   │   └── AuthContext.jsx         # Authentication state
│   │   │
│   │   ├── 📁 services/                # API service layer
│   │   │   ├── api.js                  # Axios instance
│   │   │   ├── authService.js          # Auth API calls
│   │   │   ├── projectService.js       # Project API calls
│   │   │   ├── taskService.js          # Task API calls
│   │   │   └── dashboardService.js     # Dashboard API calls
│   │   │
│   │   ├── 📁 utils/                   # Utility functions
│   │   │   ├── errorHandler.js         # Error handling
│   │   │   └── date.js                 # Date formatting
│   │   │
│   │   ├── App.jsx                     # Main app component
│   │   ├── main.jsx                    # Entry point
│   │   └── index.css                   # Global styles
│   │
│   ├── index.html                      # HTML template
│   ├── package.json                    # Frontend dependencies
│   ├── vite.config.js                  # Vite configuration
│   ├── tailwind.config.cjs             # Tailwind configuration
│   └── postcss.config.cjs              # PostCSS configuration
│
├── 📁 server/                          # Backend - Node + Express
│   ├── 📁 config/
│   │   └── db.js                       # MongoDB connection
│   │
│   ├── 📁 controllers/                 # Route controllers
│   │   ├── authController.js           # Auth logic
│   │   ├── projectController.js        # Project CRUD
│   │   ├── taskController.js           # Task CRUD
│   │   ├── dashboardController.js      # Analytics logic
│   │   └── userController.js           # User management
│   │
│   ├── 📁 middleware/                  # Express middleware
│   │   ├── authMiddleware.js           # JWT verification
│   │   └── roleMiddleware.js           # Role-based access
│   │
│   ├── 📁 models/                      # Mongoose schemas
│   │   ├── User.js                     # User schema
│   │   ├── Project.js                  # Project schema
│   │   └── Task.js                     # Task schema
│   │
│   ├── 📁 routes/                      # API routes
│   │   ├── authRoutes.js               # Auth endpoints
│   │   ├── projectRoutes.js            # Project endpoints
│   │   ├── taskRoutes.js               # Task endpoints
│   │   ├── dashboardRoutes.js          # Dashboard endpoints
│   │   └── userRoutes.js               # User endpoints
│   │
│   ├── 📁 utils/                       # Utilities
│   │   └── taskWorkflow.js             # Task logic helpers
│   │
│   ├── 📁 scripts/                     # Utility scripts
│   │   └── verifyTaskRbacMatrix.js     # RBAC verification
│   │
│   ├── server.js                       # Express app entry
│   ├── package.json                    # Backend dependencies
│   └── .env                            # Environment variables (git ignored)
│
├── .gitignore                          # Git ignore rules
├── README.md                           # This file
└── package.json                        # Root (optional monorepo)
```

---

## 🚀 Installation

### Prerequisites
- **Node.js** v18 or higher
- **npm** v9 or higher
- **MongoDB** (local or MongoDB Atlas connection string)
- **Git** for version control

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/team-task-manager.git
cd team-task-manager
```

### Step 2: Install Backend Dependencies

```bash
cd server
npm install
```

### Step 3: Install Frontend Dependencies

```bash
cd ../client
npm install
```

### Step 4: Configure Environment Variables

Create `.env` file in the `server/` directory with the required variables (see next section).

### Step 5: Start MongoDB

Ensure MongoDB is running:

```bash
# Local MongoDB
mongod

# OR use MongoDB Atlas (connection string in .env)
```

### Step 6: Run the Application

In two separate terminals:

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

---

## 🔧 Environment Variables

### Backend Configuration

Create `server/.env` file:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/team-task-manager

# Authentication
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Optional: CORS Configuration
CORS_ORIGIN=http://localhost:5173
```

### Frontend Configuration

Create `client/.env` file:

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api
```

### Environment Variables Explanation

| Variable | Purpose | Example |
|----------|---------|---------|
| `PORT` | Server port | `5000` |
| `MONGO_URI` | MongoDB connection | `mongodb+srv://...` |
| `JWT_SECRET` | Token encryption key | `your-secret-key` |
| `VITE_API_URL` | Frontend API URL | `http://localhost:5000/api` |
| `NODE_ENV` | Environment mode | `development` or `production` |

### Security Notes
- ⚠️ Never commit `.env` files to Git
- ⚠️ Change `JWT_SECRET` in production
- ⚠️ Use environment variables in deployment platforms (Railway, Vercel)
- ⚠️ Keep API URLs secure and use HTTPS in production

---

## ▶️ Running the Project

### Development Mode

**Option 1: Separate Terminals (Recommended)**

Terminal 1 - Backend:
```bash
cd server
npm run dev
```

Terminal 2 - Frontend:
```bash
cd client
npm run dev
```

**Option 2: Using Root package.json (if configured)**

```bash
npm run install-all    # Install all dependencies
npm run dev            # Start both frontend and backend
```

### Production Build

**Build Frontend:**
```bash
cd client
npm run build          # Creates optimized build in dist/
npm run preview        # Preview production build
```

**Start Backend (Production):**
```bash
cd server
npm start              # Runs production server
```

### Testing & Verification

Run backend tests:
```bash
cd server
npm test              # Run Jest tests
npm run verify:rbac   # Verify RBAC matrix
```

---

## 📡 API Overview

### Base URL
```
Development: http://localhost:5000/api
Production:  https://your-railway-url/api
```

### Authentication Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/auth/register` | User registration | ❌ |
| `POST` | `/auth/login` | User login | ❌ |
| `GET` | `/auth/profile` | Get user profile | ✅ |
| `GET` | `/auth/users` | List all users | ✅ Admin |

### Project Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/projects` | Get all projects | ✅ Admin |
| `GET` | `/projects/my-projects` | Get user's projects | ✅ |
| `POST` | `/projects` | Create project | ✅ Admin |
| `PUT` | `/projects/:id` | Update project | ✅ Admin |
| `DELETE` | `/projects/:id` | Delete project | ✅ Admin |
| `PUT` | `/projects/:id/members` | Add members to project | ✅ Admin |

### Task Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/tasks` | Get all tasks | ✅ Admin |
| `GET` | `/tasks/my-tasks` | Get user's tasks | ✅ |
| `POST` | `/tasks` | Create task | ✅ Admin |
| `PUT` | `/tasks/:id` | Update task | ✅ Admin |
| `PUT` | `/tasks/:id/status` | Update task status | ✅ |
| `DELETE` | `/tasks/:id` | Delete task | ✅ Admin |

### Dashboard Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/dashboard/stats` | Get dashboard statistics | ✅ |

---

## 🔐 Authentication & Roles

### Authentication Flow

```
User Registration/Login
        ↓
JWT Token Generated (7 days expiry)
        ↓
Token Stored in LocalStorage
        ↓
Sent in Authorization Header
        ↓
Middleware Verifies Token
        ↓
Route Access Granted/Denied
```

### User Roles

#### 👨‍💼 Admin Role
Admins have full control over projects and tasks:

- ✅ Create, read, update, delete projects
- ✅ Add/remove team members
- ✅ Create and assign tasks
- ✅ Assign tasks to multiple members
- ✅ View all tasks and analytics
- ✅ Delete/edit any task
- ✅ Access full dashboard

#### 👤 Member Role
Members have limited permissions:

- ✅ View assigned projects
- ✅ View assigned tasks
- ✅ Update own task status
- ✅ Access personal dashboard
- ❌ Cannot create projects
- ❌ Cannot create tasks
- ❌ Cannot manage team members
- ❌ Cannot delete/edit tasks

### Security Features

- **Password Hashing:** bcryptjs with salt rounds
- **JWT Tokens:** 7-day expiration for security
- **Protected Routes:** Frontend and backend protection
- **CORS:** Configured for cross-origin requests
- **Environment Variables:** Secrets not exposed in code

---

## 📊 Dashboard Features

### Admin Dashboard
- **Overview Cards:** Total projects, active members, tasks summary
- **Analytics Charts:** Task distribution, project statistics
- **Quick Stats:** High-priority projects, overdue tasks
- **Recent Projects:** Latest 6 projects with actions

### Member Dashboard
- **My Tasks:** Assigned tasks with status
- **My Projects:** Assigned projects overview
- **Statistics:** Personal task counts (pending, completed)
- **Task Updates:** Quick status updates

### Dashboard Metrics

| Metric | Description |
|--------|-------------|
| **Total Tasks** | Sum of all tasks in system |
| **Completed Tasks** | Tasks with Completed status |
| **Pending Tasks** | Tasks with Todo or In Progress status |
| **Overdue Tasks** | Tasks past due date |
| **Total Projects** | Active projects count |
| **Active Members** | Users in team |
| **High Priority Projects** | Count of high-priority projects |

### Responsive Design
- 📱 Mobile-friendly (100% responsive)
- 💻 Tablet optimized layout
- 🖥️ Desktop full experience
- 🌓 Dark/Light mode compatible

---

## 🚀 Deployment Guide

### Railway Deployment (Backend)

#### Step 1: Create Railway Account & Project
1. Visit [railway.app](https://railway.app)
2. Sign up / Log in
3. Create new project
4. Select "Provision PostgreSQL" or add existing service

#### Step 2: Configure Environment Variables
In Railway dashboard:
```
MONGO_URI = your_mongodb_atlas_connection
JWT_SECRET = your_strong_secret_key
NODE_ENV = production
```

#### Step 3: Deploy Backend
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login to Railway
railway login

# Link project
railway link

# Deploy
railway up
```

Or use GitHub integration for automatic deployments.

#### Step 4: Get Backend URL
After deployment, Railway provides a URL like:
```
https://team-task-manager-production.up.railway.app
```

### Vercel Deployment (Frontend - Optional)

#### Step 1: Build Frontend
```bash
cd client
npm run build
```

#### Step 2: Deploy to Vercel
```bash
npm i -g vercel
vercel deploy --prod
```

Or use GitHub integration on Vercel dashboard.

#### Step 3: Configure Environment
Set in Vercel:
```
VITE_API_URL = https://team-task-manager-production.up.railway.app/api
```

### MongoDB Atlas Setup

1. Create cluster at [mongodb.com/cloud](https://cloud.mongodb.com)
2. Create database user
3. Whitelist IP addresses
4. Copy connection string
5. Add to `.env`: `MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/database`

### Post-Deployment Checklist

- ✅ Test all authentication endpoints
- ✅ Verify project creation works
- ✅ Test task assignment
- ✅ Check dashboard loads correctly
- ✅ Verify role-based access
- ✅ Test CORS settings
- ✅ Monitor server logs
- ✅ Check database connections
- ✅ Test email notifications (if configured)

---

## 🎯 Demo Credentials

Use these credentials to test the application:

### Admin Account
```
Email:    admin@teamtask.com
Password: Admin@123
Role:     Administrator
```

### Member Account 1
```
Email:    rahul@gmail.com
Password: Rahul@123
Role:     Member
```

### Member Account 2
```
Email:    priya@gmail.com
Password: Priya@123
Role:     Member
```

### Test Workflow
1. Login with admin credentials
2. Create a project
3. Add members to project
4. Create tasks and assign to members
5. Switch to member account
6. Update task status
7. View dashboard and analytics

---

## 🌳 Branch Workflow

### Phase-Based Branching Strategy

```
main (Production)
 ├── phase-1 (Authentication & JWT)
 ├── phase-2 (Projects & Team Management)
 ├── phase-3 (Tasks & Assignment)
 ├── phase-4 (RBAC & Dashboard)
 └── phase-5 (UI/UX & Polish)
```

### Phase Breakdown

#### Phase 1: Authentication & JWT
- User registration and login
- JWT token generation and validation
- Protected routes middleware
- Password hashing with bcryptjs

**Branch:** `phase-1`

#### Phase 2: Projects & Team Management
- Project CRUD operations
- Team member management
- Project member association
- Team member selection UI

**Branch:** `phase-2`

#### Phase 3: Tasks & Assignment
- Task CRUD operations
- Multi-member task assignment
- Task status tracking
- Task filtering and search

**Branch:** `phase-3`

#### Phase 4: RBAC & Dashboard
- Role-based access control
- Admin and member permissions
- Dashboard analytics
- Statistics and charts

**Branch:** `phase-4`

#### Phase 5: UI/UX & Polish
- Responsive design improvements
- Component refinement
- Animation and transitions
- Final optimization

**Branch:** `phase-5`

### Merging Strategy
```bash
# Merge order into main
phase-1 → main
phase-2 → main
phase-3 → main
phase-4 → main
phase-5 → main
```

### Git Commands Reference

```bash
# Create feature branch
git checkout -b phase-X

# Push branch
git push origin phase-X

# Switch branches
git checkout main
git checkout phase-X

# Merge branch
git merge phase-X

# Delete branch
git branch -d phase-X
git push origin --delete phase-X
```

---

## 🔮 Future Improvements

### Short Term (Next Sprint)
- [ ] Email notifications for task assignments
- [ ] Task comments and discussions
- [ ] Attachment/file upload support
- [ ] Task templates for repeated work
- [ ] Bulk task operations

### Medium Term (Q3-Q4)
- [ ] Real-time notifications using WebSockets
- [ ] Activity timeline/audit logs
- [ ] Advanced reporting and export (PDF/Excel)
- [ ] Task priorities and custom fields
- [ ] Team performance metrics

### Long Term (Future)
- [ ] Mobile app (React Native)
- [ ] Kanban board view
- [ ] Calendar/Gantt chart
- [ ] AI-powered task suggestions
- [ ] Integration with external tools (Slack, GitHub)
- [ ] Multi-tenant support
- [ ] Advanced analytics and BI

### Quality Improvements
- [ ] Unit testing (Jest)
- [ ] Integration testing (Supertest)
- [ ] E2E testing (Cypress)
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Accessibility (WCAG 2.1)

---

## 🔧 Troubleshooting

### Common Issues & Solutions

#### Backend Won't Start
```bash
# Check if port 5000 is in use
lsof -i :5000

# Kill process using port
kill -9 <PID>

# Or change PORT in .env
PORT=5001
```

#### MongoDB Connection Error
```
Error: connect ECONNREFUSED
```
**Solution:**
- Ensure MongoDB is running: `mongod`
- Check MONGO_URI in .env is correct
- Verify MongoDB Atlas credentials and IP whitelist

#### Frontend API Calls Failing
```
CORS Error or 404 Not Found
```
**Solution:**
- Check VITE_API_URL in frontend .env
- Ensure backend is running and accessible
- Verify CORS settings in server.js
- Check network tab in browser DevTools

#### Authentication Token Issues
```
401 Unauthorized / Invalid Token
```
**Solution:**
- Clear LocalStorage in browser
- Re-login to get fresh token
- Check JWT_SECRET is correct
- Verify token expiration (7 days)

#### Build Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear build cache
rm -rf dist
npm run build
```

#### Port Already in Use
```bash
# Backend (port 5000)
PORT=5001 npm run dev

# Frontend (port 5173)
npm run dev -- --port 3000
```

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Atlas](https://www.mongodb.com/cloud)
- [Tailwind CSS](https://tailwindcss.com)
- [JWT Introduction](https://jwt.io)
- [Railway Deployment](https://railway.app/docs)
- [Vite Documentation](https://vitejs.dev)

---

## 👨‍💼 Author

**Gaurav Patel**
- 💼 MERN Stack Developer
- 📧 Email: gaurav.patel@email.com
- 🔗 GitHub: [@your-github-username](https://github.com/yourusername)
- 💻 Portfolio: [your-portfolio.com](https://yourportfolio.com)

---

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

```
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the "Software")
to use, copy, modify, merge, publish, and distribute the Software.
```

---

## 🙏 Acknowledgments

- Built with modern MERN Stack technologies
- Inspired by professional project management tools
- Thanks to the open-source community
- Special thanks to contributors and testers

---

## 📞 Support

For issues, questions, or suggestions:
1. Check [Troubleshooting](#-troubleshooting) section
2. Review GitHub Issues
3. Contact the author
4. Check documentation in comments

---

**Last Updated:** May 17, 2026
**Version:** 1.0.0
**Status:** ✅ Production Ready

---

<div align="center">

### ⭐ If this project helped you, please consider giving it a star!

[Fork](https://github.com/yourusername/team-task-manager/fork) | [Star](https://github.com/yourusername/team-task-manager) | [Report Issue](https://github.com/yourusername/team-task-manager/issues)

</div>

