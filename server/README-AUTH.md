Authentication (Phase 2) Setup
=============================


Environment
-----------
- Create a `.env` in the `server/` folder (an example already exists). For local development you can use the included local DB value:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/teamtaskdb
JWT_SECRET=your_jwt_secret_here
```

Install dependencies and run server:

```bash
cd server
npm install
npm run dev
```

Local MongoDB
-------------
- Make sure a local MongoDB server is running. Common commands:

Linux / macOS (Homebrew):
```bash
brew services start mongodb-community
```

Windows (if installed as a service):
```powershell
net start MongoDB
```

Or use Docker:
```bash
docker run -d -p 27017:27017 --name mongo mongo:6
```

API Endpoints
-------------
- POST `/api/auth/register`  { name, email, password }
- POST `/api/auth/login`     { email, password }
- GET  `/api/auth/profile`   (protected, Bearer token)

Notes
-----
- Tokens are JWTs signed with `JWT_SECRET` and returned on register/login.
- Frontend should store `token` and `user` in `localStorage` and send `Authorization: Bearer <token>`.
