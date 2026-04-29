import { PageHeader } from '@/shared/components/common/PageHeader';
import { Button, Input, Select } from '@/shared/components/ui';

const roleOptions = [
  { label: 'Choose a preview role', value: '' },
  { label: 'Retail customer', value: 'retail' },
  { label: 'Business owner', value: 'business' },
  { label: 'Internal operator', value: 'internal' },
];

export function SignupPage() {
  return (
    <>
      <PageHeader
        eyebrow="Signup"
        title="Create account UI"
        description="A registration page shell that shares the same primitive inputs and select component."
      />

      <section className="mx-auto w-full max-w-3xl rounded-3xl border border-white/70 bg-white/85 p-6 shadow-sm shadow-slate-900/5 backdrop-blur sm:p-8">
        <form
          className="grid gap-5 md:grid-cols-2"
          onSubmit={(event) => event.preventDefault()}
        >
          <Input label="First name" placeholder="Alex" />
          <Input label="Last name" placeholder="Morgan" />
          <Input label="Email" type="email" placeholder="alex@trainbank.dev" />
          <Input label="Phone number" placeholder="+84 900 000 000" />
          <Select
            label="Role"
            defaultValue=""
            options={roleOptions}
            className="md:col-span-2"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Create a password"
            className="md:col-span-2"
          />
          <div className="md:col-span-2 flex items-center justify-end">
            <Button type="submit">Create preview account</Button>
          </div>
        </form>
      </section>
    </>
  );
}
