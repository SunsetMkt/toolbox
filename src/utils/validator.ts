import * as JOI from 'joi';

export const isUnixSecond = (num: string | number): boolean => {
  const scheme = JOI.string().pattern(/^[0-9]{10}$/);
  try {
    JOI.assert(num, scheme);
    return true;
  } catch (e) {
    return false;
  }
};

export const isMillisecond = (num: string | number): boolean => {
  const scheme = JOI.string().pattern(/^[0-9]{13}$/);
  try {
    JOI.assert(num, scheme);
    return true;
  } catch (e) {
    return false;
  }
};

export const isNumber = (num: string | number): boolean => {
  const scheme = JOI.string().pattern(/^[0-9]+$/);
  try {
    JOI.assert(num, scheme);
    return true;
  } catch (e) {
    return false;
  }
};
