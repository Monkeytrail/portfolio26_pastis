interface ExperienceItem {
  role?: string;
  company: string;
  period: string;
  description?: string;
}

interface Props {
  items: ExperienceItem[];
}

export default function ExperienceTimeline({ items }: Props) {
  return (
    <div className="timeline-body">
      {items?.map((exp, i) => (
        <div key={i} className={`t-row${exp.period === 'Current' ? ' current' : ''}`}>
          <div className="node" />
          <div className="years">{exp.period}</div>
          <div className="role">{exp.role ?? exp.company}</div>
          <div className="company">{exp.company}</div>
        </div>
      ))}
    </div>
  );
}
