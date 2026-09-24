export function ProgressChart() {
  return <div className="flex h-40 items-end gap-3 rounded-2xl border border-[var(--line)] bg-white p-5">{[40, 65, 52, 78, 61, 88, 72].map((height, index) => <div key={index} className="flex-1 rounded-t-lg bg-[var(--accent)]" style={{ height: `${height}%` }} />)}</div>;
}
