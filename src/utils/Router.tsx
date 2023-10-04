import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import Home from '@/pages/Home/Home';
import Deliverypage from '@/pages/Deliverypage/DeliveryPage';
import DetailsPage from '@/pages/Deliverypage/DetailsPage';
import Login from '@/pages/Login/Login';
import Intro from '@/pages/Signup/Intro';
import Signup from '@/pages/Signup/Singup';
import DeliveryPost from '@/pages/Delivery/DeliveryPost';
import NotFound from '@/components/Common/NotFound';
import ErrorComponent from '@/components/Common/ErrorComponent';
import Layout from '@/components/Common/Layout';
import NavLayout from '@/components/Common/NavLayout';
import MyPage from '@/pages/MyPage/MyPage';
import MyProfile from '@/pages/MyPage/MyProfile';
import Notification from '@/pages/Notification/Notification';
import ElevatorHome from '@/pages/Elevator/ElevatorHome';
import ChatRoom from '@/pages/ChatRoom/ChatRoom';

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
            path: '/intro/signup',
            element: <Signup />,
            errorElement: <ErrorComponent />
          },
          {
            path: '/elevator',
            element: <ElevatorHome />,
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
            path: '/delivery/:id',
            element: <DetailsPage />,
            errorElement: <ErrorComponent />
          },
          {
            path: '/chatroom/:roomId',
            element: <ChatRoom />,
            errorElement: <ErrorComponent />
          },
          {
            path: '/delivery/post',
            element: <DeliveryPost />,
            errorElement: <ErrorComponent />
          }
        ]
      }
    ]
  }
]);
