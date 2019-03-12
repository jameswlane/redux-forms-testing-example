import Chance from 'chance';

import { email } from './email';

const chance = new Chance();

describe('Validation => Email', () => {
  it('should return undefined if a email address', () => {
    const response = email(chance.email());

    expect(response).toBeUndefined();
  })

  it('should return warning if not a valid email address', () => {
    const response = email(chance.string());

    expect(response).toEqual('Invalid email address');
  })
});
