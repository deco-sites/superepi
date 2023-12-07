export default function calcOFF(previous: number, now: number) {
  return ((1 - (now / previous)) * 100).toFixed(0);
};