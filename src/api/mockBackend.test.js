import { mockEnergyAPI } from './mockBackend'

describe('mockEnergyAPI', () => {
  test('getHistoricalData returns valid data', async () => {
    const data = await mockEnergyAPI.getHistoricalData()

    expect(Array.isArray(data)).toBe(true)
    expect(data.length).toBe(24)

    data.forEach(point => {
      expect(point).toHaveProperty('time')
      expect(point).toHaveProperty('consumption')
      expect(point).toHaveProperty('renewable')
      expect(typeof point.consumption).toBe('number')
      expect(typeof point.renewable).toBe('number')
      expect(point.consumption).toBeGreaterThan(0)
      expect(point.renewable).toBeGreaterThan(0)
    })
  })

  test('getStatistics returns valid statistics', async () => {
    const stats = await mockEnergyAPI.getStatistics()

    expect(stats).toHaveProperty('current')
    expect(stats).toHaveProperty('dailyAverage')
    expect(stats).toHaveProperty('peakLoad')
    expect(stats).toHaveProperty('efficiency')

    expect(typeof stats.current).toBe('number')
    expect(typeof stats.dailyAverage).toBe('number')
    expect(typeof stats.peakLoad).toBe('number')
    expect(typeof stats.efficiency).toBe('number')

    expect(stats.current).toBeGreaterThan(0)
    expect(stats.efficiency).toBeGreaterThan(0)
    expect(stats.efficiency).toBeLessThanOrEqual(100)
  })

  test('getForecast returns valid forecast data', async () => {
    const forecast = await mockEnergyAPI.getForecast()

    expect(Array.isArray(forecast)).toBe(true)
    expect(forecast.length).toBe(12)

    forecast.forEach(point => {
      expect(point).toHaveProperty('time')
      expect(point).toHaveProperty('forecast')
      expect(point).toHaveProperty('upper')
      expect(point).toHaveProperty('lower')

      expect(point.upper).toBeGreaterThan(point.forecast)
      expect(point.forecast).toBeGreaterThan(point.lower)
    })
  })

  test('getSensorData returns valid sensor data', async () => {
    const sensorData = await mockEnergyAPI.getSensorData()

    expect(sensorData).toHaveProperty('temperature')
    expect(sensorData).toHaveProperty('humidity')
    expect(sensorData).toHaveProperty('solarOutput')
    expect(sensorData).toHaveProperty('windOutput')
    expect(sensorData).toHaveProperty('timestamp')

    expect(typeof sensorData.temperature).toBe('number')
    expect(typeof sensorData.humidity).toBe('number')
    expect(sensorData.solarOutput).toBeGreaterThan(0)
    expect(sensorData.windOutput).toBeGreaterThan(0)
  })
})
