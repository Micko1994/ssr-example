import { BreakPoints } from '../configs/jss';

export const mediaQuery = (breakPoint: BreakPoints): string => `@media screen and (max-width: ${breakPoint}px)`;

export const isLeftToRight = (isLeft = true): string => `[dir=${isLeft ? 'ltr' : 'rtl'}] & `;

export const canHover = (isHover = true): string => `@media (hover: ${isHover ? 'hover' : 'none'})`;

export const textOverflowHidden = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
};

export function fontWeight(fontWeight: number) {
  return {
    fontWeight: fontWeight,
  };
}
