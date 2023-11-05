import { InputNumber } from 'antd';

const onChange = (value) => {
  console.log('changed', value);
};

export default function CreditCardPayment() {
  return (
    <div>
      <center>
        <h1>Credit Card Payment</h1>
      </center>
      <div class="center">
        <p>Test paragraph :)</p>
      </div>
      <InputNumber
        defaultValue={0}
        formatter={(value) =>
          `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
        parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
        onChange={onChange}
        size="large"
      />
    </div>
  );
}
