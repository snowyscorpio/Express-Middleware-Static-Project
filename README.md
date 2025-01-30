# Express Middleware Static Project

This repository contains a solution to an Express.js exercise that serves static files and provides dynamic API responses.

## Exercise: Serve Static Files and Implement API Endpoints

### Requirements:
1. **Set up a static assets directory:**
   - Create an `assets` folder that contains:
     - `index.html` (Home page)
     - `about.html` (About page)
     - `contact.html` (Contact page)
     - `styles.css` (CSS file for all pages)
     - `logo.png` (An image to be displayed)
     - `404.html` (Error page for undefined routes)
   - Configure `express.static` to serve the `assets` directory.

2. **Implement Routes:**
   - `GET /`: Serves `index.html` (Home Page).
   - `GET /about`: Serves `about.html`.
   - `GET /contact`: Serves `contact.html`.
   - `GET /products`: Returns a JSON list of products.
   - `GET /products/:id`: Returns details of a specific product. If not found, return `404 Product Not Found`.
   - `GET /users`: Accepts an optional `age` parameter. If provided, filters users older than the given age; otherwise, returns all users.

3. **Error Handling:**
   - If the user accesses an undefined route, serve `404.html` from the `assets` folder.

### Project Structure:
```plaintext
Express-Static-Server-Project/
├── app.js
├── package.json
├── assets/
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   ├── styles.css
│   ├── logo.png
│   ├── 404.html
```
- **Static files**: Served from the `assets` directory.
- **Server execution**: Managed using Express and Nodemon.

### Solution Overview:

1. **Static File Hosting**:
   - Uses `express.static()` to serve files from `assets`.

2. **Defined Routes**:
   - `/`: Serves `index.html` (Home Page).
   - `/about`: Serves the `about.html` file.
   - `/contact`: Serves the `contact.html` file.
   - `/products`: Returns a list of products in JSON format.
   - `/products/:id`: Returns details of a product by ID.
   - `/users`: Filters users based on the `age` parameter.
   - `404 handler`: Returns `404.html` when a route is not found.

### Example Routes:
- `GET /`: Serves `index.html`.
- `GET /about`: Serves `about.html`.
- `GET /contact`: Serves `contact.html`.
- `GET /products`: Returns a JSON array of products.
- `GET /products/1`: Returns details of a specific product.
- `GET /users?age=30`: Returns users older than 30.

### How to Run:
1. Download the project as a ZIP file and extract it.
2. Install Node.js dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   The application will be accessible at `http://localhost:3000`.

### Dependencies:
- **express** (`^4.21.1`): A fast, minimalist web framework for Node.js.
- **nodemon**: Automatically restarts the server when file changes are detected.

# Express Middleware Static Project

This repository contains a solution to an Express.js exercise that serves static files and provides dynamic API responses.

## Exercise: Serve Static Files and Implement API Endpoints

### Requirements:
1. **Set up a static assets directory:**
   - Create an `assets` folder that contains:
     - `index.html` (Home page)
     - `about.html` (About page)
     - `contact.html` (Contact page)
     - `styles.css` (CSS file for all pages)
     - `logo.png` (An image to be displayed)
     - `404.html` (Error page for undefined routes)
   - Configure `express.static` to serve the `assets` directory.

2. **Implement Routes:**
   - `GET /`: Serves `index.html` (Home Page).
   - `GET /about`: Serves `about.html`.
   - `GET /contact`: Serves `contact.html`.
   - `GET /products`: Returns a JSON list of products.
   - `GET /products/:id`: Returns details of a specific product. If not found, return `404 Product Not Found`.
   - `GET /users`: Accepts an optional `age` parameter. If provided, filters users older than the given age; otherwise, returns all users.

3. **Error Handling:**
   - If the user accesses an undefined route, serve `404.html` from the `assets` folder.

### Project Structure:
```plaintext
Express-Static-Server-Project/
├── app.js
├── package.json
├── assets/
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   ├── styles.css
│   ├── logo.png
│   ├── 404.html
```
- **Static files**: Served from the `assets` directory.
- **Server execution**: Managed using Express and Nodemon.

### Solution Overview:

1. **Static File Hosting**:
   - Uses `express.static()` to serve files from `assets`.

2. **Defined Routes**:
   - `/`: Serves `index.html` (Home Page).
   - `/about`: Serves the `about.html` file.
   - `/contact`: Serves the `contact.html` file.
   - `/products`: Returns a list of products in JSON format.
   - `/products/:id`: Returns details of a product by ID.
   - `/users`: Filters users based on the `age` parameter.
   - `404 handler`: Returns `404.html` when a route is not found.

### Example Routes:
- `GET /`: Serves `index.html`.
- `GET /about`: Serves `about.html`.
- `GET /contact`: Serves `contact.html`.
- `GET /products`: Returns a JSON array of products.
- `GET /products/1`: Returns details of a specific product.
- `GET /users?age=30`: Returns users older than 30.

### How to Run:
1. Download the project as a ZIP file and extract it.
2. Install Node.js dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   The application will be accessible at `http://localhost:3000`.

### Dependencies:
- **express** (`^4.21.1`): A fast, minimalist web framework for Node.js.
- **nodemon**: Automatically restarts the server when file changes are detected.


Have a great day ♡


![CuteCat](https://github.com/user-attachments/assets/9ad4cf78-a1b1-4425-9b8f-e9278d4516f5)



