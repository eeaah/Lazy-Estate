import { InputNumber } from 'antd';
import './forms.css';
import eventBus from '../eventBus.jsx'
import React, { Component } from 'react'

const onChange = (value) => {
  eventBus.dispatch("creditScore", value)
};

export default class CreditScore extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Credit Score</h1>
        </center>
        <div className="container">
          <div className="paragraph">
            <p>A prediction of how likely you are to pay a loan back on time based on information from your credit reports..</p>
          </div>
        </div>
        <center>
          <InputNumber
            defaultValue={0}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
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
