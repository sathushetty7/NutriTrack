export default function SettingsPage() {
  return <><h1 className="text-4xl font-bold">Settings</h1><p className="mt-3 text-[var(--muted)]">Manage your profile and nutrition targets.</p><div className="mt-8 max-w-xl rounded-2xl border border-[var(--line)] bg-white p-6"><label className="grid gap-2 text-sm font-semibold">Daily calorie target<input defaultValue="2200" type="number" className="rounded-xl border border-[var(--line)] px-4 py-3 font-normal" /></label></div></>;
}
