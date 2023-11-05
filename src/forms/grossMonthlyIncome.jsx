import { InputNumber } from 'antd';
import './forms.css';
import eventBus from '../eventBus.jsx'
import React, { Component } from 'react'

const onChange = (value) => {
  eventBus.dispatch("grossMonthlyIncome", value)
};

export default class GrossMonthlyIncome extends Component {
  	constructor(props) {
		super();
    //   this.state = {
    //     enteredVal: props.enteredVal
	// 	}
  }

  render() {
    return (
      <div>
        <center>
          <h1>Gross Monthly Income</h1>
        </center>
        <div className="container">
          <div className="paragraph">
            <p>The total monthly income from all sources, including returns, discounts, and allowances, before deducting any expenses or taxes.</p>
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
			autoFocus = {true}
          />

		  {}
        </center>
      </div>
    );
  }
}
