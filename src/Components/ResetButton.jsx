function ResetButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="submit-btn h-14 w-full rounded-lg bg-neutral-v-d-cyan text-2xl font-bold text-primary"
    >
      RESET
    </button>
  );
}

export default ResetButton;
