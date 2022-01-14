import sortHeroes from '../app';

describe('sortHeroes function:', () => {
  test('should return "healthy"', () => {
    expect(sortHeroes).toBeDefined();
    const result = sortHeroes([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ]);

    expect(result).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });
});
