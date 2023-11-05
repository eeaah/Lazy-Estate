import eventBus from '../eventBus.jsx'
import 'chart.js'

const config = {
    type: 'scatter',
    data: adat,
    options: {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom'
        }
      }
    }
  };

export default function MonthlyIncomeChart() {
    return <h1>Monthly Income Chart Goes Here</h1>
}