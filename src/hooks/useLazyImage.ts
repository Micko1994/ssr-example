/* eslint-disable consistent-return */
/* eslint-disable sonarjs/cognitive-complexity */
// TODO fix this eslint error
import { useEffect } from 'react';

import getImageSource from '../utils/getImageSource';

// import { UseLazyImageProps } from './types';

function useLazyImage({
  isSVG,
  imageRef,
  imageSrc,
  imagePlaceholder,
  gifPlaceholder,
  setImageSrc,
  isGIF,
  params,
  breakpoint,
}) {
  useEffect(() => {
    if (!isSVG && imageRef && (imageSrc === imagePlaceholder || imageSrc === gifPlaceholder)) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.intersectionRatio > 0 || entry.isIntersecting) {
              setImageSrc(
                isGIF
                  ? `${getImageSource({ ...params, r: breakpoint, type: null })}`
                  : `${getImageSource({
                      ...params,
                      r: { width: breakpoint, height: breakpoint },
                    })}&q=75`,
              );
            }
          });
        },
        { threshold: [0.5, 0.5, 0.75, 1] },
      );
      observer.observe(imageRef);
      return () => {
        if (observer && observer.unobserve) {
          observer.unobserve(imageRef);
        }
      };
    }
  }, [
    imageRef,
    imageSrc,
    gifPlaceholder,
    imagePlaceholder,
    isSVG,
    isGIF,
    setImageSrc,
    params,
    breakpoint,
  ]);
}

export default useLazyImage;
