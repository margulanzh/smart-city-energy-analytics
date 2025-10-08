# 📚 Пошаговое руководство: Создание проекта Smart City Energy Analytics

## Содержание
1. [Подготовка окружения](#1-подготовка-окружения)
2. [Создание структуры проекта](#2-создание-структуры-проекта)
3. [Настройка зависимостей](#3-настройка-зависимостей)
4. [Разработка компонентов](#4-разработка-компонентов)
5. [Создание Mock Backend](#5-создание-mock-backend)
6. [Настройка тестирования](#6-настройка-тестирования)
7. [Инициализация Git](#7-инициализация-git)
8. [Настройка GitHub](#8-настройка-github)
9. [Настройка CI/CD](#9-настройка-cicd)
10. [Запуск и тестирование](#10-запуск-и-тестирование)

---

## 1. Подготовка окружения

### Шаг 1.1: Установка Node.js

**Что делаем**: Устанавливаем Node.js - среду выполнения JavaScript

**Зачем**: Node.js необходим для запуска npm (менеджер пакетов) и инструментов разработки

**Как**:
1. Перейдите на https://nodejs.org/
2. Скачайте LTS версию (рекомендуется версия 18.x или выше)
3. Установите Node.js, следуя инструкциям установщика
4. Проверьте установку:
```bash
node --version  # Должно показать v18.x.x или выше
npm --version   # Должно показать 8.x.x или выше
```

### Шаг 1.2: Установка Git

**Что делаем**: Устанавливаем систему контроля версий Git

**Зачем**: Git необходим для версионирования кода и работы с GitHub

**Как**:
1. Скачайте Git с https://git-scm.com/
2. Установите Git
3. Проверьте установку:
```bash
git --version  # Должно показать версию Git
```

4. Настройте Git (если еще не настраивали):
```bash
git config --global user.name "Ваше Имя"
git config --global user.email "your.email@example.com"
```

### Шаг 1.3: Выбор редактора кода

**Рекомендация**: Visual Studio Code (VS Code)

**Как установить**:
1. Скачайте с https://code.visualstudio.com/
2. Установите редактор
3. Установите рекомендуемые расширения:
   - ES7+ React/Redux/React-Native snippets
   - ESLint
   - Prettier - Code formatter
   - GitLens

---

## 2. Создание структуры проекта

### Шаг 2.1: Создание директории проекта

**Что делаем**: Создаем папку для проекта

**Как**:
```bash
# Windows
mkdir "smart city"
cd "smart city"

# macOS/Linux
mkdir smart-city
cd smart-city
```

### Шаг 2.2: Создание package.json

**Что делаем**: Создаем файл с метаданными и зависимостями проекта

**Зачем**: package.json описывает проект, его зависимости и команды

**Как**: Создайте файл `package.json` со следующим содержимым:

```json
{
  "name": "smart-city-energy-analytics",
  "version": "1.0.0",
  "description": "Intelligent Energy Consumption Analysis System for Smart City",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "jest",
    "test:coverage": "jest --coverage",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "recharts": "^2.10.3",
    "date-fns": "^3.0.6"
  },
  "devDependencies": {
    "@babel/preset-env": "^7.23.6",
    "@babel/preset-react": "^7.23.3",
    "@testing-library/react": "^14.1.2",
    "@testing-library/jest-dom": "^6.1.5",
    "@vitejs/plugin-react": "^4.2.1",
    "babel-jest": "^29.7.0",
    "eslint": "^8.55.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "identity-obj-proxy": "^3.0.0",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "vite": "^5.0.8"
  },
  "keywords": [
    "smart-city",
    "energy-analytics",
    "dashboard"
  ],
  "license": "MIT"
}
```

**Объяснение разделов**:
- `name`: Имя проекта
- `scripts`: Команды для запуска проекта (`npm run dev`, `npm test` и т.д.)
- `dependencies`: Библиотеки необходимые для работы приложения
- `devDependencies`: Инструменты для разработки (тестирование, сборка)

### Шаг 2.3: Установка зависимостей

**Что делаем**: Загружаем все необходимые пакеты

**Как**:
```bash
npm install
```

**Что происходит**: npm загружает все библиотеки из package.json в папку `node_modules`

**Время**: 2-5 минут в зависимости от скорости интернета

---

## 3. Настройка зависимостей

### Шаг 3.1: Конфигурация Vite

**Что делаем**: Настраиваем сборщик проекта

**Создайте файл** `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
```

**Объяснение**:
- `plugins: [react()]`: Добавляет поддержку React
- `server.port: 3000`: Приложение будет на http://localhost:3000
- `server.open: true`: Автоматически откроет браузер
- `build.outDir: 'dist'`: Папка для production сборки

### Шаг 3.2: Конфигурация Jest

**Что делаем**: Настраиваем фреймворк для тестирования

**Создайте файл** `jest.config.js`:

```javascript
export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest', {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }],
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/main.jsx',
    '!src/setupTests.js'
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  }
}
```

**Объяснение**:
- `testEnvironment: 'jsdom'`: Симулирует браузерное окружение
- `setupFilesAfterEnv`: Файл с настройками тестов
- `moduleNameMapper`: Мокирует CSS файлы в тестах
- `coverageThreshold`: Минимальное покрытие тестами (70%)

### Шаг 3.3: Конфигурация Babel

**Что делаем**: Настраиваем транспайлер JavaScript

**Создайте файл** `.babelrc`:

```json
{
  "presets": [
    ["@babel/preset-env", { "targets": { "node": "current" } }],
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}
```

### Шаг 3.4: Создание .gitignore

**Что делаем**: Указываем какие файлы не добавлять в Git

**Создайте файл** `.gitignore`:

```
# Dependencies
node_modules/

# Testing
/coverage

# Production
/dist
/build

# Misc
.DS_Store
.env.local

# Logs
npm-debug.log*

# IDE
.vscode/
.idea/
```

**Зачем**: Избегаем добавления в Git больших файлов и временных данных

---

## 4. Разработка компонентов

### Шаг 4.1: Создание index.html

**Что делаем**: Создаем основной HTML файл

**Создайте файл** `index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Smart City Energy Analytics</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

**Объяснение**:
- `<div id="root">`: Контейнер для React приложения
- `<script type="module">`: Подключение главного JavaScript файла

### Шаг 4.2: Создание точки входа

**Что делаем**: Создаем главный файл приложения

**Создайте папку** `src/` и файл `src/main.jsx`:

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**Объяснение**:
- Импортируем React и ReactDOM
- Находим элемент с id="root"
- Рендерим компонент App внутри StrictMode (помогает найти проблемы)

### Шаг 4.3: Создание глобальных стилей

**Создайте файл** `src/index.css`:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen';
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

#root {
  max-width: 1400px;
  margin: 0 auto;
}
```

**Объяснение**:
- Сбрасываем отступы браузера по умолчанию
- Добавляем красивый градиентный фон
- Ограничиваем максимальную ширину контента

### Шаг 4.4: Создание главного компонента App

**Создайте файл** `src/App.jsx`:

```javascript
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
    const interval = setInterval(fetchData, 30000) // Обновление каждые 30 секунд

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
```

**Объяснение кода**:
1. **useState**: Создаем состояния для данных
2. **useEffect**: Загружаем данные при монтировании компонента
3. **Promise.all**: Загружаем все данные параллельно
4. **setInterval**: Обновляем данные каждые 30 секунд
5. **loading**: Показываем индикатор загрузки

**Создайте файл** `src/App.css`:

```css
.app {
  width: 100%;
}

.app-header {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  text-align: center;
}

.app-header h1 {
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.loading {
  background: white;
  padding: 60px;
  border-radius: 15px;
  text-align: center;
  font-size: 1.5rem;
  color: #667eea;
}
```

### Шаг 4.5: Создание компонента Dashboard

**Создайте папку** `src/components/`

**Создайте файл** `src/components/Dashboard.jsx`:

```javascript
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
```

**Объяснение**: Dashboard объединяет все части дашборда - статистику и графики

### Шаг 4.6: Создание компонента StatisticsCards

**Создайте файл** `src/components/StatisticsCards.jsx`:

```javascript
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
        <div key={index} className="stat-card"
             style={{ borderTop: `4px solid ${card.color}` }}>
          <div className="stat-icon"
               style={{ background: `${card.color}20` }}>
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
```

**Объяснение**: Компонент отображает 4 карточки со статистикой (текущее потребление, среднее, пик, эффективность)

(Продолжение на следующей странице...)

### Шаг 4.7: Создание графиков

**Создайте файл** `src/components/EnergyChart.jsx`:

```javascript
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const EnergyChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis label={{ value: 'МВт', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="consumption" stroke="#667eea"
              strokeWidth={2} name="Потребление" />
        <Line type="monotone" dataKey="renewable" stroke="#22c55e"
              strokeWidth={2} name="Возобновляемая энергия" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default EnergyChart
```

**Объяснение**: Использует библиотеку Recharts для отображения линейного графика энергопотребления

---

## 5. Создание Mock Backend

### Шаг 5.1: Создание API симулятора

**Создайте папку** `src/api/`

**Создайте файл** `src/api/mockBackend.js`:

```javascript
// Helper функция для генерации случайных чисел
const randomInRange = (min, max) => Math.random() * (max - min) + min

// Симуляция паттерна энергопотребления
const getEnergyPattern = (hour) => {
  const base = 45
  const dailyPattern = 20 * Math.sin(((hour - 6) / 24) * Math.PI * 2)
  const eveningPeak = hour >= 17 && hour <= 21 ? 15 : 0
  return base + dailyPattern + eveningPeak
}

export const mockEnergyAPI = {
  // Получить исторические данные
  getHistoricalData: async () => {
    await new Promise(resolve => setTimeout(resolve, 500))

    const data = []
    const now = new Date()

    for (let i = 23; i >= 0; i--) {
      const time = new Date(now.getTime() - i * 60 * 60 * 1000)
      const hour = time.getHours()
      const consumption = getEnergyPattern(hour)

      data.push({
        time: time.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        consumption: consumption * (1 + randomInRange(-0.15, 0.15)),
        renewable: consumption * 0.3 * (1 + randomInRange(-0.2, 0.2))
      })
    }

    return data
  },

  // Получить статистику
  getStatistics: async () => {
    await new Promise(resolve => setTimeout(resolve, 300))

    return {
      current: randomInRange(45, 65),
      currentChange: randomInRange(-5, 10),
      dailyAverage: randomInRange(48, 52),
      dailyChange: randomInRange(-3, 8),
      peakLoad: randomInRange(72, 78),
      peakChange: randomInRange(-2, 5),
      efficiency: randomInRange(82, 88),
      efficiencyChange: randomInRange(-1, 4)
    }
  },

  // Получить прогноз
  getForecast: async () => {
    await new Promise(resolve => setTimeout(resolve, 400))

    const data = []
    const now = new Date()

    for (let i = 1; i <= 12; i++) {
      const time = new Date(now.getTime() + i * 60 * 60 * 1000)
      const hour = time.getHours()
      const forecast = getEnergyPattern(hour) + i * 0.5

      data.push({
        time: time.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        forecast: forecast,
        upper: forecast * 1.15,
        lower: forecast * 0.85
      })
    }

    return data
  }
}
```

**Объяснение**:
- **getHistoricalData**: Генерирует 24 точки данных за последние 24 часа
- **getStatistics**: Генерирует текущую статистику
- **getForecast**: Генерирует прогноз на 12 часов вперед
- **Паттерн потребления**: Симулирует реалистичное потребление (выше днем, ниже ночью)

---

## 6. Настройка тестирования

### Шаг 6.1: Создание файла настройки тестов

**Создайте файл** `src/setupTests.js`:

```javascript
import '@testing-library/jest-dom'
```

### Шаг 6.2: Создание тестов для компонентов

**Создайте файл** `src/components/StatisticsCards.test.jsx`:

```javascript
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
  })

  test('displays correct values', () => {
    render(<StatisticsCards statistics={mockStatistics} />)
    expect(screen.getByText('55.50 МВт')).toBeInTheDocument()
  })
})
```

**Объяснение тестов**:
- **render**: Рендерит компонент
- **screen**: Поиск элементов на экране
- **expect**: Проверка условий (assertions)
- **toBeInTheDocument**: Проверка что элемент присутствует

---

## 7. Инициализация Git

### Шаг 7.1: Инициализация репозитория

**Что делаем**: Создаем локальный Git репозиторий

**Как**:
```bash
git init
```

**Что происходит**: Создается папка `.git` с историей изменений

### Шаг 7.2: Первый коммит

**Что делаем**: Сохраняем текущее состояние проекта

**Как**:
```bash
# Добавляем все файлы в staging area
git add .

# Создаем коммит
git commit -m "Initial commit: Smart City Energy Analytics project

- Setup React project with Vite
- Create dashboard components
- Implement mock backend API
- Add Jest testing
- Configure CI/CD pipeline"
```

**Объяснение**:
- `git add .`: Добавляет все файлы для коммита
- `git commit -m`: Создает снимок (коммит) с сообщением

### Шаг 7.3: Проверка статуса

**Проверьте что все закоммитено**:
```bash
git status
```

Должно показать: "nothing to commit, working tree clean"

---

## 8. Настройка GitHub

### Шаг 8.1: Создание репозитория на GitHub

**Что делаем**: Создаем удаленный репозиторий

**Как**:
1. Перейдите на https://github.com
2. Войдите в аккаунт (или создайте новый)
3. Нажмите на "+" в правом верхнем углу
4. Выберите "New repository"
5. Заполните данные:
   - **Repository name**: `smart-city-energy-analytics`
   - **Description**: `Intelligent Energy Consumption Analysis System for Smart City`
   - **Public/Private**: Выберите Public
   - **НЕ** добавляйте README, .gitignore, license (они уже есть локально)
6. Нажмите "Create repository"

### Шаг 8.2: Подключение локального репозитория к GitHub

**Скопируйте команды с GitHub** (они будут показаны после создания репозитория):

```bash
git remote add origin https://github.com/ВАШ_USERNAME/smart-city-energy-analytics.git
git branch -M main
git push -u origin main
```

**Объяснение**:
- `git remote add origin`: Связывает локальный репозиторий с GitHub
- `git branch -M main`: Переименовывает ветку в main
- `git push -u origin main`: Загружает код на GitHub

### Шаг 8.3: Проверка загрузки

Обновите страницу GitHub репозитория - вы должны увидеть все файлы проекта

---

## 9. Настройка CI/CD

### Шаг 9.1: Что такое CI/CD?

**CI (Continuous Integration)**: Автоматическая проверка кода при каждом коммите
- Запуск тестов
- Проверка линтером
- Сборка проекта

**CD (Continuous Deployment)**: Автоматическое развертывание

### Шаг 9.2: Проверка GitHub Actions

**Что делаем**: Убеждаемся что CI/CD pipeline работает

**Как**:
1. Перейдите в ваш репозиторий на GitHub
2. Кликните на вкладку "Actions"
3. Вы должны увидеть запущенный workflow "CI/CD Pipeline"
4. Кликните на него чтобы увидеть детали
5. Дождитесь завершения (зеленая галочка = успех)

### Шаг 9.3: Что проверяет CI/CD?

Наш pipeline выполняет:
1. **Установку зависимостей** на разных версиях Node.js (16, 18, 20)
2. **Линтинг кода** - проверка на ошибки стиля
3. **Запуск тестов** - все тесты должны пройти
4. **Сборку проекта** - проект должен собраться без ошибок
5. **Генерацию отчета покрытия** - сколько кода покрыто тестами

---

## 10. Запуск и тестирование

### Шаг 10.1: Запуск dev-сервера

**Что делаем**: Запускаем приложение локально

**Как**:
```bash
npm run dev
```

**Что должно произойти**:
1. Vite запустит dev-сервер
2. Автоматически откроется браузер на http://localhost:3000
3. Вы увидите дашборд с графиками энергопотребления

### Шаг 10.2: Проверка функциональности

**Проверьте что работает**:
- ✅ Отображаются 4 карточки со статистикой
- ✅ График исторического потребления показывает данные
- ✅ График прогноза показывает данные
- ✅ Данные обновляются каждые 30 секунд
- ✅ Дизайн адаптивный (попробуйте изменить размер окна)

### Шаг 10.3: Запуск тестов

**Запустите все тесты**:
```bash
npm test
```

**Что должно произойти**:
- Запустятся все тесты
- Все тесты должны пройти (PASS)
- Покажется статистика покрытия

**Запуск тестов с покрытием**:
```bash
npm run test:coverage
```

Вы увидите детальный отчет покрытия кода тестами.

### Шаг 10.4: Сборка для production

**Создайте production сборку**:
```bash
npm run build
```

**Что должно произойти**:
- Vite создаст оптимизированную сборку
- Файлы появятся в папке `dist/`
- Показаны размеры файлов

**Предпросмотр production сборки**:
```bash
npm run preview
```

---

## 🎉 Поздравляю! Проект готов!

### Что было создано:

1. ✅ **React приложение** с современным стеком технологий
2. ✅ **Интерактивный дашборд** с визуализацией данных
3. ✅ **Mock Backend API** симулирующий реальные данные
4. ✅ **Автоматизированные тесты** с Jest
5. ✅ **Git репозиторий** с версионированием
6. ✅ **GitHub репозиторий** с кодом
7. ✅ **CI/CD pipeline** с GitHub Actions
8. ✅ **Документация** (README, LICENSE, TECHNOLOGY_JUSTIFICATION)

### Следующие шаги:

**Для дальнейшего улучшения проекта**:

1. **Добавить больше тестов**
   ```bash
   # Создайте тесты для других компонентов
   ```

2. **Добавить новые фичи**:
   - Фильтрация данных по датам
   - Экспорт данных в CSV
   - Уведомления о превышении лимитов
   - Сравнение периодов

3. **Улучшить дизайн**:
   - Добавить темную тему
   - Добавить анимации
   - Улучшить адаптивность

4. **Развернуть на хостинге**:
   - Vercel: https://vercel.com
   - Netlify: https://netlify.com
   - GitHub Pages

### Полезные команды:

```bash
# Разработка
npm run dev          # Запуск dev-сервера
npm run build        # Production сборка
npm run preview      # Предпросмотр production

# Тестирование
npm test             # Запуск тестов
npm run test:coverage # С покрытием кода

# Качество кода
npm run lint         # Проверка линтером

# Git
git add .            # Добавить изменения
git commit -m "..."  # Создать коммит
git push             # Загрузить на GitHub
git pull             # Скачать с GitHub
git status           # Статус репозитория
```

### Создание Issues на GitHub:

1. Перейдите в ваш репозиторий на GitHub
2. Кликните на "Issues"
3. Нажмите "New issue"
4. Примеры issues:
   - "Feature: Add date range filter"
   - "Bug: Chart not responsive on mobile"
   - "Enhancement: Improve loading animation"

### Где получить помощь:

- **React**: https://react.dev
- **Vite**: https://vitejs.dev
- **Recharts**: https://recharts.org
- **Jest**: https://jestjs.io
- **GitHub Actions**: https://docs.github.com/actions

---

**Удачи в разработке! 🚀**
