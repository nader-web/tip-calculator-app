import Container from "./Components/Container";
import { useState } from "react";

function App() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numPeople, setNumPeople] = useState(1);

  const handleBillAmountChange = (value) => {
    const parsedValue = parseFloat(value);
    setBillAmount(isNaN(parsedValue) ? "" : parsedValue);
  };

  const handleTipPercentageChange = (value) =>
    setTipPercentage(parseFloat(value) / 100);
  const handleNumPeopleChange = (value) => setNumPeople(parseInt(value));
  const handleReset = () => {
    setBillAmount("");
    setTipPercentage(0);
    setNumPeople(1);
  };

  return (
    <div className="App bg-neutral-l-cyan flex h-full flex-col items-center justify-center">
      <div className="logo mb-5 mt-5">
        <img src="./images/logo.svg" alt="logo" />
      </div>
      <Container
        billAmount={billAmount}
        tipPercentage={tipPercentage}
        numPeople={numPeople}
        onBillAmountChange={handleBillAmountChange}
        onTipPercentageChange={handleTipPercentageChange}
        onNumPeopleChange={handleNumPeopleChange}
        onReset={handleReset}
      />
    </div>
  );
}

export default App;
