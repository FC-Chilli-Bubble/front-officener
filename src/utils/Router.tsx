import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Login/Login';
import NotFound from '@/components/Common/NotFound';
import ErrorComponent from '@/components/Common/ErrorComponent';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />, // 404 페이지 컴포넌트
    children: [
      {
        path: '',
        element: <Home />,
        errorElement: <ErrorComponent />
      },
      {
        path: 'login',
        element: <Login />,
        errorElement: <ErrorComponent />
      }
    ]
  }
]);