import { render, screen } from '@testing-library/react'
import Dashboard from './Dashboard'

describe('Dashboard', () => {
  const mockEnergyData = [
    { time: '10:00', consumption: 50, renewable: 15 },
    { time: '11:00', consumption: 55, renewable: 18 }
  ]

  const mockStatistics = {
    current: 55.5,
    currentChange: 5.2,
    dailyAverage: 50.3,
    dailyChange: -2.1,
    peakLoad: 75.8,
    peakChange: 3.5,
    efficiency: 85.2,
    efficiencyChange: 1.5
  }

  const mockForecast = [
    { time: '12:00', forecast: 60, upper: 65, lower: 55 },
    { time: '13:00', forecast: 62, upper: 67, lower: 57 }
  ]

  test('renders dashboard with all sections', () => {
    render(
      <Dashboard
        energyData={mockEnergyData}
        statistics={mockStatistics}
        forecast={mockForecast}
      />
    )

    expect(screen.getByText('📊 Историческое энергопотребление')).toBeInTheDocument()
    expect(screen.getByText('🔮 Прогноз энергопотребления')).toBeInTheDocument()
  })

  test('renders with empty data gracefully', () => {
    render(
      <Dashboard
        energyData={[]}
        statistics={null}
        forecast={[]}
      />
    )

    expect(screen.getByText('📊 Историческое энергопотребление')).toBeInTheDocument()
  })
})
