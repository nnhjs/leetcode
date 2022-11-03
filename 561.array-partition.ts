/*
 * @lc app=leetcode id=561 lang=typescript
 *
 * [561] Array Partition
 */

// @lc code=start
function arrayPairSum(nums: number[]): number {
  const sortNums = nums.sort((a,b) => a-b);
  let result = 0;
  for (let i = 0; i < sortNums.length; i++) {
    if (i % 2 === 0) {
      result += sortNums[i]
    }
  }
  return result;
};
// @lc code=end

