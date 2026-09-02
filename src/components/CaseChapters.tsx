import { PortableText, type PortableTextComponents } from '@portabletext/react';

const chapterBodyComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h4: ({ children }) => <h4>{children}</h4>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
  },
  types: {
    pullquote: ({ value }) => (
      <div className="pullquote">
        {value.quote}
        {value.attribution && <span className="attr">— {value.attribution}</span>}
      </div>
    ),
  },
};

interface ChapterProps {
  num: number;
  label: string;
  body: any[];
}

export default function Chapter({ num, label, body }: ChapterProps) {
  return (
    <div className="chapter">
      <div className="chapter-head">
        <span className="num">{String(num).padStart(2, '0')}</span>
        <span className="label">{label}</span>
      </div>
      <div className="chapter-body">
        <PortableText value={body} components={chapterBodyComponents} />
      </div>
    </div>
  );
}
