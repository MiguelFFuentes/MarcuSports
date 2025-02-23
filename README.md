# MarcuSports 🚲

This is the repository for the MarcuSports, an online shop.

This document will explain how to install and run the project. For more information about the technical challenges and
decisions made, please check the docs folder.

## Requirements 📝

You need to have installed:

- Node.js
- npm
- Docker

## Setup 🏗️

### Backend

```bash
cd markusports-backend
npm install
```

Copy the `.env.example` file to `.env` and set the environment variables. By default, you don't need to modify any
variable to make it work in local.

Open the `docker-compose.yml` file and run the containers. This will generate a MySQL database and a backoffice tool
called **adminer**.

#### Database

Make sure you have a MySQL database running before run this step. You can use the docker-compose file provided in the
backend folder.

```bash
npx prisma migrate dev
```

This command will run all the migrations to setup the database. It's also configured to run the `seed.ts` script to
populate
the database with some data. For more context about this seeding, please check the docs folder.

Any time you want to reset the data in the database, run:

```bash
npx prisma migrate reset
```

Run:

```bash
npm run dev
```

Backend ready! 🚀

Navigate to http://localhost:3001, and you should see a handshake with the API.

### Frontend

```bash
cd markusports-frontend
npm install
```

Copy the `.env.example` file to `.env` and set the environment variables. By default, you don't need to modify any
variable to make it work in local.

```bash
npm run dev
```

Frontend ready! 🚀

Navigate to http://localhost:3000, and you should see the app running.

### Adminer

Make sure you have the docker-compose file running. Navigate to http://localhost:8080 and use the following credentials:

````dotenv
user: root
password: example
database: markusports
````

This is an admin site to manage the data of the application as a backoffice.

## Testing 🧪

Testing has been fundamental during the development of this project. In the backend, in order to assure all the business
rules are fulfilled, there was a special emphasis on testing with more than 90% of the code covered.

On each project, run:

```bash
npm run test
```

## Next Steps 🔮

Marcus' business is growing every day. This project is an alpha version and there is a lot of space for improvement.

### Pagination

Marcus is planning to sell more and more products. Next feature to implement would be a pagination system in the
backend & frontend, so the application only returns a few products each time.

### i18n

Marcus is expanding the business to other countries. English is great, but not enough! We should implement i18n to
provide our users another languages.

### Better error handling

The error handling could be improved, now there are only some domain errors in the shoppingcart, but it would be useful
to make the application grow on this direction in order to be easier to understand and manage.

### Shared dto model

The dto model is shared between the frontend and the backend. If we want to keep this project as a monorepo in the
future, we could make a shared module where the dtos are centralized, so if we want to include more fields or changes we
can avoid errors mapping these objects between layers.

### Form validation

Frontend could be improved a lot in terms of user experience.

Right now, the frontend is making a request and the
backend is returning the status of the operation of adding a product to the shopping cart, however, this could be
better.

Even though the backend will always validate the frontend data, it would be nice if we check the incompatible options
before ending them so we prevent a user from clicking the button and then receiving an error message.

### A cool design

As an alpha version, this project had no focus on design. If we want to make it more appealing to the users, we should
create/customize a library of components with custom styles and standardize the design of the application.
