interface SiteFooterProps {
  copyright: string;
  bordered?: boolean;
  note?: React.ReactNode;
}

export default function SiteFooter({ copyright, bordered, note }: SiteFooterProps) {
  return (
    <div className={`footer${bordered ? ' footer--bordered' : ''}`}>
      <span>{copyright}</span>
      {note}
    </div>
  );
}
