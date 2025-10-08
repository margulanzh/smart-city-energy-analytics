// Simple utility functions for Smart City Energy Analytics

/**
 * Format energy value to fixed decimal places
 * @param {number} value - Energy value in MW
 * @param {number} decimals - Number of decimal places
 * @returns {string} Formatted energy value
 */
export function formatEnergy(value, decimals = 2) {
  return value.toFixed(decimals)
}

/**
 * Calculate percentage change
 * @param {number} current - Current value
 * @param {number} previous - Previous value
 * @returns {number} Percentage change
 */
export function calculatePercentageChange(current, previous) {
  if (previous === 0) return 0
  return ((current - previous) / previous) * 100
}

/**
 * Check if value is within normal range
 * @param {number} value - Value to check
 * @param {number} min - Minimum threshold
 * @param {number} max - Maximum threshold
 * @returns {boolean} True if within range
 */
export function isWithinRange(value, min, max) {
  return value >= min && value <= max
}

/**
 * Get energy consumption status
 * @param {number} value - Current consumption in MW
 * @returns {string} Status: 'low', 'normal', or 'high'
 */
export function getConsumptionStatus(value) {
  if (value < 40) return 'low'
  if (value > 70) return 'high'
  return 'normal'
}
