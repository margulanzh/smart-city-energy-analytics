/**
 * Mock Backend API for Smart City Energy Analytics
 * Simulates real-time energy consumption data
 */

// Helper function to generate random values within a range
const randomInRange = (min, max) => Math.random() * (max - min) + min

// Helper function to add noise to data
const addNoise = (value, noiseLevel = 0.1) => {
  return value * (1 + randomInRange(-noiseLevel, noiseLevel))
}

// Generate time labels for charts
const generateTimeLabels = (count, intervalMinutes = 60) => {
  const labels = []
  const now = new Date()

  for (let i = count - 1; i >= 0; i--) {
    const time = new Date(now.getTime() - i * intervalMinutes * 60 * 1000)
    labels.push(time.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }))
  }

  return labels
}

// Simulate energy consumption pattern (higher during day, lower at night)
const getEnergyPattern = (hour) => {
  // Base consumption
  const base = 45

  // Daily pattern: peak at 12:00 and 18:00, low at 4:00
  const dailyPattern = 20 * Math.sin(((hour - 6) / 24) * Math.PI * 2)
  const eveningPeak = hour >= 17 && hour <= 21 ? 15 : 0

  return base + dailyPattern + eveningPeak
}

// Mock API object
export const mockEnergyAPI = {
  /**
   * Get historical energy consumption data
   */
  getHistoricalData: async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))

    const dataPoints = 24
    const data = []
    const now = new Date()

    for (let i = dataPoints - 1; i >= 0; i--) {
      const time = new Date(now.getTime() - i * 60 * 60 * 1000)
      const hour = time.getHours()
      const baseConsumption = getEnergyPattern(hour)

      data.push({
        time: time.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        consumption: addNoise(baseConsumption, 0.15),
        renewable: addNoise(baseConsumption * 0.3, 0.2)
      })
    }

    return data
  },

  /**
   * Get current statistics
   */
  getStatistics: async () => {
    await new Promise(resolve => setTimeout(resolve, 300))

    const currentHour = new Date().getHours()
    const currentConsumption = getEnergyPattern(currentHour)

    return {
      current: addNoise(currentConsumption, 0.1),
      currentChange: randomInRange(-5, 10),
      dailyAverage: addNoise(50, 0.05),
      dailyChange: randomInRange(-3, 8),
      peakLoad: addNoise(75, 0.05),
      peakChange: randomInRange(-2, 5),
      efficiency: addNoise(85, 0.03),
      efficiencyChange: randomInRange(-1, 4)
    }
  },

  /**
   * Get forecast data for next hours
   */
  getForecast: async () => {
    await new Promise(resolve => setTimeout(resolve, 400))

    const forecastPoints = 12
    const data = []
    const now = new Date()

    for (let i = 1; i <= forecastPoints; i++) {
      const time = new Date(now.getTime() + i * 60 * 60 * 1000)
      const hour = time.getHours()
      const baseForecast = getEnergyPattern(hour)

      // Add some trend
      const trend = i * 0.5

      const forecast = baseForecast + trend

      data.push({
        time: time.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        forecast: addNoise(forecast, 0.05),
        upper: addNoise(forecast * 1.15, 0.05),
        lower: addNoise(forecast * 0.85, 0.05)
      })
    }

    return data
  },

  /**
   * Get real-time sensor data (for future use)
   */
  getSensorData: async () => {
    await new Promise(resolve => setTimeout(resolve, 200))

    return {
      temperature: addNoise(22, 0.1),
      humidity: addNoise(60, 0.1),
      solarOutput: randomInRange(10, 30),
      windOutput: randomInRange(5, 20),
      timestamp: new Date().toISOString()
    }
  }
}
