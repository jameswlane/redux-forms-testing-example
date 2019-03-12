import Chance from 'chance';

import { alphaNumeric } from './alpha-numeric';

const chance = new Chance();

describe('Validation => Alpha Numeric', () => {
  it('should return undefined if alpha numeric', () => {
    const pool = { pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' };
    const response = alphaNumeric(chance.string(pool));

    expect(response).toBeUndefined();
  })

  it('should return warning if not alpha numeric', () => {
    const pool = { pool: '!@#$%^&*()[]' };
    const response = alphaNumeric(chance.string(pool));

    expect(response).toEqual('Only alphanumeric characters');
  })
});
