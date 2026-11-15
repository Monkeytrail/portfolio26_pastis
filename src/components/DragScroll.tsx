'use client';
import { useEffect } from 'react';

export function DragScroll({ selector }: { selector: string }) {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(selector);
    if (!el) return;

    let startX = 0;
    let scrollLeft = 0;
    let dragging = false;
    let moved = false;

    const onDown = (e: MouseEvent) => {
      dragging = true;
      moved = false;
      startX = e.clientX;
      scrollLeft = el.scrollLeft;
      el.style.scrollSnapType = 'none'; // disable snap while dragging
    };

    const onMove = (e: MouseEvent) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      el.scrollLeft = scrollLeft - dx;
    };

    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      // re-enable snap after one frame so the browser can settle
      requestAnimationFrame(() => { el.style.scrollSnapType = ''; });
    };

    // prevent card navigation if the mouse actually moved (was a drag, not a click)
    const onClick = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };

    el.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);  // window so drag works outside el
    window.addEventListener('mouseup', onUp);
    el.addEventListener('click', onClick, true);    // capture to beat link click

    return () => {
      el.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      el.removeEventListener('click', onClick, true);
    };
  }, [selector]);

  return null;
}
