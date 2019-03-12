import Chance from 'chance';

import { maxLength15 } from './max-length-15';

const chance = new Chance();

describe('Validation => Max Length 15', () => {
  it('should return undefined if under max length of 15', () => {
    const response = maxLength15(chance.string({ length: 15 }));

    expect(response).toBeUndefined();
  })

  it('should return warning if exceeds max length of 15', () => {
    const response = maxLength15(chance.string({ length: 16 }));

    expect(response).toEqual('Must be 15 characters or less');
  })
});
