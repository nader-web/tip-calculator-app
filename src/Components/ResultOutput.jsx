import React from "react";
import ResetButton from "./ResetButton";

function ResultOutput({ billAmount, tipPercentage, numPeople, onReset }) {
  const bill = parseFloat(billAmount);
  const isValidBill = !isNaN(bill) && bill >= 0;
  const isValidPeople = numPeople > 0;

  let tipAmount = 0.0;
  let totalAmount = 0.0;

  if (isValidBill && isValidPeople) {
    const totalTip = bill * tipPercentage;
    tipAmount = totalTip / numPeople;
    totalAmount = (bill + totalTip) / numPeople;
  }

  const isResetDisabled = !isValidBill || bill === 0;

  return (
    <div className="bg-neutral-v-d-cyan flex h-full w-full flex-col justify-between rounded-xl p-6 pt-9 lg:w-1/2 lg:rounded-2xl lg:p-10">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Tip Amount</h3>
            <p className="text-neutral-g-cyan text-sm font-bold">/ person</p>
          </div>
          <p className="text-primary break-all text-3xl font-bold tracking-tight lg:text-5xl">
            ${tipAmount.toFixed(2)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Total</h3>
            <p className="text-neutral-g-cyan text-sm font-bold">/ person</p>
          </div>
          <p className="text-primary break-all text-3xl font-bold tracking-tight lg:text-5xl">
            ${totalAmount.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="mt-8 lg:mt-auto">
        <ResetButton onClick={onReset} disabled={isResetDisabled} />
      </div>
    </div>
  );
}

export default ResultOutput;
