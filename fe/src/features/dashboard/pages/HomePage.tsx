import { useMemo, useState } from 'react';

import { useCounterStore } from '@/app/store/useCounterStore';
import { apiClient } from '@/shared/api';
import { PageHeader } from '@/shared/components/common/PageHeader';
import { Button, Dropdown, Input, Modal, Select, Toast } from '@/shared/components/ui';
import { API_URL } from '@/shared/constants/app';
import type { ToastTone } from '@/shared/types';

const selectOptions = [
  { label: 'Choose a product mood', value: '' },
  { label: 'Clean onboarding', value: 'onboarding' },
  { label: 'Calm dashboard', value: 'dashboard' },
  { label: 'Fast auth flow', value: 'auth' },
];

export function HomePage() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const reset = useCounterStore((state) => state.reset);

  const [email, setEmail] = useState('');
  const [selectedMood, setSelectedMood] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastTone, setToastTone] = useState<ToastTone>('info');
  const [showToast, setShowToast] = useState(true);

  const dropdownItems = useMemo(
    () => [
      {
        label: 'Open preview modal',
        description: 'Show the shared modal component.',
        onSelect: () => setIsModalOpen(true),
      },
      {
        label: 'Switch toast to success',
        description: 'Preview a success notification style.',
        onSelect: () => {
          setToastTone('success');
          setShowToast(true);
        },
      },
      {
        label: 'Switch toast to warning',
        description: 'Preview a warning notification style.',
        onSelect: () => {
          setToastTone('warning');
          setShowToast(true);
        },
      },
    ],
    [],
  );

  return (
    <>
      <PageHeader
        eyebrow="Home"
        title="UI scaffold for routes, components, and shell state"
        description="This page wires the default layout, Zustand click counter, shared UI primitives, and the app-level config values without adding domain business logic."
        actions={
          <>
            <Button variant="secondary" onClick={reset}>
              Reset counter
            </Button>
            <Dropdown label="UI actions" items={dropdownItems} />
          </>
        }
      />

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/70 bg-white/85 p-6 shadow-sm shadow-slate-900/5 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Zustand store
            </p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-5xl font-semibold tracking-tight text-slate-950">
                  {count}
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Total button clicks shown from the default store.
                </p>
              </div>
              <Button onClick={() => increment()}>Increase count</Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/70 bg-white/85 p-6 shadow-sm shadow-slate-900/5 backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-950">
                UI primitives
              </h2>
              <div className="mt-4 space-y-4">
                <Input
                  label="Email preview"
                  placeholder="name@trainbank.dev"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  hint="Only local UI state is stored here."
                />
                <Select
                  label="Mood selection"
                  value={selectedMood}
                  options={selectOptions}
                  onChange={(event) => setSelectedMood(event.target.value)}
                  hint="Native select wrapped with shared styling."
                />
              </div>
            </div>

            <div className="rounded-3xl border border-white/70 bg-white/85 p-6 shadow-sm shadow-slate-900/5 backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-950">
                App constants
              </h2>
              <dl className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <dt className="font-medium text-slate-900">API_URL</dt>
                  <dd className="mt-1 break-all">{API_URL}</dd>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <dt className="font-medium text-slate-900">Axios baseURL</dt>
                  <dd className="mt-1 break-all">
                    {apiClient.defaults.baseURL ?? 'Not configured'}
                  </dd>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <dt className="font-medium text-slate-900">Selected mood</dt>
                  <dd className="mt-1">
                    {selectedMood ? selectedMood : 'No option selected yet'}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {showToast ? (
            <Toast
              tone={toastTone}
              title="Toast component preview"
              message="This shared toast stays presentation-only and is controlled by local state."
              actionLabel="Hide"
              onAction={() => setShowToast(false)}
            />
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-4 text-sm text-slate-500">
              The toast is hidden. Use the dropdown menu to preview it again.
            </div>
          )}

          <div className="rounded-3xl border border-white/70 bg-white/85 p-6 shadow-sm shadow-slate-900/5 backdrop-blur">
            <h2 className="text-lg font-semibold text-slate-950">
              Quick notes
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="rounded-2xl bg-slate-50 p-4">
                Pages and layout are routed with React Router.
              </li>
              <li className="rounded-2xl bg-slate-50 p-4">
                TanStack Query is mounted at the root provider level.
              </li>
              <li className="rounded-2xl bg-slate-50 p-4">
                Modal and dropdown are only for UI scaffolding.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Modal
        open={isModalOpen}
        title="Shared modal preview"
        description="This modal uses the shared Portal component and stays isolated from domain logic."
        onClose={() => setIsModalOpen(false)}
        footer={
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
              Dismiss
            </Button>
            <Button onClick={() => setIsModalOpen(false)}>Looks good</Button>
          </div>
        }
      >
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            Use this slot to preview confirmation dialogs, onboarding callouts,
            or lightweight UI demos.
          </p>
          <div className="rounded-2xl bg-slate-50 p-4 text-slate-700">
            Current email input: {email || 'Nothing entered yet'}
          </div>
        </div>
      </Modal>
    </>
  );
}
