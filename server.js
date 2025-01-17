const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Send index.html when accessing the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Portfolio is running at http://localhost:${port}`);
});
// 📱 Mobile Navbar Toggle
function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("active");
}
