import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as Chartjs, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'

Chartjs.register(
    BarElement, CategoryScale, LinearScale, Tooltip, Legend
)

const BarChart = () => {
    const data = {
        labels: ['JAN', 'FEB', "MAR", 'APR', 'MAY', 'JUN', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [

            {
                label: 'year',
                data: [35, 49, 60, 71, 86, 65, 30, 35, 42, 78, 71, 59],
                backgroundColor: [
                    '#828282',
                ],

                borderWidth: 1,
                maxBarThickness: 20,
            },
            {
                label: 'year',
                data: [65, 59, 80, 81, 56, 55, 40, 45, 52, 68, 81, 69],
                backgroundColor: [
                    '#34A853'
                ],
                borderWidth: 1,
                maxBarThickness: 20,

            },


        ]
    };
    const options = {}
    return (
        <div id='barChart' style={{ width: '50%', marginLeft: '2%', marginRight: '2%', backgroundColor:'white', borderRadius: '8px', boxShadow: '2' }}>
            <Bar data={data} options={options} >
            </Bar>
        </div>
    )
}

export default BarChart