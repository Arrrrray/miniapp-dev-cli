
const preview = require('../preview');

test('the data is peanut butter', async () => {
  const data = await preview();
  expect(data).toBeUndefined();
  console.log(data)
});