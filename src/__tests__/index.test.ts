import { List } from '../';

test('list can be created', () => {
  const list = new List();
  expect(list).toEqual({});
});
