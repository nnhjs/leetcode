/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  const s = (+digits.join('') + 1).toString();
  const r: number[] = [];
  for (let i = 0; i < s.length; i++) {
    r[i] = +s[i];
  }
  return r;
};
// @lc code=end

