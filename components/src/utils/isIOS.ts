import getMobileOperatingSystem from './getMobileOperatingSystem';
import operatingSystemEnum from './operatingSystemEnum';

const isIOS = getMobileOperatingSystem(null) === operatingSystemEnum.IOS;

export default isIOS;
