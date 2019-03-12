import Chance from 'chance';

import { number } from './number';

const chance = new Chance();

describe('Validation => Number', () => {
  it('should return undefined if a number', () => {
    const pool = { pool: '0123456789' };
    const response = number(chance.string(pool));

    expect(response).toBeUndefined();
  })

  it('should return warning if not a number', () => {
    const pool = { pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()[]' };
    const response = number(chance.string(pool));

    expect(response).toEqual('Must be a number');
  })
});
