import * as utils from '@/utils/utils'

describe('range', () => {
  test('should return correct range of numbers', () => {
    expect(utils.range(3, 5)).toEqual([3, 4, 5])
    expect(utils.range(1, 2)).toEqual([1, 2])
    expect(utils.range(6, 10)).toEqual([6, 7, 8, 9, 10])
  })

  test('should throw order error', () => {
    const wrapper = (): void => {
      utils.range(5, 3)
    }

    expect(wrapper).toThrowError(/^The first argument must be smaller than the second arg.$/)
  })

  test('should throw equality error', () => {
    const wrapper = (): void => {
      utils.range(3, 3)
    }

    expect(wrapper).toThrowError(/^Both of the given arguments must not be identical to each other.$/)
  })
})

describe('oneOf', () => {
  const validator = (keys: string[], value: string): boolean => utils.oneOf(keys)(value)

  test('should return true', () => {
    expect(validator(['fuga'], 'fuga')).toBe(true)
    expect(validator(['fuga', 'hoge'], 'hoge')).toBe(true)
    expect(validator(['fuga', 'hoge', 'piyo'], 'hoge')).toBe(true)
  })

  test('should return false', () => {
    expect(validator(['fuga'], 'hoge')).toBe(false)
    expect(validator(['fuga', 'hoge'], 'piyo')).toBe(false)
    expect(validator(['fuga', 'hoge', 'piyo'], 'poyo')).toBe(false)
  })
})
