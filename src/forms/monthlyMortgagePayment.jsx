import { InputNumber } from 'antd';
import './forms.css';
import eventBus from '../eventBus.jsx'
import React, { Component } from 'react'

const onChange = (value) => {
  eventBus.dispatch("monthlyMortgagePayment", value)
};

export default class MonthlyMortgagePayment extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Monthly Mortgage Payment</h1>
        </center>
        <div className="container">
          <div className="paragraph">
            <p>The principal and interest payment on a mortgage is the main component of your monthly mortgage payment. The principal is the amount you borrowed and have to pay back, and interest is what the lender charges for lending you the money.</p>
          </div>
        </div>
        <center>
          <InputNumber
            defaultValue={0}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            onChange={onChange}
            size="large"
          />
        </center>
      </div>
    );
  }
}
