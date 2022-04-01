import { useRef, useEffect } from 'react';

export function useHorizontalScroll() {
  const elementRef = useRef();
  useEffect(() => {
    const el = elementRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth',
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);
  return elementRef;
}
