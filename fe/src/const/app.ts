export const APP_NAME = 'Train Bank';
export const APP_DESCRIPTION =
  'Frontend UI scaffold for the banking workspace.';
export const API_URL =
  import.meta.env.VITE_API_URL ?? 'http://localhost:8080/api';
export const REQUEST_TIMEOUT_MS = 10000;
export const DEFAULT_COUNT_STEP = 1;

export const ROUTES = {
  home: '/',
  profile: '/profile',
  login: '/login',
  signup: '/signup',
} as const;

export const NAV_ITEMS = [
  { label: 'Home', path: ROUTES.home },
  { label: 'Profile', path: ROUTES.profile },
  { label: 'Login', path: ROUTES.login },
  { label: 'Signup', path: ROUTES.signup },
];
