declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'pastis-nav': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          brand?: string;
          sticky?: string;
          variant?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-footer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          brand?: string;
          tagline?: string;
          copyright?: string;
          variant?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-theme-toggle': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          size?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          variant?: string;
          size?: string;
          disabled?: string;
          href?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-card': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          variant?: string;
          hoverable?: string;
          clickable?: string;
          padding?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-section': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          label?: string;
          heading?: string;
          subheading?: string;
          align?: string;
          padding?: string;
          background?: string;
          'has-divider'?: string;
          'max-width'?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-timeline': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          variant?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-badge': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          variant?: string;
          label?: string;
          dot?: boolean;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-tag': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          variant?: string;
          size?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-project-card': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          href?: string;
          heading?: string;
          client?: string;
          year?: string;
          summary?: string;
          image?: string;
          'image-alt'?: string;
          video?: string;
          tags?: string;
          index?: string;
          size?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-statement': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          eyebrow?: string;
          size?: string;
          reveal?: boolean;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-token-swatch': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          token?: string;
          label?: string;
        };
        'pastis-spec-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          tokens?: string;
          kind?: string;
          caption?: string;
          sample?: string;
        };
        'pastis-stat-card': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          label?: string;
          value?: string;
          variant?: string;
        };
        'pastis-code-block': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          code?: string;
          language?: string;
          filename?: string;
          copyable?: boolean;
          lineNumbers?: boolean;
        };
        'pastis-toggle': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          checked?: boolean;
          label?: string;
          size?: string;
        };
        'pastis-input': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          label?: string;
          placeholder?: string;
          helper?: string;
          error?: string;
          size?: string;
        };
        'pastis-progress': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          value?: number;
          variant?: string;
          label?: string;
          'show-value'?: boolean;
        };
        'pastis-alert': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          variant?: string;
          title?: string;
        };
        'pastis-avatar': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          src?: string;
          name?: string;
          size?: string;
          ref?: React.Ref<HTMLElement>;
        };
      }
    }
  }
}

export {};
