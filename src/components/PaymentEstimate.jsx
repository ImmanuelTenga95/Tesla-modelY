import React from "react";

function PaymentEstimate({monthlyPayment}) {
  return (
    <div className="w-full mb-2">
      <p>Estimate Payment Breakdown</p>
      <p>
        Down Payment: <span className="font-bold">$6000</span>
      </p>
      <p>
        Loan Term: <span className="font-bold">60 Months</span>
      </p>
      <p>
        Interest Rate: <span>3%</span>
        <span className="font-bold"> APR</span>
      </p>
      <p>
        Estimated Monthly Payment:{" "}
        <span className="font-bold text-xl">
          ${monthlyPayment.toFixed(2).toLocaleString()}
        </span>
      </p>
    </div>
  );
}

export default PaymentEstimate;
