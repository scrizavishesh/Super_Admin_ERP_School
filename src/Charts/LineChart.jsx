import React from 'react'
import {
    Chart as ChartJS , BarElement , CategoryScale , LinearScale , Tooltip , Legend , Title , LineElement , ArcElement , PointElement
  } from 'chart.js';

import {Line} from 'react-chartjs-2';

ChartJS.register( BarElement,CategoryScale,LinearScale,Tooltip,Legend,Title,LineElement,ArcElement,PointElement)


const LineChart = () => {


//*************************************************************************************************************************************/
                                                        //Line Chart 1
//*************************************************************************************************************************************/

    const data = {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [65, 59, 60, 81, 56, 55, 40,65, 35, 80, 51, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.3
            }
        ]
    };

    const options={
        layout: {
            padding: 10
        },
        plugins: {
            legend: {
                display: false,
                labels: {
                    font: {
                        size: 10,
                    }
                }
            },
            grid:{
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                tickColor: 'grey'
                },
                ticks: {
                color: 'grey',
                },
                title: {
                color: 'Purple',
                display: true,
                text: 'Month'
                }
            },
            y: {
                grid: {
                tickColor: 'grey'
                },
                ticks: {
                color: 'grey',
                
                }
            },
        }
    }
    
    
  return (
    <>
        <div className='container-fluid p-0'>
            <Line
                data={data}
                options={options}
            ></Line>
        </div>
    </>
  )
}

export default LineChart