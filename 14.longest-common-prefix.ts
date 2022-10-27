/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let n = 0;
  let isPrefix = true;

  while (isPrefix !== false && n !== strs[0].length) {
    let prefix = strs[0][n];
    for (let i = 1; i < strs.length; i++) {
      if(prefix !== strs[i][n]) {
        isPrefix = false;
      }
    }
    n++;
  }

  if(isPrefix) return strs[0]

  return strs[0].slice(0, n-1);
};
// @lc code=end

