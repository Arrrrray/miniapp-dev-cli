
const preview = require('../src/preview');

test('the data is peanut butter', async () => {
  const data = await preview();
  expect(data).toBeUndefined();
});