import IS_BROWSER from './isBrowser';
import operatingSystemEnum from './operatingSystemEnum';

const getMobileOperatingSystem = (os: string | null) => {
  if (os) {
    return os;
  }
  if (!IS_BROWSER || typeof window !== 'object' || !window.navigator) {
    return undefined;
  }
  const userAgent = navigator.userAgent || navigator.vendor;
  if (/windows phone/i.test(userAgent)) {
    return operatingSystemEnum.WindowsPhone;
  }

  if (/android/i.test(userAgent)) {
    return operatingSystemEnum.Android;
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return operatingSystemEnum.IOS;
  }

  return undefined;
};

export default getMobileOperatingSystem;
