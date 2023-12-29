import { Stores } from './createStores';

export class StoreBase {
  public rootStore!: Stores;

  public init(rootStore: Stores): StoreBase {
    this.rootStore = rootStore;

    return this;
  }
}
