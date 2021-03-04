import { ActionTypes } from '../../utils/types';

export type ImageProps = {
  alt: string;
  placeholder?: string;
  src: string;
  isGIF?: boolean;
  width?: number;
  height?: number;
  placeholderClassName?: string;
  className?: string;
  media?: {[key: string]: number;};
  action?: ActionTypes.crop | ActionTypes.fixed | ActionTypes.min;
};

export type MediaSources = [number, string, string][];
