import { InputNumber } from 'antd';
import './forms.css';
import eventBus from '../eventBus.jsx'
import React, { Component } from 'react'

const onChange = (value) => {
  eventBus.dispatch("downPayment", value)
};

export default class DownPayment extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Down Payment</h1>
        </center>
        <div className="container">
          <div className="paragraph">
            <p>An initial payment made when a home is bought on credit. This is the <a href="https://en.wikipedia.org/wiki/Down_payment">down payment</a> on the house you are seeking to buy.</p>
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
