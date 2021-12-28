import React from "react";

export default function Button({ onClick, title, disable }) {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className="text-center bg-blue-p py-[6px] text-xs text-white disabled:opacity-60 rounded"
    >
      {title}
    </button>
  );
}
