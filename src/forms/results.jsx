import { InputNumber } from "antd";
import "./forms.css";
import eventBus from "../eventBus.jsx";
import React, { Component } from "react";
import { Alert, Space } from "antd";
import Info from '../components/info.jsx'

export default function Results({ values }) {
  let approved = 1;
  let missing = "";
  let flagCreditScore = false;
  let flagLTV = 0;
  let flagDTI = 0;
  let flagFEDTI = false;
  // incomplete form check
  if(values.includes(null)) {
    approved = 3;
    if(!values[0])
      missing += "gross monthly income, "
    if(!values[1])
      missing += "credit card payment, "
    if(!values[2])
      missing += "car payment, "
    if(!values[3])
      missing += "student loan payments, "
    if(!values[4])
      missing += "appraised value, "
    if(!values[5])
      missing += "down payment, "
    if(!values[6])
      missing += "loan amount, "
    if(!values[7])
      missing += "monthly mortgage payment, "
    if(!values[8])
      missing += "credit score, "
    missing = missing.charAt(0).toUpperCase() + missing.slice(1, -2);
  }
  else {
    // Credit score check
    if (values[8] < 640) {
      approved = 0;
      flagCreditScore = true;
    }
    // LTV check
    let LTV = values[7] / values[4];
    if (LTV > 0.95) {
      approved = 0;
      flagLTV = 1;
    } else if (LTV >= 0.8) {
      approved = approved > 0 ? 2 : approved;
      flagLTV = 2;
    }
    // DTI check
    let monthlyDebt = values[2] + values[1] + values[7] + values[3];
    let DTI = monthlyDebt / values[0];
    if (DTI > 0.43) {
      approved = 0;
      flagDTI = 1;
    } else if (DTI > 0.28) {
      approved = approved > 0 ? 2 : approved;
      flagDTI = 2;
    }
    // FEDTI check
    if (values[7] / values[0] > .28) {
      approved = 0;
      flagFEDTI = true;
    }
  }

  return (
    <div>
      <center>
        <h1>Results</h1>
      </center>
        <div className="popups">
          {
            {
              3: 
              <div>
                <Alert
                  message="Incomplete"
                  description={"You still have values to enter. Please complete the " + missing + " forms to get a result."}
                  type="info"
                  showIcon
                />
              </div>,
              0:
              <div>
                <Alert
                  message="Not Approved"
                  description="Unfortunately, the information provided does not qualify for a home purchase."
                  type="error"
                  showIcon
                />
              <Info credit={flagCreditScore} LTV={flagLTV} DTI={flagDTI} FEDTI={flagFEDTI} />
              </div>,
              1:
              <div>
                <Alert
                  message="Approved"
                  description="Based on your information provided, you should be approved for a home purchase!"
                  type="success"
                  showIcon
                />
                <Info credit={flagCreditScore} LTV={flagLTV} DTI={flagDTI} FEDTI={flagFEDTI} />
              </div>,
              2:
              <div>
                <Alert
                  message="Approved"
                  description="Based on your information provided, you may be approved for a home purchase, but there are  potential areas of interest."
                  type="warning"
                  showIcon
                />
                <Info credit={flagCreditScore} LTV={flagLTV} DTI={flagDTI} FEDTI={flagFEDTI} />
              </div>,
            }[approved]
          }
        </div>
    </div>
  );
}