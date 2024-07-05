# Food Ordering App

Food Ordering App is a full-stack restaurant management website built using modern web technologies and TypeScript. It allows users to browse menu items, place orders, and manage their accounts, while providing restaurant administrators with tools to manage orders and update the menu.

## Table of Contents

- [Food Ordering App](#food-ordering-app)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [Project Structure](#project-structure)
  - [License](#license)
  - [Contact](#contact)

## Features

- User authentication with Auth0
- Menu management
- Order placement and tracking
- Payment processing with Stripe
- Responsive design
- Real-time updates

## Technologies Used

### Frontend

- React
- React Router DOM
- React Hook Form
- React Query
- Auth0 React
- Radix UI
- Tailwind CSS
- Zod
- Shadcn UI components
- TypeScript
- Vite

### Backend

- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT) for authentication
- Stripe for payment processing
- Cloudinary for image uploads
- TypeScript
- Nodemon for development
- Concurrently for running multiple scripts

## Project Structure

```plaintext
backend/
  ├── src/
  │   ├── controllers/
  │   ├── models/
  │   ├── routes/
  │   ├── utils/
  │   └── index.ts
  ├── package.json
  └── tsconfig.json

frontend/
  ├── src/
  │   ├── components/
  │   ├── pages/
  │   ├── hooks/
  │   ├── utils/
  │   └── main.tsx
  ├── public/
  ├── package.json
  └── tsconfig.json

  ```

Getting Started
Prerequisites
Node.js (v14.x or later)
MongoDB
Stripe account
Auth0 account
Installation
Clone the repository:

```git clone https://github.com/arifin983/Food_ordering_App
cd food_ordering_app

```

Install dependencies for both frontend and backend:
cd backend
npm install
cd ../frontend
npm install
Set up environment variables:

Create a .env file in both backend and frontend directories with the following variables:

```Backend .env file:
PORT=7000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
Frontend .env file:
VITE_APP_AUTH0_DOMAIN=your_auth0_domain
VITE_APP_AUTH0_CLIENT_ID=your_auth0_client_id
VITE_APP_API_URL=http://localhost:7000/api
Start the development server:
cd backend
npm run dev
cd ../frontend
npm run dev

```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any issues or questions, please contact arifuddin.danin@gmail.com(mailto:arifuddin.danin@gmail.com).