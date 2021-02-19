import { useState, useMemo } from 'react';

import classNames from 'classnames';
import getImageSource  from '../../utils/getImageSource';
import isSvg from '../../utils/isSVG';

import useWindowSize from '../../hooks/useWindowSize';
import useLazyImage from '../../hooks/useLazyImage';
import useImageConvertParams from '../../hooks/useImageConvertParams';
import useBreakPoint from '../../hooks/useBreakPoint';

import { BreakPoints } from '../../configs/jss';

import usePhotoCardStyles from './styles';

import type { ImageProps, MediaSources } from './types';

function ImagePlaceholder({
  placeholderClassName,
  className,
  alt,
  placeholder,
  src,
  isGIF,
  width,
  height,
  media = BreakPoints,
  action,
}: ImageProps) {
  const params = useImageConvertParams({ width, height, src, action });
  const breakpoint = useBreakPoint(useWindowSize()) || 'Medium';

  const isSVG = useMemo(() => isSvg(src =''), [src]);
  const { gifPlaceholder, imagePlaceholder } = useMemo(
    () => ({
      gifPlaceholder: `${getImageSource({ ...params, r: 80, type: null })}`,
      imagePlaceholder: `${getImageSource({ ...params, r: { width: 40, height: 40 } })}&q=70`,
    }),
    [params],
  );
  const [imageRef, setImageRef] = useState();
  const [isPlaceholder, setIsPlaceholder] = useState(true);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState(() => {
    switch (true) {
      case !!placeholder:
        return placeholder;
      case isSVG:
        return src;
      case isGIF:
        return gifPlaceholder;
      default:
        return imagePlaceholder;
    }
  });

  const onLoad = () => {
    if (imageSrc !== imagePlaceholder && imageSrc !== gifPlaceholder) {
      setIsPlaceholder(false);
    }
  };

  const onError = () => setError(true);

  useLazyImage({
    isSVG,
    imageRef,
    imageSrc,
    imagePlaceholder,
    gifPlaceholder,
    setImageSrc,
    isGIF,
    params,
  // @ts-ignore
    breakpoint: media && media[breakpoint],
  });
  const { image, imagePlaceHolder } = usePhotoCardStyles();

  const mediaSources = useMemo<MediaSources>(
    () =>
      Object.entries(media).map(([bp, size]) => [
        size,
        `${getImageSource({ ...params, r: size })}&q=75`,
        bp,
      ]),
    [media, params],
  );

  if (isSVG) {
    const imgClassName = classNames(className, image);
    return <img className={imgClassName} alt={alt} src={src} />;
  }

  const currentSource = error ? '/assets/images/nf.png' : imageSrc;

  return (
    <picture>
      {!isGIF && media && (
        <>
          {mediaSources.map(([size, source, bp], id: number) => {
            const sourceProps =
              bp === breakpoint
                ? {
                    srcSet: currentSource,
                    'data-src': src,
                    ref: setImageRef as any,
                    onLoad,
                    onError,
                  }
                : {
                    srcSet: source,
                  };
            return (
              <source
                key={Number(size) + id}
                type={`image/${params.type}`}
            // @ts-ignore
                media={`(min-width: ${BreakPoints[bp]}px)`}
                {...sourceProps}
              />
            );
          })}
        </>
      )}
      <img
        data-src={src}
        className={classNames({
          [imagePlaceHolder]: isPlaceholder,
          [image]: !isPlaceholder,
        }, className, placeholderClassName)}
        ref={setImageRef as any}
        src={currentSource}
        alt={alt}
        onLoad={onLoad}
        onError={onError}
      />
    </picture>
  );
}

export default ImagePlaceholder;
