const express = require('express');
const app = express();
const port = 3000;
const path = require('path');



app.use(express.static(path.join(__dirname, 'assets')));



// Route for about page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets', 'about.html'));
})

// Route for contact page
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets', 'contact.html'));
})

// 404 error handler
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'assets', '404.html')); // if we will search not existing path it will show the html for 404
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
