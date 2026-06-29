interface BadgeProps {
  children: string;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-bg-raised px-3 py-1 text-xs font-medium text-ink-muted">
      {children}
    </span>
  );
}
