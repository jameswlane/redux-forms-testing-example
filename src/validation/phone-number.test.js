import Chance from 'chance';

import { phoneNumber } from './phone-number';

const chance = new Chance();

describe('Validation => Phone Number', () => {
  it('should return undefined if a valid phone number', () => {
    const response = phoneNumber(chance.phone({ formatted: false }));

    expect(response).toBeUndefined();
  })

  it('should return warning if not a valid phone number', () => {
    const response = phoneNumber(chance.string());

    expect(response).toEqual('Invalid phone number, must be 10 digits');
  })
});
