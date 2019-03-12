import Chance from 'chance';

import { minValue } from './min-value';

const chance = new Chance();

describe('Validation => Min Value', () => {
  it('should return undefined if exceeds min value', () => {
    const min = 5;
    const response = minValue(min)(chance.natural({ min: 5, max: 20 }));

    expect(response).toBeUndefined();
  })

  it('should return warning if under min value', () => {
    const min = 5;
    const response = minValue(min)(chance.natural({ min: 1, max: 4 }));

    expect(response).toEqual('Must be at least 5');
  })
});
