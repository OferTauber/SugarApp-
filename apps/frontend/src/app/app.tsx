import { RouterProvider } from 'react-router-dom';

import { router } from './routes/routes';

export function App() {
  return <RouterProvider {...{ router }} />;
}

export default App;
