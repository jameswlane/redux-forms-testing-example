import Chance from 'chance';

import { tooYoung } from './too-young';

const chance = new Chance();

describe('Validation => Too Young', () => {
  it('should return undefined if age meets minimum requirement', () => {
    const response = tooYoung(chance.natural({ min: 13, max: 100 }));

    expect(response).toBeUndefined();
  })

  it('should return warning if age doesn\'t meets minimum requirement', () => {
    const response = tooYoung(chance.natural({ min: 1, max: 12 }));

    expect(response).toEqual('You do not meet the minimum age requirement!');
  })
});
