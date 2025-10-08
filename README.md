# 🏙️ Smart City Energy Analytics

[![CI/CD](https://github.com/yourusername/smart-city-energy-analytics/workflows/CI/badge.svg)](https://github.com/yourusername/smart-city-energy-analytics/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF.svg)](https://vitejs.dev/)

**Интеллектуальная система анализа энергопотребления для Smart City**

Веб-приложение для мониторинга, анализа и прогнозирования энергопотребления в умных городах. Проект включает интерактивный дашборд с визуализацией данных в реальном времени, исторической аналитикой и прогнозированием будущего потребления.

## 📋 Содержание

- [Возможности](#возможности)
- [Технологический стек](#технологический-стек)
- [Установка](#установка)
- [Использование](#использование)
- [Тестирование](#тестирование)
- [CI/CD](#cicd)
- [Структура проекта](#структура-проекта)
- [Обоснование технологий](#обоснование-технологий)
- [Вклад в проект](#вклад-в-проект)
- [Лицензия](#лицензия)

## ✨ Возможности

- **📊 Визуализация данных в реальном времени** - интерактивные графики энергопотребления
- **📈 Исторический анализ** - отслеживание потребления за 24 часа
- **🔮 Прогнозирование** - предсказание энергопотребления на следующие 12 часов
- **⚡ Статистика** - текущее потребление, средние значения, пиковые нагрузки
- **🌱 Отслеживание возобновляемой энергии** - мониторинг зеленой энергии
- **📱 Адаптивный дизайн** - работает на всех устройствах
- **🎨 Современный UI** - красивый и интуитивный интерфейс

## 🛠 Технологический стек

### Frontend
- **React 18.2** - UI-библиотека
- **Vite 5.0** - сборщик и dev-сервер
- **Recharts 2.10** - библиотека для визуализации данных
- **CSS3** - стилизация с градиентами и анимациями

### Testing & Quality
- **Jest 29.7** - фреймворк для тестирования
- **React Testing Library 14.1** - тестирование React компонентов
- **ESLint** - линтер для JavaScript

### DevOps
- **Git** - система контроля версий
- **GitHub Actions** - CI/CD pipeline
- **npm** - менеджер пакетов

## 🚀 Установка

### Требования
- Node.js >= 16.0.0
- npm >= 8.0.0

### Шаги установки

1. **Клонировать репозиторий**
```bash
git clone https://github.com/yourusername/smart-city-energy-analytics.git
cd smart-city-energy-analytics
```

2. **Установить зависимости**
```bash
npm install
```

3. **Запустить dev-сервер**
```bash
npm run dev
```

Приложение будет доступно по адресу: `http://localhost:3000`

## 💻 Использование

### Доступные команды

```bash
# Запуск dev-сервера
npm run dev

# Сборка для production
npm run build

# Предпросмотр production сборки
npm run preview

# Запуск тестов
npm test

# Запуск тестов с покрытием
npm run test:coverage

# Линтинг кода
npm run lint
```

### Структура данных

Приложение использует mock backend API, который симулирует реальные данные:

- **Историческое потребление**: 24 точки данных за последние 24 часа
- **Прогноз**: 12 точек данных на следующие 12 часов
- **Статистика**: текущие показатели и изменения

## 🧪 Тестирование

Проект включает автоматизированное тестирование:

```bash
# Запустить все тесты
npm test

# Запустить тесты с покрытием
npm run test:coverage
```

### Покрытие тестами

- **Компоненты**: тестирование рендеринга и взаимодействия
- **API**: тестирование mock backend функций
- **Минимальное покрытие**: 70% (branches, functions, lines, statements)

### Примеры тестов

```javascript
// Тест компонента StatisticsCards
test('renders all statistic cards', () => {
  render(<StatisticsCards statistics={mockStatistics} />)
  expect(screen.getByText('Текущее потребление')).toBeInTheDocument()
})

// Тест API
test('getHistoricalData returns valid data', async () => {
  const data = await mockEnergyAPI.getHistoricalData()
  expect(Array.isArray(data)).toBe(true)
  expect(data.length).toBe(24)
})
```

## 🔄 CI/CD

Проект использует GitHub Actions для автоматизации:

- **Линтинг**: проверка кода на ошибки
- **Тестирование**: запуск всех тестов
- **Сборка**: проверка сборки проекта

Workflow запускается при:
- Push в ветку `main`
- Pull request в ветку `main`

## 📁 Структура проекта

```
smart-city-energy-analytics/
├── .github/
│   └── workflows/
│       └── ci.yml              # CI/CD конфигурация
├── src/
│   ├── api/
│   │   ├── mockBackend.js      # Симуляция backend API
│   │   └── mockBackend.test.js # Тесты API
│   ├── components/
│   │   ├── Dashboard.jsx       # Главный дашборд
│   │   ├── Dashboard.css
│   │   ├── Dashboard.test.jsx
│   │   ├── EnergyChart.jsx     # График энергопотребления
│   │   ├── ForecastChart.jsx   # График прогноза
│   │   ├── StatisticsCards.jsx # Карточки статистики
│   │   ├── StatisticsCards.css
│   │   └── StatisticsCards.test.jsx
│   ├── App.jsx                 # Главный компонент
│   ├── App.css
│   ├── main.jsx                # Точка входа
│   ├── index.css               # Глобальные стили
│   └── setupTests.js           # Настройка тестов
├── index.html                  # HTML шаблон
├── package.json                # Зависимости проекта
├── vite.config.js              # Конфигурация Vite
├── jest.config.js              # Конфигурация Jest
├── .babelrc                    # Конфигурация Babel
├── .gitignore                  # Git игнорируемые файлы
├── LICENSE                     # MIT лицензия
├── README.md                   # Документация
└── TECHNOLOGY_JUSTIFICATION.md # Обоснование технологий
```

## 🎯 Обоснование технологий

Подробное обоснование выбора технологий смотрите в [TECHNOLOGY_JUSTIFICATION.md](TECHNOLOGY_JUSTIFICATION.md).

### Краткое резюме:

- **React**: Популярная библиотека с большим сообществом, component-based архитектура
- **Vite**: Быстрая сборка и HMR, современный tooling
- **Recharts**: Простая и мощная библиотека для визуализации данных
- **Jest**: Полнофункциональный testing framework
- **GitHub Actions**: Бесплатная CI/CD для open-source проектов

## 🤝 Вклад в проект

Мы приветствуем вклад в проект! Вот как вы можете помочь:

1. Fork проекта
2. Создайте feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit изменения (`git commit -m 'Add some AmazingFeature'`)
4. Push в branch (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

### Руководство по вкладу

- Следуйте существующему стилю кода
- Пишите тесты для новой функциональности
- Обновляйте документацию при необходимости
- Убедитесь, что все тесты проходят

## 📝 Лицензия

Этот проект лицензирован под MIT License - см. файл [LICENSE](LICENSE) для деталей.

## 📧 Контакты

- **GitHub**: [yourusername](https://github.com/yourusername)
- **Email**: your.email@example.com

## 🙏 Благодарности

- [React](https://reactjs.org/) - за отличную UI библиотеку
- [Recharts](https://recharts.org/) - за красивые графики
- [Vite](https://vitejs.dev/) - за быструю разработку
- Всем контрибьюторам проекта

---

**Made with ❤️ for Smart Cities**
