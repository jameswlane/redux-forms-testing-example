import Chance from 'chance';

import { maxLength } from './max-length';

const chance = new Chance();

describe('Validation => Max Length', () => {
  it('should return undefined if meets max length', () => {
    const max = 5;
    const response = maxLength(max)(chance.string({ length: 4 }));

    expect(response).toBeUndefined();
  })

  it('should return warning if exceeds max length', () => {
    const max = 5;
    const response = maxLength(max)(chance.string({ length: 6 }));

    expect(response).toEqual(`Must be ${max} characters or less`);
  })
});
