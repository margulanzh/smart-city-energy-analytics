import { render, screen } from '@testing-library/react'
import StatisticsCards from './StatisticsCards'

describe('StatisticsCards', () => {
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

  test('renders all statistic cards', () => {
    render(<StatisticsCards statistics={mockStatistics} />)

    expect(screen.getByText('Текущее потребление')).toBeInTheDocument()
    expect(screen.getByText('Среднее за сутки')).toBeInTheDocument()
    expect(screen.getByText('Пиковая нагрузка')).toBeInTheDocument()
    expect(screen.getByText('Эффективность')).toBeInTheDocument()
  })

  test('displays correct values', () => {
    render(<StatisticsCards statistics={mockStatistics} />)

    expect(screen.getByText('55.50 МВт')).toBeInTheDocument()
    expect(screen.getByText('50.30 МВт')).toBeInTheDocument()
    expect(screen.getByText('75.80 МВт')).toBeInTheDocument()
    expect(screen.getByText('85.2%')).toBeInTheDocument()
  })

  test('displays positive and negative changes correctly', () => {
    render(<StatisticsCards statistics={mockStatistics} />)

    const changes = screen.getAllByText(/↑|↓/)
    expect(changes.length).toBeGreaterThan(0)
  })

  test('renders null when no statistics provided', () => {
    const { container } = render(<StatisticsCards statistics={null} />)
    expect(container.firstChild).toBeNull()
  })
})
