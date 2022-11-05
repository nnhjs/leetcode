/*
 * @lc app=leetcode id=661 lang=typescript
 *
 * [661] Image Smoother
 */

// @lc code=start
function imageSmoother(img: number[][]): number[][] {
  const M = img.length
  const N = img[0].length
  // @ts-ignore
  const imgSmoother: number[][] = new Array(M).fill(0).map(function () { return new Array(N).fill(0); });
  for (let m = 0; m < M; m++) {
    for (let n = 0; n < N; n++) {
      let sum = img[m][n];
      let count = 1;

      if(m - 1 >= 0) {
        count += 1
        sum += img[m-1][n]
        if(n - 1 >= 0) {
          count += 1
          sum += img[m-1][n-1]; 
        }
        if(n + 1 < N) {
          count += 1
          sum += img[m-1][n+1]; 
        }
      };

      if(m + 1 < M) {
        count += 1
        sum += img[m+1][n]
        if(n + 1 < N) {
          count += 1
          sum += img[m+1][n+1]
        }
        if(n - 1 >= 0) {
          count += 1
          sum += img[m+1][n-1]
        }
      };

      if(n + 1 < N) {
        count += 1
        sum += img[m][n+1]
      }

      if(n - 1 >= 0) {
        count += 1
        sum += img[m][n-1]
      }

      imgSmoother[m][n] = Math.floor(sum/count)
    }
  }
  return imgSmoother
};
// @lc code=end

