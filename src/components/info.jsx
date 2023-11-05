import { Alert, Space } from "antd";
import "../forms/forms.css";

export default function Info({ credit, LTV, DTI, FEDTI }) {
  return (
    <div>
      <div className="tips">
        {
          {
            true:<Alert message="Your credit score is too low. You can improve your score by maintaining low balances, paying your bills on time and limiting how often you apply for new accounts." type="error" />,
            false:<Alert message="Your credit Score is good." type="success" />
          }[credit]
        }
      </div>
      <div className="tips">
          {
            {
              0:<Alert message="Your LTV (loan-to-value) is good!" type="success" />,
              2:<Alert message="Your LTV (loan-to-value) is acceptable but higher than preferred. This could lead to a higher interest rate and may require the purchase of mortgage insurance." type="warning" />,
              1:<Alert message="Your LTV (loan-to-value) is too high. Increasing your down payment can lower this value." type="error" />,
            }[LTV]
          }
      </div>
      <div className="tips">
          {
            {
              0:<Alert message="Your DTI (debt-to-income) is good!" type="success" />,
              2:<Alert message="Your DTI (debt-to-income) is acceptable but higher than preferred. " type="warning" />,
              1:<Alert message="Your DTI (debt-to-income) is too high. One way to lower your DTI would be to transfer high interest loans to a low interest credit card, although having too many cards can also negatively impact your ability to purchase a home." type="error" />,
            }[DTI]
          }
      </div>
      <div className="tips">
          {
            {
              false:<Alert message="Your FEDTI (front-end debt to income) is good!" type="success" />,
              true:<Alert message="Your FEDTI (front-end debt to income) too high. This means either your monthly debt from housing is too expensive, and your monthly income is too low to match it." type="warning" />,
            }[FEDTI]
          }
      </div>
    </div>
  )
};