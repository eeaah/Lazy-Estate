import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './parser.jsx'
import eventBus from './eventBus.jsx'
// Forms
import GrossMonthlyIncome from './forms/grossMonthlyIncome.jsx'
import CreditCardPayment from './forms/creditCardPayment.jsx'
import CarPayment from './forms/carPayment.jsx'
import StudentLoanPayments from './forms/studentLoanPayments.jsx'
import AppraisedValue from './forms/appraisedValue.jsx'
import DownPayment from './forms/downPayment.jsx'
import LoanAmount from './forms/loanAmount.jsx'
import MonthlyMortgagePayment from './forms/monthlyMortgagePayment.jsx'
import CreditScore from './forms/creditScore.jsx'
// import Results from './forms/results.jsx'
// End forms
import SideBar from './components/sidebar.jsx'
import { Layout, theme } from 'antd';
import { HomeTwoTone } from '@ant-design/icons'
import 'chart.js'
// import ChartHandler from './chartHandler.jsx'
import ParseCSV from './parser.jsx'

const { Header, Content, Sider } = Layout;
let arr = [0,0,0,0,0,0,0,0,0];


export default class Forms extends Component {

    constructor(props) {
        super(props);
        this.state = {formnum: 1, outputforms: [
            <GrossMonthlyIncome />,
            <CreditCardPayment />,
            <CarPayment />,
            <StudentLoanPayments />,
            <AppraisedValue />,
            <DownPayment />,
            <LoanAmount />,
            <MonthlyMortgagePayment />,
            <CreditScore />,
            // <Results />,
        ]}
    }

    componentDidMount() {
        eventBus.on("clickSidebarItem", (data) => this.setState({ formnum: data }));
        eventBus.on("grossMonthlyIncome", (data) => {
            arr[0] = data ? data : 0
        });
        eventBus.on("creditCardPayment", (data) => {
            arr[1] = data ? data : 0
        });
        eventBus.on("carPayment", (data) => {
            arr[2] = data ? data : 0
        });
        eventBus.on("studentLoanPayments", (data) => {
            arr[3] = data ? data : 0
        });
        eventBus.on("appraisedValue", (data) => {
            arr[4] = data ? data : 0
        });
        eventBus.on("downPayment", (data) => {
            arr[5] = data ? data : 0
        });
        eventBus.on("loanAmount", (data) => {
            arr[6] = data ? data : 0
        });
        eventBus.on("monthlyMortgagePayment", (data) => {
            arr[7] = data ? data : 0
        });
        eventBus.on("creditScore", (data) => {
            arr[8] = data ? data : 0
        });
    }

    componentDidUpdate(prevState) {
        if (this.formnum !== prevState.formnum) {
            console.log('form updated')
            this.render()
        }
        console.log(this.state.formnum)
    }

    render() {
        return (
            <div>
                {this.state.outputforms[this.state.formnum - 1]}
            </div>
        );
    }
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParseCSV />
    <Layout>
      <Header style={{backgroundColor:'rgb(22,119,255)'}}>
        <center style={{color:'rgb(255,255,255)', fontFamily: 'tahoma, sans-serif'}}>
            <font size="+3">
            <HomeTwoTone /> <b>LazyEstate</b>
            </font>
        </center>
        </Header>
    </Layout>
    <Layout>
        <div style={{
        display: "grid",  
        gridTemplateColumns: "256px 1fr"  
        }}>
            <Layout>
             <Sider
          width={256}
          style={{
            background: 'white',
          }}>
            <SideBar />
          </Sider>
        </Layout>
        <Layout
          style={{
            padding: '24px 24px 0px',
          }}>
            <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: 'white',
              borderRadius: 8,
            }}
          >
            <Forms />
          </Content>
        </Layout>
        </div>
        {/* <ChartHandler /> */}
    </Layout>
    {/* <div style={{
        display: "grid",  
        gridTemplateColumns: "1fr 1fr"  
    }}>
        <div style={{
            padding: 20,
            justifySelf: 'left',
        }}>
        <SideBar />
        </div>
        <Forms />
    </div> */}
  </React.StrictMode>,
)

