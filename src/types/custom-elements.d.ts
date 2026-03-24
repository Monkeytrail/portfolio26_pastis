declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'pastis-nav': React.HTMLAttributes<HTMLElement> & {
          brand?: string;
          sticky?: string;
          variant?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-footer': React.HTMLAttributes<HTMLElement> & {
          brand?: string;
          tagline?: string;
          copyright?: string;
          variant?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-theme-toggle': React.HTMLAttributes<HTMLElement> & {
          size?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-button': React.HTMLAttributes<HTMLElement> & {
          variant?: string;
          size?: string;
          disabled?: string;
          href?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-card': React.HTMLAttributes<HTMLElement> & {
          variant?: string;
          hoverable?: string;
          clickable?: string;
          padding?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-section': React.HTMLAttributes<HTMLElement> & {
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
        'pastis-timeline': React.HTMLAttributes<HTMLElement> & {
          variant?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-badge': React.HTMLAttributes<HTMLElement> & {
          variant?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-tag': React.HTMLAttributes<HTMLElement> & {
          variant?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-avatar': React.HTMLAttributes<HTMLElement> & {
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
