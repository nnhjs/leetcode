/*
 * @lc app=leetcode id=628 lang=typescript
 *
 * [628] Maximum Product of Three Numbers
 */

// @lc code=start
function maximumProduct(nums: number[]): number {
  nums.sort((a,b) => b - a) 
  const l = nums.length
  const m1 = nums[0] * nums[1] * nums[2]
  const m2 = nums[0] * nums[l - 1] * nums[l - 2]
  return  m1 > m2 ? m1 : m2 
};
// @lc code=end

