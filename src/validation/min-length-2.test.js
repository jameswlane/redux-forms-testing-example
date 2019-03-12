import Chance from 'chance';

import { minLength2 } from './min-length-2';

const chance = new Chance();

describe('Validation => Min Length 2', () => {
  it('should return undefined if exceeds the min length of 2', () => {
    const response = minLength2(chance.string({ length: 2 }));

    expect(response).toBeUndefined();
  })

  it('should return warning if under the min length of 2', () => {
    const response = minLength2(chance.string({ length: 1 }));

    expect(response).toEqual('Must be 2 characters or more');
  })
});
