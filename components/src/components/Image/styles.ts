import { createUseStyles } from 'react-jss';
import {
  BorderRadiuses,
  FontFamily,
  FontSizes,
  FontWeights,
  Transitions,
} from '../../constants/Constants';

import { fontWeight, isLeftToRight, textOverflowHidden } from '../../constants/Helpers';
const styles = {
  root: {
    display: 'block',
    height: '100%',
    overflow: 'hidden',
    position: 'relative'
  },
  '@keyframes animation': {
    '0%': { filter: 'blur(5px)', opacity: '0.5' },
    '100%': { filter: 'blur(0)', opacity: 1 },
  },
  image: {
    display: 'block',
    '&.default': {
      width: 'auto',
      height: 'auto',
      maxWidth: '100%',
      maxHeight: '100%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      userSelect: 'none',
      objectFit: 'cover',
    },
    '&.svg': {
      width: '100%',
    },
    '&.placeholder': {
      animation: `$animation ${Transitions.Default} ease-in-out`,
    }
  },
};
export default createUseStyles(styles, { name: 'photo-card' });
