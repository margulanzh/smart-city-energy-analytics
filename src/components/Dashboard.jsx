import React from 'react'
import EnergyChart from './EnergyChart'
import StatisticsCards from './StatisticsCards'
import ForecastChart from './ForecastChart'
import './Dashboard.css'

const Dashboard = ({ energyData, statistics, forecast }) => {
  return (
    <div className="dashboard">
      <StatisticsCards statistics={statistics} />

      <div className="chart-container">
        <h2>📊 Историческое энергопотребление</h2>
        <EnergyChart data={energyData} />
      </div>

      <div className="chart-container">
        <h2>🔮 Прогноз энергопотребления</h2>
        <ForecastChart data={forecast} />
      </div>
    </div>
  )
}

export default Dashboard
