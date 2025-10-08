import React from 'react'
import './StatisticsCards.css'

const StatisticsCards = ({ statistics }) => {
  if (!statistics) return null

  const cards = [
    {
      title: 'Текущее потребление',
      value: `${statistics.current.toFixed(2)} МВт`,
      icon: '⚡',
      color: '#667eea',
      change: statistics.currentChange
    },
    {
      title: 'Среднее за сутки',
      value: `${statistics.dailyAverage.toFixed(2)} МВт`,
      icon: '📈',
      color: '#764ba2',
      change: statistics.dailyChange
    },
    {
      title: 'Пиковая нагрузка',
      value: `${statistics.peakLoad.toFixed(2)} МВт`,
      icon: '🔥',
      color: '#f093fb',
      change: statistics.peakChange
    },
    {
      title: 'Эффективность',
      value: `${statistics.efficiency.toFixed(1)}%`,
      icon: '✨',
      color: '#4facfe',
      change: statistics.efficiencyChange
    }
  ]

  return (
    <div className="statistics-cards">
      {cards.map((card, index) => (
        <div key={index} className="stat-card" style={{ borderTop: `4px solid ${card.color}` }}>
          <div className="stat-icon" style={{ background: `${card.color}20` }}>
            {card.icon}
          </div>
          <div className="stat-content">
            <h3>{card.title}</h3>
            <p className="stat-value">{card.value}</p>
            <span className={`stat-change ${card.change >= 0 ? 'positive' : 'negative'}`}>
              {card.change >= 0 ? '↑' : '↓'} {Math.abs(card.change).toFixed(1)}%
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatisticsCards
