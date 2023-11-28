// Szükséges npm csomagok importálása
require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

// Route (main)
const mainRoutes = require('./Routes/mainRoutes');
app.get('/', mainRoutes);

// Szerver elindítása
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
