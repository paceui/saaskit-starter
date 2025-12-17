![og.jpg](public/og.jpg)

### **The Open Source boilerplate for TanStack Start & Better-Auth.**  

Stop wasting 3-4 hours setting up the basics. SaaSKit Starter provides a production-ready foundation with Authentication and Admin Layouts pre-configured, so you can skip the setup and start building your SaaS.

![TanStack Start](https://img.shields.io/badge/TanStack%20Start-blue)
![Better Auth](https://img.shields.io/badge/Better--Auth-green)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6)

## ✨ Features

- **TanStack Start Integrated:** Server-side rendering and static generation ready.
- **Authentication Ready:** Complete **Better-Auth** setup with functional **Sign In** and **Sign Up** UIs.
- **Admin Layout:** A responsive, sidebar-navigation layout ready for your dashboard.
- **UI Components:** Styled with Tailwind CSS and **Lucide Icons**.
- **Modular Architecture:** Designed to be easily extended or stripped down.

## Setup

To get started, clone the repository and install dependencies:

```shell
cd saaskit-starter
```

To migrate the database.
```shell
 npx @better-auth/cli@latest migrate --config=src/features/auth/auth.ts
```

```shell
npm install
```

```shell
npm run dev
```

This will start the development server. Open your browser to [http://localhost:3000](http://localhost:3000) to view the app.

## Documentation

For the most up-to-date documentation, guides, and examples, visit our online docs:  
[saaskit.paceui.com](https://saaskit.paceui.com/docs)
