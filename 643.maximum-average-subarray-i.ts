/*
 * @lc app=leetcode id=643 lang=typescript
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
function findMaxAverage(nums: number[], k: number): number {
  let sumKNumbersContiguous: number = 0;
  for (let i = 0; i < k; i++) {
    sumKNumbersContiguous += nums[i]
  }
  let max: number = sumKNumbersContiguous;

  for (let i = k; i < nums.length; i++) {
    sumKNumbersContiguous = sumKNumbersContiguous + nums[i] - nums[i-k]

    if (sumKNumbersContiguous > max) {
      max = sumKNumbersContiguous;
    }

  }

  return +(max/k).toFixed(5)
};
// @lc code=end

