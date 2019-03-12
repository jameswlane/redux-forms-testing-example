import Chance from 'chance';

import { minLength } from './min-length';

const chance = new Chance();

describe('Validation => Min Length', () => {
  it('should return undefined if meets the min length', () => {
    const response = minLength(5)(chance.string({ length: 5 }));

    expect(response).toBeUndefined();
  })

  it('should return warning if longer than the min length', () => {
    const min = 5;
    const response = minLength(min)(chance.string({ length: 4 }));

    expect(response).toEqual(`Must be ${min} characters or more`);
  })
});
