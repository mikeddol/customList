import { List } from '../';

test('list can be created', () => {
  const list = new List();
  expect(list).toEqual({});
});

test('length has correct length', () => {
  const list = new List(1, 2, 3);
  expect(list.length).toBe(3);
  const reconstruct = (x, y) => x.concat(y);
});

test('reducing works', () => {
  function factorial(n) {
    function recur(n, acc) {
      if (n == 0) {
        return acc;
      } else {
        return recur(n - 1, n * acc);
      }
    }
    return recur(n, 1);
  }
  const myArr = [...Array(1000).keys()];
  myArr.shift();
  const list = new List(...myArr);
  const product = (x, y) => x * y;
  expect(list.reduce(product, 1)).toEqual(factorial(999));
  expect(list).toEqual(new List(...myArr));
});

test('mapping works', () => {
  const myArr = [...Array(1000).keys()];
  myArr.shift();
  const list = new List(...myArr);
  const double = x => x * 2;
  expect(list.map(double)).toEqual(new List(...myArr.map(double)));
  expect(list).toEqual(new List(...myArr));
});

test('filtering works', () => {
  const myArr = [...Array(1000).keys()];
  myArr.shift();
  const list = new List(...myArr);
  const biggerThan500 = (x) => x > 500;
  expect(list.filter(biggerThan500)).toEqual(new List(...myArr.slice(myArr.length / 2 + 1)));
  expect(list).toEqual(new List(...myArr));
});

test('getting just the values as an array works', () => {
  const myArr = [...Array(1000).keys()];
  myArr.shift();
  const list = new List(...myArr);
  expect(list.values).toEqual(myArr);
  expect(list).toEqual(new List(...myArr));
});

test('pushing node to the end of list', () => {
  const list = new List(1, 2, 3, 4, 5);
  expect(list.push(6)).toEqual(new List(1, 2, 3, 4, 5, 6));
  expect(list).toEqual(new List(1, 2, 3, 4, 5));
});

test('popping node from the end of the list', () => {
  const list = new List(1, 2, 3, 4, 5);
  expect(list.pop()).toEqual(new List(1, 2, 3, 4));
  expect(list).toEqual(new List(1, 2, 3, 4, 5));
})