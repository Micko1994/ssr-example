import isIOS from './isIOS';
import isSafari from './isSafari';
import { GetSourceFormatType } from './types';

const getSourceFormat: GetSourceFormatType = (format = 'png') => (isIOS || isSafari ? format : 'webp');

export default getSourceFormat;
