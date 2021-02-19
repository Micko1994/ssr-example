import { useMemo } from 'react';

import getSourceFormat  from '../utils/getSourceFormat';

import { ActionTypes } from '../utils/types';

import { IUseImageConvertParams } from './types';

const useImageConvertParams = ({
  src,
  width,
  height,
  type = getSourceFormat(),
  action = ActionTypes.crop,
}: IUseImageConvertParams) =>
  useMemo(
    () => ({
      src,
      action,
      r: {
        width,
        height,
      },
      type,
    }),
    [width, height, src, type, action],
  );

export default useImageConvertParams;
