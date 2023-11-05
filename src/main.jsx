import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './parser.jsx'
import eventBus from './eventBus.jsx'
import CreditCardPayment from './forms/creditCardPayment.jsx'
import MonthlyIncome from './forms/monthlyIncome.jsx'
import SideBar from './components/sidebar.jsx'


export default class Forms extends Component {

    constructor(props) {
        super(props);
        this.state = {formnum: 1, outputforms: [
            <MonthlyIncome />,
            <CreditCardPayment />,
        ]}
    }

    componentDidMount() {
        eventBus.on("clickSidebarItem", (data) => this.setState({ formnum: data }));
    }

    componentDidUpdate(prevState) {
        if (this.formnum !== prevState.formnum) {
            console.log('updated')
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
    {/* <ParseCSV /> */}
    <div style={{  
        display: "grid",  
        gridTemplateColumns: "1fr 1fr"  
    }}> 
        <SideBar />
        <Forms />
    </div>
  </React.StrictMode>,
)

