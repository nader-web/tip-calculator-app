import Button from "./Button";
import CustomInput from "./CustomInput";

function TipPercentageSection({ value, onChange }) {
  const percentage = [5, 10, 15, 25, 50];

  return (
    <div className="mb-8 w-full">
      <label className="text-neutral-d-g-cyan mb-4 block text-base font-bold">
        Select Tip %
      </label>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        {percentage.map((percent) => (
          <Button
            key={percent}
            text={`${percent}%`}
            onClick={() => onChange(percent)}
            active={value === percent}
          />
        ))}
        <CustomInput
          value={percentage.includes(value) ? "" : value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default TipPercentageSection;
