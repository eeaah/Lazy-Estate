import { InputNumber } from "antd";
import "./forms.css";
import eventBus from "../eventBus.jsx";
import React, { Component } from "react";
import { Alert, Space } from "antd";

export default function Results({ values }) {
  let approvedStatus = 1;
  let flagCreditScore = false;
  let flagLTV = 0;
  flagDTI = 0;
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
  } else if (DTI > 0.28) {
    approved = approved > 0 ? 2 : approved;
  }

  return (
    <div>
      <center>
        <h1>Results</h1>
        <Alert
          message="Approved"
          description="Based on your information provided,you have been approved for a home purchase!"
          type="success"
          showIcon
        />
      </center>
    </div>
  );
}
