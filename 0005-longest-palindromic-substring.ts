function longestPalindrome(s: string): string {
  let result = "";
  const isValid = (a) => a === a.split("").reverse().join("");
  for (let i = 0; i < s.length - result.length; i++) {
    for (let j = i + result.length + 1; j <= s.length; j++) {
      const a = s.substring(i, j);
      if (isValid(a) && a.length > result.length) {
        result = a;
      }
    }
  }
  return result;
}
