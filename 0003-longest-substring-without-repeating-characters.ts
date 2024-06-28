function lengthOfLongestSubstring(s: string): number {
  let start = 0;
  let result = 0;
  let charIndex = {};
  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (charIndex[char] >= start) {
      start = charIndex[char] + 1;
    }
    charIndex[char] = end;
    result = Math.max(result, end - start + 1);
  }
  return result;
}
