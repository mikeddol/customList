interface Cons {
  _head: any,
  _tail: Cons | null
}

export class List {
  private _head: any;
  private _tail: Cons | null;
  constructor(...values: any[]) {
    return this.recur(values, null);
  }

  private recur(vals: any, acc: Cons | null) {
    if (vals.length === 0) {
      return acc;
    }
    this._head = vals.pop();
    this._tail = acc;
    return this.recur(vals, {
      _head: this._head,
      _tail: this._tail
    });
  }

  public get head() {
    return this._head;
  };

  public get tail() {
    return this._tail;
  };
};
