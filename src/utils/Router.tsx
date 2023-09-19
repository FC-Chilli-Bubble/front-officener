import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import Home from '@/pages/Home/Home';
import Deliverypage from '@/pages/Deliverypage/DeliveryPage';
import DetailsPage from '@/pages/Deliverypage/DetailsPage';
import Login from '@/pages/Login/Login';
import Register from '@/pages/Register/Register';
import Intro from '@/pages/Register/Intro';
import DeliveryPost from '@/pages/Delivery/DeliveryPost';
import NotFound from '@/components/Common/NotFound';
import ErrorComponent from '@/components/Common/ErrorComponent';
import Layout from '@/components/Common/Layout';
import NavLayout from '@/components/Common/NavLayout';
import MyPage from '@/pages/MyPage/MyPage';
import MyProfile from '@/pages/MyPage/MyProfile';
import Notification from '@/pages/Notification/Notification';

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
          },
          {
            path: '/Deliverypage',
            element: <Deliverypage />,
            errorElement: <ErrorComponent />
          },
          {
            path: '/mypage',
            element: <MyPage />,
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
          },
          {
            path: '/intro',
            element: <Intro />,
            errorElement: <ErrorComponent />
          },
          {
            path: '/intro/register',
            element: <Register />,
            errorElement: <ErrorComponent />
          },
          {
            path: '/delivery/post',
            element: <DeliveryPost />,
            errorElement: <ErrorComponent />
          },
          {
            path: '/mypage/profile',
            element: <MyProfile />,
            errorElement: <ErrorComponent />
          },
          {
            path: '/notification',
            element: <Notification />,
            errorElement: <ErrorComponent />
          },
          {
            path: '/DetailsPage',
            element: <DetailsPage />,
            errorElement: <ErrorComponent />
          }
        ]
      }
    ]
  }
]);
