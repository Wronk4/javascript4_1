'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
  const r = parseFloat(req.params.r);
  const area = (Math.PI * Math.pow(r, 2)).toFixed(2);
  const circumference = (2 * Math.PI * r).toFixed(2);
  const result = {
    area: area,
    circumference: circumference
  };
  res.json(result);
});

//TODO2
app.get('/math/rectangle/:width/:height', (req, res) => {
  const width = parseFloat(req.params.width);
  const height = parseFloat(req.params.height);
  const result = {
    area: width * height,
    perimeter: 2 * (width + height)
  };
  res.json(result);
});

//TODO3
app.get('/math/power/:base/:exponent', (req, res) => {
  const base = parseFloat(req.params.base);
  const exponent = parseFloat(req.params.exponent);
  if (isNaN(base) || isNaN(exponent)) {
    res.status(400).json({ error: 'Invalid input' });
  } else {
    const result = {
      result: Math.pow(base, exponent)
    };
    if (req.query.root === 'true') {
      result.root = Math.sqrt(base);
    }
    res.json(result);
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});