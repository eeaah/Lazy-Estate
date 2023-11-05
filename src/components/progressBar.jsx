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

export default function ProgressBar(array) {
    var statusArr = []
    var skipped = false;
    console.log(array)
    for(var i = 0; i < 10; i++) {
      if(array[i] != null && !skipped) {
        statusArr.push('finish');
        console.log(array[i])
        console.log(statusArr[i])
      } else if (array[i] != null) {
        statusArr.push('process');
        console.log(array[i])
        console.log(statusArr[i])
      } else {
        statusArr.push('wait');
        skipped = true;
        console.log(array[i])
        console.log(statusArr[i])
      }
    }
    let itemsArr = [
        {
          status: statusArr[0],
          icon: <DollarOutlined />,
          // step: 1,
        },
        {
          status: 'process',
          icon: <ContainerOutlined />,
          // step: 2,
        },
        {
          status: 'wait',
          icon: <CarOutlined />,
          // step: 3,
        },
        {
          status: 'wait',
          icon: <BankOutlined />,
          // step: 4,
        },
        {
          status: 'wait',
          icon: <HomeOutlined />,
          // step: 5,
        },
        {
          status: 'wait',
          icon: <ArrowDownOutlined />,
          // step: 6,
        },
        {
          status: 'wait',
          icon: <BankOutlined />,
          // step: 7,
        },
        {
          status: 'wait',
          icon: <HomeOutlined />,
          // step: 8,
        },
        {
          status: 'wait',
          icon: <CreditCardOutlined />,
          // step: 9,
        },
        {
          status: 'wait',
          icon: <CloseOutlined />,
          // step: 10,
        },
      ]

    return (
      <Steps
      items={itemsArr}
      />
    )
}