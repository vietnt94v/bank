import { PageHeader } from '@/shared/components/common/PageHeader';

export function TransfersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Transfers"
        title="Money transfers"
        description="Manage your transfers and transactions. This feature is under development."
      />

      <section className="rounded-3xl border border-white/70 bg-white/85 p-6 shadow-sm shadow-slate-900/5 backdrop-blur">
        <p className="text-sm text-slate-600">
          Transfers feature coming soon. This page will include internal
          transfers, inter-bank transfers, scheduled transfers, and beneficiary
          management.
        </p>
      </section>
    </>
  );
}
