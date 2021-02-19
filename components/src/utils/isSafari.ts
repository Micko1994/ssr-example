import IS_BROWSER from './isBrowser';

const isSafari = IS_BROWSER && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

export default isSafari;
