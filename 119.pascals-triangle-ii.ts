/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
  const A = new Array<number>(rowIndex + 1).fill(0);
  A[0] = 1;
  for (let i = 1; i < rowIndex + 1; i++) {
      for (let j = i; j > 0; j--) {
          A[j] += A[j - 1];
      }
  }
  return A;
};
// @lc code=end

