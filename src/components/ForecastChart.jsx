import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const ForecastChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#764ba2" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#764ba2" stopOpacity={0.1}/>
          </linearGradient>
          <linearGradient id="colorConfidence" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f093fb" stopOpacity={0.4}/>
            <stop offset="95%" stopColor="#f093fb" stopOpacity={0.05}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis label={{ value: 'МВт', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="upper"
          stroke="#f093fb"
          fillOpacity={1}
          fill="url(#colorConfidence)"
          name="Верхняя граница"
        />
        <Area
          type="monotone"
          dataKey="forecast"
          stroke="#764ba2"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorForecast)"
          name="Прогноз"
        />
        <Area
          type="monotone"
          dataKey="lower"
          stroke="#f093fb"
          fillOpacity={1}
          fill="url(#colorConfidence)"
          name="Нижняя граница"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default ForecastChart
