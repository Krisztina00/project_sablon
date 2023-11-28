// router létrehozása és beállítása
const express = require('express');
const router = express.Router();

// GET művelet megoldása
router.get('/', (req, res) => {
  try {
    res.status = 200;
    res.json({ message: 'Sikeres szerver elindítás' });
  } catch (error) {
    res.status = 500;
    res.json({ message: 'Valami elromlott' + error.message });
  }
});

// router kiexportálása
module.exports = router;
