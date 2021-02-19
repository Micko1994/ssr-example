import { useEffect, useState } from 'react';

import { BreakPoints } from '../configs/jss';

const useBreakPoint = ({ width  }: { width: number }) => {
  const [breakpoint, setBreakPoint] = useState<string>();

  useEffect(() => {
    switch (!!width) {
      case width >= BreakPoints.ExtraLarge:
        setBreakPoint('ExtraLarge');
        break;
      case width < BreakPoints.ExtraLarge && width >= BreakPoints.Large:
        setBreakPoint('Large');
        break;
      case width < BreakPoints.Large && width >= BreakPoints.Medium:
        setBreakPoint('Medium');
        break;
      case width < BreakPoints.Medium && width >= 576:
        setBreakPoint('Small');
        break;
      case width < 576:
        setBreakPoint('Small');
        break;
      default:
        break;
    }
  }, [width]);

  return breakpoint;
};

export default useBreakPoint;
