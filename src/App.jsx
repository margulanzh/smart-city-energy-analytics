import React, { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard'
import { mockEnergyAPI } from './api/mockBackend'
import './App.css'

function App() {
  const [energyData, setEnergyData] = useState([])
  const [statistics, setStatistics] = useState(null)
  const [forecast, setForecast] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching data from backend
    const fetchData = async () => {
      setLoading(true)
      try {
        const [historyData, stats, forecastData] = await Promise.all([
          mockEnergyAPI.getHistoricalData(),
          mockEnergyAPI.getStatistics(),
          mockEnergyAPI.getForecast()
        ])

        setEnergyData(historyData)
        setStatistics(stats)
        setForecast(forecastData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    // Update data every 30 seconds
    const interval = setInterval(fetchData, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <h1>🏙️ Smart City Energy Analytics</h1>
        <p>Интеллектуальная система анализа энергопотребления</p>
      </header>

      {loading ? (
        <div className="loading">Loading data...</div>
      ) : (
        <Dashboard
          energyData={energyData}
          statistics={statistics}
          forecast={forecast}
        />
      )}
    </div>
  )
}

export default App
