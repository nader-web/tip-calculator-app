import { useState } from "react";

function CustomInput({ value, onChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value.slice(0, 3);
    setInputValue(newValue);
    if (newValue === "" || /^\d+$/.test(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <div className="custom-input content-center ">
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        className="input text-center font-bold w-full h-full text-3xl outline-none p-0 bg-neutral-dark-g-cyan-g-cyan "
        placeholder="Custom"
        maxLength="3"
      />
    </div>
  );
}

export default CustomInput;
