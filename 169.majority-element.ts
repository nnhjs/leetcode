/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  const l = nums.length;
  const obj: {
    [index: string]: number;
  } = {}
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    obj[n] = obj[n] ? obj[n] + 1 : 1;
    if(obj[n] >= Math.floor(l/2 +1)) {
      return n;
    }
  }
  return 0
};
// @lc code=end

