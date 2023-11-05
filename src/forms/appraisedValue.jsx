import { InputNumber } from 'antd';
import './forms.css';
import eventBus from '../eventBus.jsx'
import React, { Component } from 'react'

const onChange = (value) => {
  eventBus.dispatch("appraisedValue", value)
};

export default class AppraisedValue extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Appraised Value</h1>
        </center>
        <div className="container">
          <div className="paragraph">
            <p>An appraised value is a professional assessment of the condition and worth of a your property at this time. The value of your property and/or home.</p>
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
