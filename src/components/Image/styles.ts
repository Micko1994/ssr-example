/* eslint-disable sonarjs/no-duplicate-string */
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
    paddingTop: '100%',
    position: 'relative',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    '&:hover': {
      '&:before': {
        opacity: 1,
      },
      '& > $link': {
        '&:before': {
          opacity: 1,
        },
      },
      '& $authorTitleHolder': {
        opacity: 1,
      },
      '& $heartIcon': {
        display: 'inline-block',
      },
    },
  },
  link: {
    display: 'block',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    fontSize: 0,
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      opacity: 0,
      transition: `opacity ${Transitions.Default} ease-in-out`,
      transform: 'translate3d(0, 0, 0)',
      pointerEvents: 'none',
    },
    '& > picture': {
      display: 'block',
      width: '100%',
      height: '100%',
      animation: `$imageAnimation 0.7s ease-in-out forwards`,
    },
  },
  '@keyframes imageAnimation': {
    '0%': { filter: 'blur(5px)' },
    '100%': { filter: 'blur(0)' },
  },
  imagePlaceHolder: {
    display: 'block',
    minWidth: '100%',
    minHeight: '100%',
    width: '100%',
    height: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    userSelect: 'none',
    filter: 'blur(5px)',
    opacity: '0.5',
  },
  image: {
    display: 'block',
    width: '100%',
  }
};
export default createUseStyles(styles, { name: 'photo-card' });