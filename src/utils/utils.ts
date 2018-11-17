import { PropOptions } from 'vue'

export const range = (min: number, max: number): number[] => {
  const nums: number[] = []
  for (let i = min; i <= max; i += 1) {
    nums.push(i)
  }
  return nums
}

export const oneOf = (keys: string[]): PropOptions['validator'] => {
  return value => {
    return keys.indexOf(value) !== -1
  }
}
