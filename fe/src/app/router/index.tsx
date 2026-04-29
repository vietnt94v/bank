import { createBrowserRouter } from 'react-router-dom';

import { ProfilePage } from '@/features/accounts/pages/ProfilePage';
import { LoginPage } from '@/features/auth/pages/LoginPage';
import { SignupPage } from '@/features/auth/pages/SignupPage';
import { CardsPage } from '@/features/cards/pages/CardsPage';
import { HomePage } from '@/features/dashboard/pages/HomePage';
import { TransfersPage } from '@/features/transfers/pages/TransfersPage';
import { AuthLayout } from '@/layouts/AuthLayout';
import { MainLayout } from '@/layouts/MainLayout';
import { ROUTES } from '@/shared/constants/app';

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <MainLayout />,
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
        path: ROUTES.transfers.slice(1),
        element: <TransfersPage />,
      },
      {
        path: ROUTES.cards.slice(1),
        element: <CardsPage />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.login,
        element: <LoginPage />,
      },
      {
        path: ROUTES.signup,
        element: <SignupPage />,
      },
    ],
  },
]);
