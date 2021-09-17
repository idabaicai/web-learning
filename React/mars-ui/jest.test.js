test('common matcher', () => {
  expect( 2 + 2 ).toBe(4)
  expect( 2 + 2 ).not.toBe(6)
})

test('to be true or false', () => {
  expect(1).toBeTruthy();
  expect(0).toBeFalsy();
})

test('number', () => {
  expect(6).toBeGreaterThan(4);
  expect(8).toBeLessThan(10);
})

test('object', () => {
  expect({name: 'jest'}).toEqual({name: 'jest'});
})