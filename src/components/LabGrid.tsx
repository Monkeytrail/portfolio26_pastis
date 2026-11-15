import TokenPlayground from '@/components/lab/TokenPlayground';

export function LabGrid() {
  return (
    <div className="lab-experiments">
      <div className="lab-experiment">
        <header>
          <h3 className="lab-experiment-title">Pastis Design System Playground</h3>
          <p className="lab-experiment-desc">Change the accent — every Pastis component follows live.</p>
        </header>
        <TokenPlayground />
      </div>
    </div>
  );
}
