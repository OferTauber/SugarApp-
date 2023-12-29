import { observable, makeObservable, action } from 'mobx';
import { StoreBase } from './storeBase';

export class DummyStore extends StoreBase {
  isDummy: boolean = true;

  constructor() {
    super();
    makeObservable(this, {
      // observables
      isDummy: observable,

      // actions
      setIsDummy: action,
    });
  }

  public setIsDummy = (flag: boolean) => {
    this.isDummy = flag;
  };
}
