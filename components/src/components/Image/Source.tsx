import { BreakPoints } from '../../configs/jss';
import React, { Ref } from 'react';

export interface ISourceType {
  breakpoint: string,
  currentSource?: string,
  imageRef: Ref<HTMLElement>,
  onLoad?: () => void,
  onError?: () => void,
  source: string,
  bp: string,
  size: number,
  type: string
}

const Source = ({
  breakpoint,
  currentSource,
  imageRef,
  onLoad = () => {},
  onError = () => {},
  source,
  bp,
  size,
  type
}: ISourceType) => {
  const sourceProps =
    bp === breakpoint
      ? {
        srcSet: currentSource,
        ref: imageRef,
        onLoad,
        onError,
      }
      : {
        srcSet: source,
      };      

  return (
    <source
      type={`image/${type}`}
      media={`(min-width: ${BreakPoints[bp]}px)`}
      {...sourceProps}
    />
  );
}

export default Source
