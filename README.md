# FullStack Web App Project

A simple full-stack showcase app with a React/Next.js frontend and a Node.js/Express + Prisma backend, styled with Tailwind CSS and backed by PostgreSQL.

## 🚀 Tech Stack

- **Client** (frontend)  
  - Next.js  
  - React  
  - Tailwind CSS  
- **Server** (backend)  
  - Node.js  
  - Express.js  
  - Prisma ORM  
  - PostgreSQL  

## 🔧 Prerequisites

- [Node.js](https://nodejs.org/) v16+ and npm  
- [PostgreSQL](https://www.postgresql.org/)  
- (optional) [pnpm](https://pnpm.io/) or [Yarn](https://yarnpkg.com/)  

## 🛠️ Installation & Setup

1. **Clone this repo**  
   ```bash
   git clone https://github.com/Mootwar/fullStackWebAppProject.git
   cd fullStackWebAppProject
   ```

2. **Configure the database**

- Start your PostgreSQL server.

- Create a database (e.g. mydb):
```
createdb mydb
```
- In server/.env, set your connection string:
```
DATABASE_URL="postgresql://<DB_USER>:<DB_PASS>@localhost:5432/mydb"
```
3. Start the backend
```
cd server
npm install
npx prisma migrate dev --name init     # creates tables
npx prisma generate                    # regenerates client
npm run dev                            # starts Express on http://localhost:4000
```
4. Start the frontend

```
cd ../client
npm install
npm run dev                            # starts Next.js on http://localhost:3000
```
5. View in your browser

- Frontend: http://localhost:3000

- API: http://localhost:4000/api/...

## 📁 Project Structure
```
fullStackWebAppProject/
├── client/          # Next.js + Tailwind frontend
│   ├── app/         # pages & layouts
│   ├── public/      # static assets
│   └── styles/      # global CSS (Tailwind directives)
├── server/          # Node.js + Express + Prisma backend
│   ├── prisma/      # schema.prisma & migrations
│   ├── src/         # Express routes & controllers
│   └── .env         # DATABASE_URL for Prisma
├── .gitignore
├── LICENSE
└── README.md
```
## 🤝 Contributing

1. Fork this repository

2. Create your feature branch (git checkout -b feature/foo)

3. Commit your changes (git commit -am 'Add foo')

4. Push to the branch (git push origin feature/foo)

5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License.