import { describe, it, expect } from 'vitest';
import { calculateTip, splitBill } from '../src/calculator.js';

describe('calculateTip', () => {
  it('calculates 15% tip correctly', () => {
    const result = calculateTip(100, 15);
    expect(result.tipAmount).toBe(15);
    expect(result.total).toBe(115);
  });
  
  it('handles zero tip', () => {
    const result = calculateTip(50, 0);
    expect(result.tipAmount).toBe(0);
    expect(result.total).toBe(50);
  });
  
  it('rounds to 2 decimal places', () => {
    const result = calculateTip(33.33, 10);
    expect(result.tipAmount).toBe(3.33);
  });
  
  it('throws error for negative bill', () => {
    expect(() => calculateTip(-10, 15)).toThrow('non-negative');
  });
  
  it('throws error for non-number input', () => {
    expect(() => calculateTip('100', 15)).toThrow();
  });
});

describe('splitBill', () => {
  it('splits bill evenly among people', () => {
    const result = splitBill(100, 4);
    expect(result.perPerson).toBe(25);
  });
  
  it('handles single person', () => {
    const result = splitBill(50, 1);
    expect(result.perPerson).toBe(50);
  });
  
  it('throws error for zero people', () => {
    expect(() => splitBill(100, 0)).toThrow();
  });
  
  it('throws error for negative amount', () => {
    expect(() => splitBill(-10, 2)).toThrow();
  });
});