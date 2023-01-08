/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let res = "";
  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) {
      sum += Number(a[i]);
      i--;
    }
    if (j >= 0) {
      sum += Number(b[j]);
      j--;
    }
    res = (sum % 2) + res;
    carry = Math.floor(sum / 2);
  }
  if (carry) {
    res = carry + res;
  }
  return res;
};
// @lc code=end

