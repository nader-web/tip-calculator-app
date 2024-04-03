import Button from "./Button";
import CustomInput from "./CustomInput";

function TipPercentageSection({ value, onChange }) {
  const percentage = [5, 10, 15, 25, 50];

  const handleButtonClick = (percentage) => {
    onChange(percentage);
  };

  return (
    <div className="percentage-section mx-auto w-full max-w-xs lg:max-w-lg max-sm:mb-2 mt-5">
      <label className="mb-6 text-base font-bold text-neutral-g-cyan">
        Select Tip %
      </label>
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
        {percentage.map((percent) => (
          <Button
            key={percent}
            text={`${percent}%`}
            onClick={() => handleButtonClick(percent)}
            active={value === percent}
            className="first:rounded-l-lg last:rounded-r-lg md:first:rounded-none md:last:rounded-none"
          />
        ))}
        <CustomInput
          value={value}
          onChange={onChange}
          className="col-span-2 md:col-span-1"
        />
      </div>
    </div>
  );
}

export default TipPercentageSection;
