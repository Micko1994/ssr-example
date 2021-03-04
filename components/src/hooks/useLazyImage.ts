/* eslint-disable consistent-return */
// TODO fix this eslint error
import { useEffect, useMemo } from 'react';

import getImageSource from '../utils/getImageSource';

import { IUseLazyImageProps } from './types';

function buildThresholdList(numSteps: number, count: number) {
  let thresholds = [];

  for (let i=1; i <= count; i++) {
    let ratio = i/numSteps;
    thresholds.push(ratio);
  }

  return thresholds;
}

function useLazyImage({
  observableElementRef,
  handleIntersect,
  isBrowser,
  thresholdSteps = 10,
  thresholdCount = 2
}: IUseLazyImageProps) {

  useEffect(() => {
    
  if (!isBrowser) {
    return;
  }  

    const observableElementCurrent = observableElementRef && observableElementRef.current;
    // const threshold = useMemo(() => buildThresholdList(thresholdSteps, thresholdCount), [thresholdSteps, thresholdCount])

    const threshold = [0]

    if (observableElementCurrent) {
      
      const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.intersectionRatio > threshold[0] || entry.isIntersecting) {
            handleIntersect()
          }
        }),
        { threshold },
      );

      observer.observe(observableElementCurrent);

      return () => observer.unobserve(observableElementCurrent);
    }
  }, [
    observableElementRef,
  ]);
}

export default useLazyImage;
