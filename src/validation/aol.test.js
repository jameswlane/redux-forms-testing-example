import Chance from 'chance';

import { aol } from './aol';

const chance = new Chance();

describe('Validation => AOL', () => {
  it('should return undefined if not a aol email address', () => {
    const pool = { pool: 'abcdefghijklmnopqrstuvwxyz0123456789' };
    const response = aol(chance.email({ domain: `${chance.string(pool)}.com` }));

    expect(response).toBeUndefined();
  })

  it('should return warning if a aol email address', () => {
    const response = aol(chance.email({ domain: "aol.com" }));

    expect(response).toEqual('Really? You still use AOL for your email?');
  })
});
