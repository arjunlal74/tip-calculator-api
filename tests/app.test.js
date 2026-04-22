import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app.js';

const app = createApp();

describe('GET /health', () => {
  it('returns status ok', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
  });
});

describe('POST /calculate-tip', () => {
  it('calculates tip correctly', async () => {
    const response = await request(app)
      .post('/calculate-tip')
      .send({ billAmount: 100, tipPercentage: 20 });
    
    expect(response.status).toBe(200);
    expect(response.body.tipAmount).toBe(20);
    expect(response.body.total).toBe(120);
  });
  
  it('returns 400 for invalid input', async () => {
    const response = await request(app)
      .post('/calculate-tip')
      .send({ billAmount: -100, tipPercentage: 20 });
    
    expect(response.status).toBe(400);
    expect(response.body.error).toBeDefined();
  });
});

describe('POST /split-bill', () => {
  it('splits bill correctly', async () => {
    const response = await request(app)
      .post('/split-bill')
      .send({ totalAmount: 120, numberOfPeople: 3 });
    
    expect(response.status).toBe(200);
    expect(response.body.perPerson).toBe(40);
  });
});