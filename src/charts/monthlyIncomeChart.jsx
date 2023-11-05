import eventBus from '../eventBus.jsx'
import 'chart.js'
import { mincome } from '../parser.jsx'
import Chart from 'chart.js/auto'

var ctx = document.getElementById('monthlyIncome')
let chart;
let configuration = {
    type: 'scatter',
    data: {
        labels: mincome.map(element => indexOf(element)),
        datasets: [{
            label: 'Monthly Income',
            data: mincome,
            backgroundColor: 'rgb(255, 99, 132)',
        }]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
            }
        }
    }
}


export default function MonthlyIncomeChart() {
    if (chart) {
        chart.destroy();
        chart = new Chart(ctx, configuration);
      } else {
        chart = new Chart(ctx, configuration);
      }
    return <MonthlyIncomeChart />
}
