import React from 'react'
import { Card } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as Chartjs, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'

Chartjs.register(
    LineElement, CategoryScale, LinearScale, PointElement
)

const LineChart = () => {
    const data = {
        labels: ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17"],
        datasets: [{
            data: [8, 7.8, 6, 8, 7, 5, 6],
            backgroundColor: 'transparent',
            borderColor: '#f26c6d',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.5

        },
        {
            data: [7, 8.8, 5, 9, 5, 9, 8],
            backgroundColor: 'transparent',
            borderColor: '#f26c6d',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.5

        }]
    };
    const options = {
        plugins: {
            legend: false
        }, scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 2,
                max: 10, ticks: {
                    stepsize: 2,
                    callback: (value) => value + 'k'
                },
                grid: {
                    borderDash: [10]
                }
            }
        }
    };
    return (
        <div id='lineChart' style={{backgroundColor:'white',width: '60%', marginRight:'2%', position: 'relative', borderRadius: '8px', boxShadow: '2' }}>
            
            <Line data={data} options={options}></Line>
    
        </div>
    )
}

export default LineChart