import { InputNumber } from 'antd';
import './creditCardPayment.css';

const onChange = (value) => {
  console.log('changed', value);
};

export default function CreditCardPayment() {
  return (
    <div>
      <center>
        <h1>Credit Card Payment</h1>
      </center>
      <div class="container">
        <div class="paragraph">
          <p>Your average monthly credit card payment. A typical American spends $430 a month.</p>
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
