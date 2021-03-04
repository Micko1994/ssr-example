import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';

import classNames from 'classnames';
import getImageSource  from '../../utils/getImageSource';
import checkIsSvg from '../../utils/isSVG';

import useWindowSize from '../../hooks/useWindowSize';
import useLazyImage from '../../hooks/useLazyImage';
import useImageConvertParams from '../../hooks/useImageConvertParams';
import useBreakPoint from '../../hooks/useBreakPoint';

import { BreakPoints } from '../../configs/jss';

import usePhotoCardStyles from './styles';

import { ImageProps, MediaSources } from './types';
import { ActionTypes } from '../../utils/types';
import Source from './Source';
import useMount from '../../hooks/useMount';
import IS_BROWSER from '../../utils/isBrowser'


const defaultBreakPoints = {
  ExtraLarge: BreakPoints.ExtraLarge,
  Large: BreakPoints.Large,
  Medium: BreakPoints.Medium,
  Small: BreakPoints.Small
}

function ImagePlaceholder({
  className,
  alt,
  src,
  isGIF,
  width,
  height,
  media = defaultBreakPoints,
  action = ActionTypes.crop,
}: ImageProps) {
  const params = useImageConvertParams({ width, height, src, action });
  const breakpoint = useBreakPoint(useWindowSize()) || 'Medium';
  
  const isSVG = useMemo(() => checkIsSvg(src), [src]);

  const imageRef = useRef(null);
  const [isPlaceholder, setIsPlaceholder] = useState(!!IS_BROWSER);
  const [error, setError] = useState(false);

  useMount(() => {
    if(IS_BROWSER){
      setIsPlaceholder(false)
    }
  })

  const [imageSrc, setImageSrc] = useState(src)

  const onLoad = useCallback(() => {
      setIsPlaceholder(false);
  },[]);

  const onError = useCallback(() => setError(true), []);

  const handleIntersect = useCallback(() => {    
    setImageSrc(getImageSource({ ...params, r: isGIF ? media[breakpoint] : { width: media[breakpoint], height: media[breakpoint] } }))
  }, [])

  useLazyImage({
    observableElementRef: imageRef,
    handleIntersect,
    isBrowser: !IS_BROWSER && isPlaceholder
  });

  const { root, image } = usePhotoCardStyles();

  const mediaSources = useMemo<MediaSources>(
    () =>
      Object.entries(media).map(([bp, size]) => [
        size,
        `${getImageSource({ ...params, r: size })}`,
        bp,
      ]),
    [media, params],
  );

  if (isSVG) {
    const imgClassName = classNames(className, image, 'svg');
    return <img className={imgClassName} alt={alt} src={src} />;
  }

  const currentSource = error ? '/assets/images/nf.png' : imageSrc;

  return (
    isPlaceholder ? <div>Loading</div> :
    <picture className={classNames(root, className)}>
      {!isGIF && media && (
        <>
          {mediaSources.map(([size, source, bp], id: number) => (
            <Source
              breakpoint={breakpoint}
              currentSource={currentSource}
              imageRef={imageRef}
              onLoad={onLoad}
              onError={onError}
              source={source}
              bp={bp}
              size={size}
              type={params.type}
            />))}
        </>
      )}
      <img
        className={classNames(image, 'default', {
          'placeholder': isPlaceholder,
        })}
        ref={imageRef as any}
        src={currentSource}
        alt={alt}
        onLoad={onLoad}
        onError={onError}
      />
    </picture>
  );
}

export default ImagePlaceholder;
