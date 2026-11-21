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
          target?: string;
          copy?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-button-split': React.HTMLAttributes<HTMLElement> & {
          href?: string;
          copy?: string;
          variant?: string;
          size?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-dropdown': React.HTMLAttributes<HTMLElement> & {
          label?: string; placeholder?: string; value?: string;
          options?: string | unknown[];
          open?: boolean | string; disabled?: boolean | string;
          searchable?: boolean | string; multiple?: boolean | string;
          size?: string; error?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-input': React.HTMLAttributes<HTMLElement> & {
          label?: string; placeholder?: string; value?: string;
          type?: string; disabled?: string; ref?: React.Ref<HTMLElement>;
        };
        'pastis-toggle': React.HTMLAttributes<HTMLElement> & {
          label?: string; checked?: boolean | string; disabled?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-stat-card': React.HTMLAttributes<HTMLElement> & {
          label?: string; value?: string; trend?: string;
          delta?: string; variant?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-card': React.HTMLAttributes<HTMLElement> & {
          variant?: string;
          hoverable?: boolean | string;
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
          items?: unknown[];
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-badge': React.HTMLAttributes<HTMLElement> & {
          variant?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-tag': React.HTMLAttributes<HTMLElement> & {
          variant?: string; size?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-avatar': React.HTMLAttributes<HTMLElement> & {
          src?: string;
          name?: string;
          size?: string;
          shape?: string;
          status?: string;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-accordion': React.HTMLAttributes<HTMLElement> & {
          items?: unknown[]; multiple?: boolean; variant?: string;
        };
        'pastis-alert': React.HTMLAttributes<HTMLElement> & {
          variant?: string; title?: string; dismissible?: boolean;
        };
        'pastis-breadcrumb': React.HTMLAttributes<HTMLElement> & {
          items?: unknown[]; separator?: string;
        };
        'pastis-checkbox': React.HTMLAttributes<HTMLElement> & {
          label?: string; checked?: boolean; indeterminate?: boolean; disabled?: boolean;
        };
        'pastis-code-block': React.HTMLAttributes<HTMLElement> & {
          code?: string; language?: string; filename?: string; copyable?: boolean;
        };
        'pastis-divider': React.HTMLAttributes<HTMLElement> & {
          variant?: string; label?: string;
        };
        'pastis-empty-state': React.HTMLAttributes<HTMLElement> & {
          icon?: string; heading?: string; body?: string; cta?: string; variant?: string;
        };
        'pastis-file-upload': React.HTMLAttributes<HTMLElement> & {
          label?: string; helper?: string; accept?: string; multiple?: boolean;
        };
        'pastis-filter-chip': React.HTMLAttributes<HTMLElement> & {
          label?: string; value?: string; selected?: boolean; removable?: boolean; count?: number;
        };
        'pastis-filter-bar': React.HTMLAttributes<HTMLElement> & {
          label?: string; ref?: React.Ref<HTMLElement>;
        };
        'pastis-pagination': React.HTMLAttributes<HTMLElement> & {
          total?: number; page?: number; 'page-size'?: number; variant?: string;
        };
        'pastis-progress': React.HTMLAttributes<HTMLElement> & {
          value?: number; variant?: string; label?: string; 'show-value'?: boolean;
        };
        'pastis-radio': React.HTMLAttributes<HTMLElement> & {
          label?: string; value?: string; name?: string; checked?: boolean;
        };
        'pastis-search': React.HTMLAttributes<HTMLElement> & {
          label?: string; placeholder?: string; suggestions?: unknown[];
        };
        'pastis-skeleton': React.HTMLAttributes<HTMLElement> & {
          variant?: string; width?: string; height?: string; lines?: number;
        };
        'pastis-spinner': React.HTMLAttributes<HTMLElement> & {
          size?: string; variant?: string; label?: string;
        };
        'pastis-table': React.HTMLAttributes<HTMLElement> & {
          columns?: unknown[]; rows?: unknown[]; striped?: boolean; hoverable?: boolean;
          ref?: React.Ref<HTMLElement>;
        };
        'pastis-statement': React.HTMLAttributes<HTMLElement> & {
          eyebrow?: string; size?: string; reveal?: boolean;
        };
        'pastis-shelf': React.HTMLAttributes<HTMLElement> & {
          label?: string; stagger?: number;
        };
        'pastis-project-card': React.HTMLAttributes<HTMLElement> & {
          href?: string; heading?: string; client?: string; year?: string; summary?: string;
          image?: string; 'image-alt'?: string; size?: string; reveal?: boolean; key?: React.Key;
        };
        'pastis-token-swatch': React.HTMLAttributes<HTMLElement> & {
          token?: string; label?: string; key?: React.Key;
        };
        'pastis-spec-table': React.HTMLAttributes<HTMLElement> & {
          tokens?: string; kind?: string; caption?: string; sample?: string;
        };
        'pastis-tabs': React.HTMLAttributes<HTMLElement> & {
          tabs?: unknown[]; active?: string; variant?: string;
        };
        'pastis-testimonial': React.HTMLAttributes<HTMLElement> & {
          quote?: string; name?: string; role?: string; company?: string; rating?: number; variant?: string;
        };
        'pastis-tooltip': React.HTMLAttributes<HTMLElement> & {
          content?: string; position?: string; variant?: string;
        };
      }
    }
  }
}

export {};
