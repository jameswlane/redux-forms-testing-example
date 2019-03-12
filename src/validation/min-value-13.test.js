import Chance from 'chance';

import { minValue13 } from './min-value-13';

const chance = new Chance();

describe('Validation => Min Value 13', () => {
  it('should return undefined if exceeds min value of 13', () => {
    const response = minValue13(chance.natural({ min: 13, max: 100 }));

    expect(response).toBeUndefined();
  })

  it('should return warning if under min value of 13', () => {
    const response = minValue13(chance.natural({ min: 1, max: 12 }));

    expect(response).toEqual('Must be at least 13');
  })
});
