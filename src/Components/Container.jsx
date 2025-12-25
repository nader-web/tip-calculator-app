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
  return (
    <main className="main mt-4 flex w-full flex-col gap-8 rounded-t-3xl bg-white p-8 shadow-2xl md:mt-8 md:p-6 lg:mt-12 lg:h-[481px] lg:w-[920px] lg:flex-row lg:gap-12 lg:rounded-3xl lg:p-8">
      <div className="inputs flex flex-col justify-between lg:w-1/2 lg:py-2">
        <InputField
          path="./images/icon-dollar.svg"
          type="bill"
          label="Bill"
          value={billAmount}
          onChange={onBillAmountChange}
        />
        <TipPercentageSection
          value={tipPercentage === "" ? "" : tipPercentage * 100}
          onChange={onTipPercentageChange}
        />
        <InputField
          path="./images/icon-person.svg"
          type="people"
          label="Number of People"
          value={numPeople}
          onChange={onNumPeopleChange}
          error={numPeople === 0 ? "Can't be zero" : ""}
        />
      </div>
      <ResultOutput
        billAmount={billAmount}
        tipPercentage={tipPercentage}
        numPeople={numPeople}
        onReset={onReset}
      />
    </main>
  );
}

export default Container;
