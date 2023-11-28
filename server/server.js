// Szükséges npm csomagok importálása
require('dotenv').config();
const express = require('express');

// Szerver létrehozása
const app = express();

// Szerver beállítás
const PORT = process.env.PORT || 5000;

// Route (main)
app.get('/', (req, res) => {
  try {
    res.status = 200;
    res.json({ message: 'Sikeres szerver elindítás' });
  } catch (error) {
    res.status = 500;
    res.json({ message: 'Valami elromlott' + error.message });
  }
});

// Szerver elindítása
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
