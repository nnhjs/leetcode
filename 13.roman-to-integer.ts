/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start

const romanNumeral = {
  'I' : 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

function romanToInt(s: string): number {
  let result = 0;
  const l = s.length;
  for (let i = 0; i < l - 1; i++) {
    if(romanNumeral[s[i]] < romanNumeral[s[i+1]]) {
      result -= romanNumeral[s[i]]
    } else {
      result += romanNumeral[s[i]]
    }
  }
  result += romanNumeral[s[l-1]]
  return result;
};
// @lc code=end

