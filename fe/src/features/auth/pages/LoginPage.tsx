import { PageHeader } from '@/shared/components/common/PageHeader';
import { Button, Input } from '@/shared/components/ui';

export function LoginPage() {
  return (
    <>
      <PageHeader
        eyebrow="Login"
        title="Sign in UI"
        description="A simple sign-in screen scaffold using shared input and button components."
      />

      <section className="mx-auto w-full max-w-xl rounded-3xl border border-white/70 bg-white/85 p-6 shadow-sm shadow-slate-900/5 backdrop-blur sm:p-8">
        <form
          className="space-y-5"
          onSubmit={(event) => event.preventDefault()}
        >
          <Input label="Email" type="email" placeholder="name@trainbank.dev" />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              This screen is intentionally UI-only.
            </p>
            <Button type="submit">Continue</Button>
          </div>
        </form>
      </section>
    </>
  );
}
