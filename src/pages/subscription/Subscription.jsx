import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
const data1 = [100, 200, 500, 600, 700, 1000, -500]

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    }
  }
}

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 2',
      data: data1,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    }
  ]
}
const SubscriptionChart = () => {
  return <Line options={options} data={data} />
}

export default SubscriptionChart
