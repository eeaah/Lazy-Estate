import { InputNumber } from 'antd';
import './forms.css';
import eventBus from '../eventBus.jsx'
import React, { Component } from 'react'

const onChange = (value) => {
  eventBus.dispatch("studentLoanPayments", value)
};

export default class StudentLoanPayments extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Student Loan Payments</h1>
        </center>
        <div className="container">
          <div className="paragraph">
            <p>The monthly payment on your student loans to your loan servicer.</p>
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
