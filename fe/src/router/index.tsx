import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@/const/app';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { SignupPage } from '@/pages/SignupPage';

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.profile.slice(1),
        element: <ProfilePage />,
      },
      {
        path: ROUTES.login.slice(1),
        element: <LoginPage />,
      },
      {
        path: ROUTES.signup.slice(1),
        element: <SignupPage />,
      },
    ],
  },
]);
