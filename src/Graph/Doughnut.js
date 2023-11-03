import React from 'react'
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

import { Bar, Doughnut } from 'react-chartjs-2';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);


const datadoughtnut = {


  labels: ['Views', 'Likes', 'Comments'],
  datasets: [
    {
      data: [75, 35, 15],
      backgroundColor:
        [
          'rgba(44, 101, 241, 1)',
          'rgba(255, 168, 0, 1)',
          'rgba(39, 201, 169, 1)',

        ]
      ,

     

    },
    

  ],

}



function Dough() {
  return (
    <div className=''>
      <div className='mx-auto'>
        <Doughnut data={datadoughtnut}
          height={400}
          width={400}
       />

      </div>
      

      

      
    </div>
  )
}

export default Dough
