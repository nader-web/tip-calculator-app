import Container from "./Components/Container";
import { useState } from "react";

function App() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numPeople, setNumPeople] = useState(1);

  const handleBillAmountChange = (value) => {
    if (value === "") {
      setBillAmount("");
      return;
    }
    const parsedValue = parseFloat(value);
    setBillAmount(isNaN(parsedValue) ? "" : parsedValue);
  };

  const handleTipPercentageChange = (value) => {
    if (value === "") {
      setTipPercentage("");
      return;
    }
    const parsed = parseFloat(value);
    setTipPercentage(isNaN(parsed) ? "" : parsed / 100);
  };

  const handleNumPeopleChange = (value) => {
    if (value === "") {
      setNumPeople("");
      return;
    }
    const parsed = parseInt(value);
    setNumPeople(isNaN(parsed) ? "" : parsed);
  };
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
