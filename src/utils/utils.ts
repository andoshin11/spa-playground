import { PropOptions } from 'vue'

export const range = (min: number, max: number): number[] => {
  if (min > max) {
    throw new Error('The first argument must be smaller than the second arg.')
  }

  if (min == max) {
    throw new Error('Both of the given arguments must not be identical to each other.')
  }

  const nums: number[] = []
  for (let i = min; i <= max; i += 1) {
    nums.push(i)
  }
  return nums
}

export const oneOf = (keys: string[]): PropOptions['validator'] => {
  return (value: string) => {
    return keys.indexOf(value) !== -1
  }
}
