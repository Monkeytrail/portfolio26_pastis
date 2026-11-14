const DISCIPLINE_LABELS: Record<string, string> = {
  'design-system': 'Design system',
  ux: 'UX',
  ui: 'UI',
  engineering: 'Engineering',
};

export function disciplineLabels(disciplines?: string[]): string[] {
  return (disciplines ?? []).map((d) => DISCIPLINE_LABELS[d] ?? d);
}
