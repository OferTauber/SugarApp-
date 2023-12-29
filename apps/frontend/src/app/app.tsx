import { RouterProvider } from 'react-router-dom';

import { StoreProvider } from './stores/storeContext';

import { router } from './routes/routes';

export function App() {
  return (
    <StoreProvider>
      <RouterProvider {...{ router }} />
    </StoreProvider>
  );
}

export default App;
