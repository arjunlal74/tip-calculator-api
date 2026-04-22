import express from 'express';
import { calculateTip, splitBill } from './calculator.js';

export function createApp() {
  const app = express();
  app.use(express.json());
  
  app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });
  
  app.post('/calculate-tip', (req, res) => {
    try {
      const { billAmount, tipPercentage } = req.body;
      const result = calculateTip(billAmount, tipPercentage);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.post('/split-bill', (req, res) => {
    try {
      const { totalAmount, numberOfPeople } = req.body;
      const result = splitBill(totalAmount, numberOfPeople);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  return app;
}