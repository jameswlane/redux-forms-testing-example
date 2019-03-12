import Chance from 'chance';

import { required } from './required';

const chance = new Chance();

describe('Validation => Required', () => {
  it('should return undefined if field is not empty', () => {
    const response = required(chance.string());

    expect(response).toBeUndefined();
  })

  it('should return warning if field is empty', () => {
    const response = required();

    expect(response).toEqual('Required');
  })
});
