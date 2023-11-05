import { InputNumber } from 'antd';
import './forms.css';
import eventBus from '../eventBus.jsx'
import React, { Component } from 'react'

const onChange = (value) => {
  eventBus.dispatch("carPayment", value)
};

export default class CarPayment extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Car Payment</h1>
        </center>
        <div className="container">
          <div className="paragraph">
            <p>The total monthly amount you put towards car payments.</p>
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
