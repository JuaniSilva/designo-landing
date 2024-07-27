import { useEffect, useMemo, useState } from 'react';

export default function useWindowSize() {
  const [width, setWidth] = useState<number | undefined>();
  const [height, setHeight] = useState<number | undefined>();

  useEffect(() => {
    if (!window) return;
    const onResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const device = useMemo<'desktop' | 'tablet' | 'mobile'>(() => {
    if (!width) return 'desktop';
    return width >= 1024
      ? 'desktop'
      : width < 1024 && width >= 768
        ? 'tablet'
        : 'mobile';
  }, [width]);

  return { width, height, device };
}
