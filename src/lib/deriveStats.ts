interface ExperienceItem {
  role?: string;
  company: string;
  period: string;
}

/** Earliest 4-digit year found across all experience periods (e.g. "2006 — 2014" → 2006). */
export function getEarliestYear(experience: ExperienceItem[] | undefined): number | null {
  if (!experience?.length) return null;
  const years = experience
    .map((job) => job.period?.match(/\d{4}/)?.[0])
    .filter((y): y is string => Boolean(y))
    .map(Number);
  return years.length ? Math.min(...years) : null;
}

export function getCurrentJob(experience: ExperienceItem[] | undefined): ExperienceItem | undefined {
  return experience?.find((job) => job.period === 'Current');
}
