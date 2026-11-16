import TokenPlayground from '@/components/lab/TokenPlayground';
import RssReaderDemo from '@/components/lab/RssReaderDemo';

export function LabGrid() {
  return (
    <div className="lab-experiments">
      <div className="lab-experiment">
        <header>
          <h2 className="lab-experiment-title">Pastis Design System Playground</h2>
          <p className="lab-experiment-desc">Change the accent — every Pastis component follows live.</p>
        </header>
        <TokenPlayground />
      </div>
      <div className="lab-experiment">
        <header>
          <h2 className="lab-experiment-title">RSS Reader</h2>
          <p className="lab-experiment-desc">A demo of my personal feed reader, rebuilt from Pastis components. Filter, save and read.</p>
        </header>
        <RssReaderDemo />
      </div>
    </div>
  );
}
