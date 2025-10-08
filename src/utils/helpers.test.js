import { formatEnergy, calculatePercentageChange, isWithinRange, getConsumptionStatus } from './helpers'

describe('Utility Functions', () => {
  describe('formatEnergy', () => {
    test('formats energy value with default 2 decimals', () => {
      expect(formatEnergy(55.555)).toBe('55.56')
    })

    test('formats energy value with custom decimals', () => {
      expect(formatEnergy(55.555, 1)).toBe('55.6')
    })

    test('formats zero correctly', () => {
      expect(formatEnergy(0)).toBe('0.00')
    })
  })

  describe('calculatePercentageChange', () => {
    test('calculates positive percentage change', () => {
      expect(calculatePercentageChange(110, 100)).toBe(10)
    })

    test('calculates negative percentage change', () => {
      expect(calculatePercentageChange(90, 100)).toBe(-10)
    })

    test('handles zero previous value', () => {
      expect(calculatePercentageChange(50, 0)).toBe(0)
    })

    test('handles equal values', () => {
      expect(calculatePercentageChange(100, 100)).toBe(0)
    })
  })

  describe('isWithinRange', () => {
    test('returns true when value is within range', () => {
      expect(isWithinRange(50, 40, 60)).toBe(true)
    })

    test('returns true when value equals min', () => {
      expect(isWithinRange(40, 40, 60)).toBe(true)
    })

    test('returns true when value equals max', () => {
      expect(isWithinRange(60, 40, 60)).toBe(true)
    })

    test('returns false when value is below range', () => {
      expect(isWithinRange(30, 40, 60)).toBe(false)
    })

    test('returns false when value is above range', () => {
      expect(isWithinRange(70, 40, 60)).toBe(false)
    })
  })

  describe('getConsumptionStatus', () => {
    test('returns "low" for values below 40', () => {
      expect(getConsumptionStatus(35)).toBe('low')
    })

    test('returns "normal" for values between 40 and 70', () => {
      expect(getConsumptionStatus(50)).toBe('normal')
    })

    test('returns "high" for values above 70', () => {
      expect(getConsumptionStatus(75)).toBe('high')
    })

    test('returns "normal" for boundary value 40', () => {
      expect(getConsumptionStatus(40)).toBe('normal')
    })

    test('returns "normal" for boundary value 70', () => {
      expect(getConsumptionStatus(70)).toBe('normal')
    })
  })
})
