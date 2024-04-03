import React from 'react';
import ResetButton from './ResetButton';

function ResultOutput({ billAmount, tipPercentage, numPeople, onReset }) {
  const isValidInput = billAmount >= 0 && tipPercentage >= 0 && numPeople > 0;

  let tipAmount = '0.00';
  let totalAmount = '0.00';

  if (isValidInput) {
    const validNumPeople = numPeople || 1;
    const tipAmountBeforeRounding = (billAmount * tipPercentage) / validNumPeople;
    tipAmount = tipAmountBeforeRounding.toFixed(2);
    totalAmount = (billAmount / validNumPeople + parseFloat(tipAmount)).toFixed(2);
  }
  return (
    <div className="result-sec pr-6 pl-6 pb-0flex  w-full flex-col justify-around relative rounded-xl border bg-primary lg:w-1/2 h-full lg:p-10 lg:justify-around flex">
  <div className="result flex flex-col gap-8 lg:gap-16">
    <div className="tip-amount flex justify-between">
      <div className="titles">
        <h3 className="text-white text-base lg:">Tip Amount</h3>
        <span className="text-neutral-g-cyan text-sm lg:text-base">/ person</span>
      </div>
      <p className="amount text-4xl text-neutral-v-d-cyan lg:text-5xl">
        ${tipAmount}
      </p>
    </div>
    <div className="total-tip flex justify-between">
      <div className="titles">
        <h3 className="text-white text-base lg:">Total Amount</h3>
        <span className="text-neutral-g-cyan text-sm lg:text-base">/ person</span>
      </div>
      <p className="amount text-4xl text-neutral-v-d-cyan  lg:text-5xl overflow-x-clip">
        ${totalAmount}
      </p>
    </div>
  </div>
  <ResetButton onClick={onReset} />
</div>

  );
}

export default ResultOutput;