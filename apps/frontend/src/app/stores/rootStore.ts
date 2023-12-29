import { Stores } from './createStores';

export class RootStore<S extends Stores> {
  constructor(stores: S) {
    const combined = Object.keys(stores).reduce(
      (acc, key) => {
        return {
          ...acc,
          [key]: stores[key as keyof Stores].init(this as unknown as Stores),
        };
      },
      { ...stores }
    );

    Object.assign(this, { ...combined });
  }
}
