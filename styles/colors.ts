import { CSSColor } from '@/models';
import { IAndroid_ripple } from './models';
import { isHexColor } from './utils';

const colors: Record<string, CSSColor> = {
  headerBg: '#351401',
  bg: '#3f2f25',
  detail: '#e2b497',
};

const android_ripple: IAndroid_ripple = color => ({
  android_ripple: {
    color: isHexColor(color) || colors.btnPrimaryRipple,
    borderless: false,
  },
});

export { colors, android_ripple };
