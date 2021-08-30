import sorting from '../app';

const hero = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('Should sort the elements in the array correct', () => {
  expect(sorting(hero, ['name', 'level'])).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

test('Should sort the elements in the array correct if order is not passed', () => {
  expect(sorting(hero))
    .toEqual([
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ]);
});

test('The order of the elements must match the 2nd argument of the function', () => {
  expect(sorting(hero, ['level', 'defence', 'health', 'name', 'attack']))
    .toEqual([
      { key: 'level', value: 2 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'name', value: 'мечник' },
      { key: 'attack', value: 80 },
    ]);
});