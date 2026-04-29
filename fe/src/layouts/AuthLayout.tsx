import { Link, Outlet } from 'react-router-dom';

import { APP_NAME } from '@/shared/constants/app';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-white/70 bg-white/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
              FE Scaffold
            </p>
            <p className="text-lg font-semibold text-slate-950">{APP_NAME}</p>
          </Link>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}
