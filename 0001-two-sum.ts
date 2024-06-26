function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const output = [i, nums.indexOf(target - num, i + 1)];
    if (output[1] !== -1) {
      return output;
    }
  }
  return [0, 0];
}
