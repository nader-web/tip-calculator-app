function Button({ text, onClick, active, className }) {
  return (
    <button
      onClick={onClick}
      className={`
        h-12 w-full rounded-md text-2xl font-bold transition-colors
        ${
          active
            ? "bg-primary text-neutral-v-d-cyan"
            : "bg-neutral-v-d-cyan hover:bg-neutral-l-cyan hover:text-neutral-v-d-cyan text-white"
        }
        ${className}
      `}
    >
      {text}
    </button>
  );
}

export default Button;
