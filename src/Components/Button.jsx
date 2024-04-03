function Button({ text, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`
    button h-12 w-full rounded-md px-6 py-3 text-lg font-bold
    ${active ? "bg-neutral-v-d-cyan text-primary" : "bg-primary text-white"}
    sm:h-14 sm:px-8 sm:py-3.5 sm:text-xl
    md:h-16 md:px-10 md:py-4 md:text-2xl
  `}
    >
      {text}
    </button>
  );
}

export default Button;
