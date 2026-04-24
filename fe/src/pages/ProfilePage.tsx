import { PageHeader } from '@/components/shared/PageHeader';
import { Button, Input, Select } from '@/components/ui';

const accountOptions = [
  { label: 'Personal account', value: 'personal' },
  { label: 'Business account', value: 'business' },
  { label: 'Joint account', value: 'joint' },
];

export function ProfilePage() {
  return (
    <>
      <PageHeader
        eyebrow="Profile"
        title="Profile surface"
        description="A clean profile page shell that reuses the shared form primitives and stays presentation-only."
        actions={<Button variant="secondary">Edit UI</Button>}
      />

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/70 bg-white/85 p-6 shadow-sm shadow-slate-900/5 backdrop-blur">
          <h2 className="text-lg font-semibold text-slate-950">
            Account overview
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Input label="Full name" defaultValue="Alex Morgan" readOnly />
            <Input label="Email" defaultValue="alex@trainbank.dev" readOnly />
            <Select
              label="Account type"
              defaultValue="business"
              options={accountOptions}
            />
            <Input
              label="Preferred branch"
              defaultValue="District 1"
              readOnly
            />
          </div>
        </div>

        <div className="rounded-3xl border border-white/70 bg-white/85 p-6 shadow-sm shadow-slate-900/5 backdrop-blur">
          <h2 className="text-lg font-semibold text-slate-950">
            Summary cards
          </h2>
          <div className="mt-6 space-y-4 text-sm text-slate-600">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-medium text-slate-900">Member since</p>
              <p className="mt-1">January 2026</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-medium text-slate-900">Profile completion</p>
              <p className="mt-1">82%</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-medium text-slate-900">Notification status</p>
              <p className="mt-1">Email and push previews enabled</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
