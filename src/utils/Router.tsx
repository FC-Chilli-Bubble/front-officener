import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Login/Login';
import NotFound from '@/components/Common/NotFound';
import ErrorComponent from '@/components/Common/ErrorComponent';
import Layout from '@/components/Common/Layout';
import NavLayout from '@/components/Common/NavLayout';

export const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <NotFound />, // 404 페이지 컴포넌트
    children: [
      {
        path: '/',
        element: <NavLayout />,
        errorElement: <ErrorComponent />,
        children: [
          // Navigation이 있는 페이지는 아래에 추가해주시면 됩니다!
          {
            path: '',
            element: <Home />,
            errorElement: <ErrorComponent />
          },
          {
            path: '/delivery',
            element: <Home />,
            errorElement: <ErrorComponent />
          }
        ]
      },
      {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorComponent />,
        children: [
          // Navigation이 없는 페이지는 아래에 추가해주시면 됩니다!
          {
            path: '/login',
            element: <Login />,
            errorElement: <ErrorComponent />
          }
        ]
      }
    ]
  }
]);
