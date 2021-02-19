import { GetImageSource, ActionTypes } from './types';

const getImageSource: GetImageSource = ({
  src,
  action = null,
  r = 0,
  type = null,
}) => {
  if (src.match(/^((http|https):\/\/)?cdn\d+\.picsart\.com\//)) {
    const params: any[] = [];
    let resolution = r;
    let to = action;
    if (typeof r === 'object') {
      to = action === ActionTypes.crop ? ActionTypes.crop : ActionTypes.fixed;
      const resolutionW = r.width || '-1';
      const resolutionH = r.height || '-1';
      resolution = `${resolutionW}x${resolutionH}`;
    }

    if (to) {
      params.push(`to=${to}`);
    }

    if (type) {
      params.push(`type=${type}`);
    }
    params.push(`r=${resolution}`);

    return `${src}${params.length ? `?${params.join('&')}` : ''}`;
  }
  return src;
};

export default getImageSource;
