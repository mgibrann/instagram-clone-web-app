import { useState } from "react";

export default function Input({
  handleInput,
  value,
  type,
  placeholder,
  className,
  onFocus,
  onBlur,
  errorMessage,
}) {
  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        name={type}
        onChange={handleInput}
        value={value}
        className={
          `outline-none text-sm w-full bg-gray-100 border border-gray-s p-2 rounded transition duration-500 focus:border-gray-500 ` +
          className
        }
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <p className="text-[10px] text-red-600 pb-2">{errorMessage}</p>
    </>
  );
}
