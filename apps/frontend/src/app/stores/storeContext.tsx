import { createContext, useContext, ReactNode, FC } from 'react';

import { createStore, Stores } from './createStores';

const store = createStore() as Stores;

const storeContext = createContext(store);

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <storeContext.Provider {...{ value: store }}>
    {children}
  </storeContext.Provider>
);

export const useStore = (): Stores => {
  const stores = useContext(storeContext);

  if (!store) throw new Error('Missing Store Provider!!');

  return stores;
};
