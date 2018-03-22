export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };

  constructor(reducers = {}, initState = {}) {
    this.subscribers = [];
    this.reducers = reducers;
    this.state = this.reduce(initState, {});
  }

  public subscribe(fn: Function) {
    this.subscribers.push(fn);
    fn(this.state);
  }

  public get value() {
    return this.state;
  }

  public dispatch(action) {
    this.state = this.reduce(this.state, action);
    this.notify();
  }

  private notify() {
    this.subscribers.forEach(fn => fn(this.state));
  }

  private reduce(state, action) {
    const newState = {};
    for (const prop in this.reducers) {
      newState[prop] = this.reducers[prop](state[prop], action);
    }
    return newState;
  }
}
