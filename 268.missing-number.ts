/*
 * @lc app=leetcode id=268 lang=typescript
 *
 * [268] Missing Number
 */

// @lc code=start
function missingNumber(nums: number[]): number {
  let missingNumber = 0;
  for (let i = 0; i < nums.length; i++) {
    missingNumber += i + 1 - nums[i];
  }
  return missingNumber
};
// @lc code=end

