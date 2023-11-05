import React, { Component } from 'react'
import eventBus from './eventBus.jsx'
import AppraisedValueChart from './charts/appraisedValueChart.jsx'
import MonthlyMortgagePaymentChart from './charts/monthlyMortgagePaymentChart.jsx'
import CarPaymentChart from './charts/carPaymentChart.jsx'
import CreditCardPaymentChart from './charts/creditCardPaymentChart.jsx'
import CreditScoreChart from './charts/creditScoreChart.jsx'
import DownPaymentChart from './charts/downPaymentChart.jsx'
import LoanAmountChart from './charts/loanAmountChart.jsx'
import MonthlyIncomeChart from './charts/monthlyIncomeChart.jsx'
import StudentLoanPaymentChart from './charts/studentLoanPaymentChart.jsx'

// export default class ChartHandler extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {chartnum: 1, outputcharts: [
//             <MonthlyIncomeChart />,
//             <CreditCardPaymentChart />,
//             <CarPaymentChart />,
//             <StudentLoanPaymentChart />,
//             <AppraisedValueChart />,
//             <DownPaymentChart />,
//             <LoanAmountChart />,
//             <MonthlyMortgagePaymentChart />,
//             <CreditScoreChart />
//         ]}
//     }

//     componentDidMount() {
//         eventBus.on("clickSidebarItem", (data) => this.setState({ chartnum: data }));
//     }

//     componentDidUpdate(prevState) {
//         if (this.state.chartnum !== prevState.formnum) {
//             console.log('chart updated')
//             this.render()
//         }
//         console.log("chart num: " + this.state.chartnum)
//     }

//     render() {
//         return (
//             <div>
                
//                 {this.state.outputcharts[this.state.chartnum - 1]}
//             </div>
//         );
//     }
// }