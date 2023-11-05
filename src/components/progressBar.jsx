import React from 'react';
import { LoadingOutlined, 
      DollarOutlined,
      ContainerOutlined,
      CarOutlined,
      BankOutlined,
      HomeOutlined,
      ArrowDownOutlined,
      CreditCardOutlined,
      CheckOutlined,
      CheckCircleOutlined,
      CloseOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import Forms from '../main.jsx'

export default function ProgressBar({array}) {
    var statusArr = []
    var skipped = false;
    for(var i = 0; i < 9; i++) {
      if(array[i] != null && !skipped) {
        statusArr.push('finish');
      } else if (array[i] != null) {
        statusArr.push('process');
      } else {
        statusArr.push('wait');
        skipped = true;
      }
    }
    if (!array.includes(null)) statusArr.push('finish');
    let itemsArr = [
      {
        status: statusArr[0],
        icon: <DollarOutlined />,
        // step: 1,
      },
      {
        status: statusArr[1],
        icon: <ContainerOutlined />,
        // step: 2,
      },
      {
        status: statusArr[2],
        icon: <CarOutlined />,
        // step: 3,
      },
      {
        status: statusArr[3],
        icon: <BankOutlined />,
        // step: 4,
      },
      {
        status: statusArr[4],
        icon: <HomeOutlined />,
        // step: 5,
      },
      {
        status: statusArr[5],
        icon: <ArrowDownOutlined />,
        // step: 6,
      },
      {
        status: statusArr[6],
        icon: <BankOutlined />,
        // step: 7,
      },
      {
        status: statusArr[7],
        icon: <HomeOutlined />,
        // step: 8,
      },
      {
        status: statusArr[8],
        icon: <CreditCardOutlined />,
        // step: 9,
      },
      {
        status: statusArr[9],
        icon: <CheckOutlined />,
        // step: 10,
      },
    ];

    return (
      <Steps
      items={itemsArr}
      />
    )
}