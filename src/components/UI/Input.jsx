import { useState } from "react";

export default function Input({
  handleInput,
  value,
  type,
  placeholder,
  className,
  onFocus,
  onBlur,
}) {
  return (
    <div className={`border border-gray-s p-2 rounded ` + className}>
      <input
        placeholder={placeholder}
        type={type}
        name={type}
        onChange={handleInput}
        value={value}
        className="outline-none text-sm w-full"
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
}
