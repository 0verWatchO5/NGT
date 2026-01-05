# NGT CRUD App

A minimal Node.js + Express + MongoDB CRUD example with a simple browser UI. Items have a `name` and `description`, managed via REST endpoints and rendered in the public page.

## Tech stack
- Node.js, Express
- MongoDB with Mongoose
- Vanilla HTML/CSS/JS frontend

## Prerequisites
- Node.js 18+ (recommended)
- MongoDB running locally (default URI: `mongodb://localhost:27017/project`)

## Setup
1) Install dependencies (includes missing runtime deps used in code):
   ```bash
   npm install express mongoose body-parser cors
   # optional dev helper
   npm install --save-dev nodemon
   ```
2) (Optional) Set env vars:
   - `PORT` (defaults to 3000)
   - `MONGODB_URI` (if you change the hardcoded URI in `app.js`)
3) Start MongoDB locally (ensure it listens on the URI you configured).

## Run
- Start the API/server:
  ```bash
  node app.js
  # or with reload
  npx nodemon app.js
  ```
- Open the frontend at http://localhost:3000/ to use the form-driven UI.

## REST API
Base path: `/api/items`

- `GET /api/items` — list all items
- `GET /api/items/:id` — fetch one item by MongoDB `_id`
- `POST /api/items` — create `{ name, description }`
- `PUT /api/items/:id` — update `{ name, description }`
- `DELETE /api/items/:id` — remove an item

Responses are JSON. Errors return an HTTP status with `{ message }`.

## Frontend usage
- Navigate to the root page and use the form to add items.
- Use Edit/Delete buttons in the list to modify data; actions call the API directly.

## Project layout
- Server entry: `app.js`
- Routes: `routes/items.js`
- Model: `models/Item.js` (collection: `tybscit_project`)
- Static assets: `public/`

## Notes
- `db.js` contains separate example Mongoose snippets and is not wired into the app.
- Update the MongoDB URI in `app.js` if your local DB name differs.
- Add tests/scripts as needed (current `package.json` only has a placeholder test script).
