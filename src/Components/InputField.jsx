import clsx from "clsx";

function InputField({ path, type, label, value, onChange, error }) {
  const handleChange = (e) => {
    // Determine the type of validation needed based on value logic in parent
    onChange(e.target.value);
  };

  return (
    <div className="mb-6 w-full">
      <div className="mb-2 flex items-center justify-between">
        <label
          htmlFor={type}
          className="text-neutral-d-g-cyan text-base font-bold"
        >
          {label}
        </label>
        {error && (
          <span className="text-base font-bold text-red-500">{error}</span>
        )}
      </div>
      <div
        className={clsx(
          "bg-neutral-v-l-cyan flex h-12 w-full cursor-pointer items-center justify-between rounded-lg px-4 focus-within:ring-2",
          error ? "ring-2 ring-red-500" : "focus-within:ring-primary",
        )}
      >
        <img src={path} alt={type} className="h-4 w-3" />
        <input
          value={value}
          type="number"
          id={type}
          onChange={handleChange}
          placeholder="0"
          className="text-neutral-v-d-cyan placeholder:text-neutral-g-cyan caret-primary h-full w-full cursor-pointer border-none bg-transparent text-right text-2xl font-bold outline-none"
        />
      </div>
    </div>
  );
}

export default InputField;
