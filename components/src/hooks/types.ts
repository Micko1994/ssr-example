import { SetStateAction, Dispatch } from 'react';
import getSourceFormat from '../utils/getSourceFormat';
import { ActionTypes } from '../utils/types';

export type IUseLazyImageProps = {
  isSVG?: boolean,
  imageRef?: any,
  imageSrc?: string,
  imagePlaceholder?: string,
  gifPlaceholder?: string,
  setImageSrc: Dispatch<SetStateAction<string | undefined>>,
  isGIF?: boolean,
  params?: any,
  breakpoint: number,
}

export type IUseImageConvertParams = {
  src: string,
  width?: number,
  height?: number,
  type?: string | null,
  action: ActionTypes.crop | ActionTypes.fixed | ActionTypes.min;
}
