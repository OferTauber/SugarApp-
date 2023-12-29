import { RouteObject, createBrowserRouter } from 'react-router-dom';

const routes: RouteObject[] = [
  { path: '/', element: <div>Home</div> },
  { path: 'test', element: <div>test</div> },
];

export const router = createBrowserRouter(routes);
