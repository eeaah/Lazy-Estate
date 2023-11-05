import { InputNumber } from 'antd';
import './forms.css';
import eventBus from '../eventBus.jsx'
import React, { Component } from 'react'

const onChange = (value) => {
  eventBus.dispatch("creditCardPayment", value)
};

export default class CreditCardPayment extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Credit Card Payment</h1>
        </center>
        <div className="container">
          <div className="paragraph">
            <p>Your average monthly credit card payment. A typical American spends $430/month.</p>
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
