/*
 * @lc app=leetcode id=674 lang=typescript
 *
 * [674] Longest Continuous Increasing Subsequence
 */

// @lc code=start
function findLengthOfLCIS(nums: number[]): number {
  let longest_increasing_subsequence = 0;
  let current_increasing_subsequence = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      current_increasing_subsequence++;
    } else {
      longest_increasing_subsequence = Math.max(
        longest_increasing_subsequence,
        current_increasing_subsequence
      );
      current_increasing_subsequence = 1;
    }
  }
  longest_increasing_subsequence = Math.max(
    longest_increasing_subsequence,
    current_increasing_subsequence
  );
  return longest_increasing_subsequence
};
// @lc code=end

