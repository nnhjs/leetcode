/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x: number): boolean {
  return x.toString() === x.toString().split('').reverse().join('');
};
// @lc code=end

