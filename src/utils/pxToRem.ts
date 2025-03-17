/**
 * Converte Pixel to rem
 * @param Pixel - Pixel value to be converted
 * @returns The converted rem value
 */

export function pxTorem(pixels: number): string {
  return `${pixels / 16} rem`
}
