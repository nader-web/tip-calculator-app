import React from "react";
import InputField from "./InputField";
import ResultOutput from "./ResultOutput";
import TipPercentageSection from "./TipPercentageSection";

function Container({
  billAmount,
  tipPercentage,
  numPeople,
  onBillAmountChange,
  onTipPercentageChange,
  onNumPeopleChange,
  onReset,
}) {
  const isValidBillAmount = !isNaN(billAmount) && billAmount >= 0;
  const isValidTipPercentage = !isNaN(tipPercentage) && tipPercentage >= 0;
  const isValidNumPeople = !isNaN(numPeople) && numPeople > 0;

  return (
    <main className="main rounded-3xl h-dvh items-center relative p-8 w-full mt-4 flex flex-col gap-3 border  bg-white  font-sans md:mt-8 md:p-6 lg:mt-16 lg:h-[481px] lg:w-[920px] lg:flex-row   lg:gap-12 lg:rounded-3xl lg:p-8">
      <div className="inputs flex  flex-col justify-between lg:w-1/2">
        <InputField
          path="./images/icon-dollar.svg"
          type="bill"
          label="Bill"
          value={isValidBillAmount ? billAmount : ""}
          onChange={onBillAmountChange}
        />
        <TipPercentageSection
          value={isValidTipPercentage ? tipPercentage * 100 : ""}
          onChange={onTipPercentageChange}
        />
        <InputField
          path="./images/icon-person.svg"
          label="Number of People"
          value={isValidNumPeople ? numPeople : ""}
          onChange={onNumPeopleChange}
        />
      </div>
      <ResultOutput
        billAmount={isValidBillAmount ? billAmount : 0}
        tipPercentage={isValidTipPercentage ? tipPercentage : 0}
        numPeople={isValidNumPeople ? numPeople : 1}
        onReset={onReset}
      />
    </main>
  );
}

export default Container;
