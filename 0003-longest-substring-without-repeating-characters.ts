function lengthOfLongestSubstring(s: string): number {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const mem = new Set();
    for (let j = i; j < s.length; j++) {
      const char = s[j];
      if (mem.has(char)) {
        break;
      }
      mem.add(char);
    }
    result = Math.max(result, mem.size);
  }
  return result;
}
