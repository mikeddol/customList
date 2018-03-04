interface Cons {
  _head: any,
  _tail: Cons | null
}

export class List {
  private _head: any;
  private _tail: Cons | null;
  constructor(...values: any[]) {
    this.recurConstruct(values, null);
    return this;
  };

  private recurConstruct(vals: any, acc: Cons | null): Cons | null {
    if (vals.length === 0) {
      return acc;
    }
    this._head = vals.pop();
    this._tail = acc;
    return this.recurConstruct(vals, {
      _head: this._head,
      _tail: this._tail
    });
  };

  public reduce(fn: (x: any, y: any) => any, acc: any): any {
    return this.recurReduce(fn, this.list, acc);
  };

  private recurReduce(fn: (x: any, y: any) => any, vals: Cons | null, acc: any): any {
    if (vals._tail === null) {
      return fn(acc, vals._head);
    }
    return this.recurReduce(fn, vals._tail, fn(acc, vals._head));
  };

  public map(fn: (x: any) => any): List {
    const concatFn = (acc: any[], val: any) => acc.concat(fn(val));
    return new List(...this.recurReduce(concatFn, this.list, []));
  };

  public filter(fn: (x: any) => boolean): List {
    const filterFn = (acc: any[], val: any) => fn(val) ? acc.concat(val) : acc;
    return new List(...this.recurReduce(filterFn, this.list, []));
  };

  public push(newVal: any): List {
    return new List(...this.recurReduce(this.customConcat, this.list, []), newVal);
  };

  public pop() {
    return new List(...this.recurReduce(this.customConcat, this.list, []).slice(0, -1));
  };

  public get head(): any {
    return this._head;
  };

  public get tail(): Cons | null {
    return this._tail;
  };

  public get list(): Cons | null {
    return { _head: this.head, _tail: this.tail };
  };

  public get length(): number {
    return this.reduce((x, _) => x + 1, 0);
  };

  public get values(): any[] {
    return this.recurReduce(this.customConcat, this.list, []);
  };

  private customConcat(acc: any[], val: any): any[] { return acc.concat(val) };
};
