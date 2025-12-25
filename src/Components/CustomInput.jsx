import { useState } from "react";

function CustomInput({ value, onChange, className }) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Custom"
      className={`bg-neutral-v-l-cyan text-neutral-v-d-cyan placeholder:text-neutral-d-g-cyan focus:ring-primary caret-primary h-12 w-full cursor-pointer rounded-md px-4 text-right text-2xl font-bold outline-none focus:ring-2 ${className}`}
    />
  );
}

export default CustomInput;
