import { Ref } from 'react';
import { SetStateAction, Dispatch } from 'react';
import getSourceFormat from '../utils/getSourceFormat';
import { ActionTypes } from '../utils/types';


export type IUseLazyImageProps = {
  observableElementRef?: React.MutableRefObject<HTMLElement>,
  handleIntersect: () => void
  thresholdSteps: number,
  thresholdCount: number;
  isBrowser: boolean;
  // isSVG?: boolean,
  // setImageSrc: Dispatch<SetStateAction<string>>,
  // isGIF?: boolean,
  // params?: any,
  // breakpoint: number,
}

export type IUseImageConvertParams = {
  src: string,
  width?: number,
  height?: number,
  type?: string,
  action: ActionTypes.crop | ActionTypes.fixed | ActionTypes.min;
}
