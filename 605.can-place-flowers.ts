/*
 * @lc app=leetcode id=605 lang=typescript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if(flowerbed.length === 1 && flowerbed[0] === 0) return true;

  let plotsAcceptable = 0;
  if(flowerbed[0] === 0 && flowerbed[1] === 0) {
    plotsAcceptable += 1;
    flowerbed[0] = 1;
  }

  if(flowerbed[flowerbed.length - 1] === 0 && flowerbed[flowerbed.length - 2] === 0) {
    plotsAcceptable += 1;
    flowerbed[flowerbed.length - 1] = 1;
  }

  for (let i = 1; i < flowerbed.length - 1 ; i++) {
    if ((flowerbed[i-1] + flowerbed[i] + flowerbed[i+1]) === 0 ) {
      flowerbed[i] = 1;
      plotsAcceptable += 1;
    }
  }

  return plotsAcceptable >= n;
};
// @lc code=end

