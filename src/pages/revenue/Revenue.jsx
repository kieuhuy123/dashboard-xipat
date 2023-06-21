import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart'
    }
  }
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
const dataBar = [100, 200, 600, 300, 400, 500, 700]
const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: dataBar,
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }
  ]
}

const RevenueChart = () => {
  return <Bar options={options} data={data} />
}

export default RevenueChart
