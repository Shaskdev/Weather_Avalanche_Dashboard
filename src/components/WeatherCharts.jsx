import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export function WeatherTrendChart({ data, darkMode }) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.temperature,
        borderColor: '#FF6384',
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        yAxisID: 'y',
        tension: 0.3,
        fill: true
      },
      {
        label: 'Snowfall (cm)',
        data: data.snowfall,
        borderColor: '#36A2EB',
        backgroundColor: 'rgba(54, 162, 235, 0.3)',
        yAxisID: 'y1',
        type: 'bar'
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        labels: {
          color: darkMode ? '#e0e0e0' : '#333'
        }
      },
      title: {
        display: true,
        text: '7-Day Weather Trend',
        color: darkMode ? '#6eb5ff' : '#1e3c72',
        font: { size: 16, weight: 'bold' }
      }
    },
    scales: {
      x: {
        ticks: { color: darkMode ? '#aaa' : '#666' },
        grid: { color: darkMode ? '#333' : '#eee' }
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: 'Temperature (°C)',
          color: darkMode ? '#aaa' : '#666'
        },
        ticks: { color: darkMode ? '#aaa' : '#666' },
        grid: { color: darkMode ? '#333' : '#eee' }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: 'Snowfall (cm)',
          color: darkMode ? '#aaa' : '#666'
        },
        ticks: { color: darkMode ? '#aaa' : '#666' },
        grid: { drawOnChartArea: false }
      }
    }
  };

  return (
    <div style={{ height: '300px', position: 'relative' }}>
      <Line data={chartData} options={options} />
    </div>
  );
}

export function WindChart({ data, darkMode }) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Wind Speed (km/h)',
        data: data.windSpeed,
        borderColor: '#4BC0C0',
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
        tension: 0.3,
        fill: true
      },
      {
        label: 'Wind Gusts (km/h)',
        data: data.windGusts,
        borderColor: '#FF9F40',
        backgroundColor: 'rgba(255, 159, 64, 0.1)',
        tension: 0.3,
        borderDash: [5, 5],
        fill: false
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: darkMode ? '#e0e0e0' : '#333' }
      },
      title: {
        display: true,
        text: '48-Hour Wind Forecast',
        color: darkMode ? '#6eb5ff' : '#1e3c72',
        font: { size: 16, weight: 'bold' }
      }
    },
    scales: {
      x: {
        ticks: { color: darkMode ? '#aaa' : '#666' },
        grid: { color: darkMode ? '#333' : '#eee' }
      },
      y: {
        title: {
          display: true,
          text: 'Wind Speed (km/h)',
          color: darkMode ? '#aaa' : '#666'
        },
        ticks: { color: darkMode ? '#aaa' : '#666' },
        grid: { color: darkMode ? '#333' : '#eee' }
      }
    }
  };

  return (
    <div style={{ height: '250px', position: 'relative' }}>
      <Line data={chartData} options={options} />
    </div>
  );
}
