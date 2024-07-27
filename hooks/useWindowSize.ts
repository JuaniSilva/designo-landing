import { useEffect, useMemo, useState } from 'react';

export default function useWindowSize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  const device = useMemo<'desktop' | 'tablet' | 'mobile'>(
    () =>
      width >= 1024
        ? 'desktop'
        : width < 1024 && width >= 768
          ? 'tablet'
          : 'mobile',
    [width]
  );

  return { width, height, device };
}
