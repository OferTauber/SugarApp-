import { DummyStore } from './dummyStore';
import { RootStore } from './rootStore';

export interface Stores {
  dummy: DummyStore;
}

export const createStore = (): RootStore<Stores> => {
  return new RootStore<Stores>({
    dummy: new DummyStore(),
  });
};
