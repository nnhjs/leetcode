/*
 * @lc app=leetcode id=231 lang=typescript
 *
 * [231] Power of Two
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
  while(n > 1) {
    if(n % 2 !== 0) return false;
    n = n / 2;
  }
  return n === 1;
};
// @lc code=end

