export function convertTemperature(unit: string, kelvin: number): number {
  if (unit === 'c') {
    return Math.floor(kelvin - 273.15);
  } else if (unit === 'f') {
    return Math.floor((kelvin - 273.15) * 9/5 + 32);
  } else {
    return 0
  }
}