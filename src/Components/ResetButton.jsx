import clsx from "clsx";

function ResetButton({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={clsx(
        "w-full rounded-md py-3 text-xl font-bold uppercase transition-colors",
        disabled
          ? "bg-primary/20 text-neutral-v-d-cyan/30 cursor-not-allowed"
          : "bg-primary text-neutral-v-d-cyan hover:bg-neutral-l-cyan",
      )}
    >
      RESET
    </button>
  );
}

export default ResetButton;
