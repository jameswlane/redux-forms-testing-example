export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
