'use client';

import { useEffect, type DependencyList, type RefObject } from 'react';

export function useCustomElementProps(
  ref: RefObject<HTMLElement | null>,
  tagName: string,
  props: Record<string, unknown>,
  deps: DependencyList,
): void {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const setup = () => {
      const el = ref.current;
      if (!el) return;
      Object.assign(el, props);
    };

    if (customElements.get(tagName)) {
      setup();
    } else {
      customElements.whenDefined(tagName).then(setup);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
