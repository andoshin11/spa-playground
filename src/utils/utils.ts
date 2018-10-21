export const range = (min: number, max: number): number[] => {
  const nums: number[] = []
  for (let i = min; i <= max; i += 1) {
    nums.push(i)
  }
  return nums
}
