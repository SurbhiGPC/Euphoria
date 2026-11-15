import { describe, expect, it } from 'vitest';
import { estimateBudget } from './budget';
describe('event budget rules', () => {
  it('limits teams to 50 people', () => { expect(estimateBudget(80, 'essential').guests).toBe(50); });
  it('supports one-person events', () => { expect(estimateBudget(0, 'essential').guests).toBe(1); });
  it('uses the requested Essential wedding estimate of ₹10,000 per guest', () => { expect(estimateBudget(1, 'essential').total).toBe(10000); });
  it('uses the requested Signature wedding estimate of ₹25,000 per guest', () => { expect(estimateBudget(1, 'signature').total).toBe(25000); });
  it('uses the requested Premium wedding estimate of ₹40,000 per guest', () => { expect(estimateBudget(1, 'premium').total).toBe(40000); });
  it('calculates the 20-guest Signature estimate from the per-person rate', () => { expect(estimateBudget(20, 'signature').total).toBe(500000); });
  it('caps wedding estimates at 50 guests', () => { expect(estimateBudget(80, 'premium').total).toBe(2000000); });
});