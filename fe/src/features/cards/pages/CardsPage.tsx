import { PageHeader } from '@/shared/components/common/PageHeader';

export function CardsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cards"
        title="Card management"
        description="Manage your debit and credit cards. This feature is under development."
      />

      <section className="rounded-3xl border border-white/70 bg-white/85 p-6 shadow-sm shadow-slate-900/5 backdrop-blur">
        <p className="text-sm text-slate-600">
          Cards feature coming soon. This page will include card listings,
          lock/unlock controls, spending limits, and transaction history.
        </p>
      </section>
    </>
  );
}
