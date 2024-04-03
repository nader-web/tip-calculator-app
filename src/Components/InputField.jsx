
function InputField({ path, type, label, value, onChange }) {
  const handleChange = (e) => {
    const newValue = e.target.value.slice(0, 3);
    onChange(newValue);
  };

  return (
    <div className="input-field flex  flex-col h-24 lg:max-h-20 lg:w-full">
    <label htmlFor="input" className="text-sm font-bold text-neutral-g-cyan max-sm:flex-1 lg:text-base">
      {label}
    </label>
    <div className="flex items-center justify-between max-sm:max-h-11 flex-1 h-full rounded-lg bg-neutral-v-l-cyan px-5">
      <img src={path} alt={type} className="h-6 w-6" />
      <input
        value={value}
        type="number"
        id="input"
        onChange={handleChange}
        placeholder="0"
        className="w-full text-right text-3xl font-bold text-primary bg-transparent border-none outline-none"
        min="0"
      max="999"
      />
    </div>
  </div>
  
  );
}
export default InputField;
