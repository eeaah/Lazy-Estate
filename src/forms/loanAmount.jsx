import { InputNumber } from 'antd';
import './forms.css';
import eventBus from '../eventBus.jsx'
import React, { Component } from 'react'

const onChange = (value) => {
  eventBus.dispatch("loanAmount", value)
};

export default class LoanAmount extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Loan Amount</h1>
        </center>
        <div className="container">
          <div className="paragraph">
            <p>The amount of money you owe at any given time. The loan amount may include unpaid principal, interest on unpaid principal, defaulted payments, interest on defaulted payments, other charges and interest on other charges.</p>
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
