import { useState } from 'react';

import IS_BROWSER from '../utils/isBrowser';

import useMount from './useMount';

const getSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

const defaultState = {
  width: 0,
  height: 0,
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(IS_BROWSER ? getSize : defaultState);

  useMount(() => {
    const handleResize = () => setWindowSize(getSize());
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  return windowSize;
};

export default useWindowSize;
