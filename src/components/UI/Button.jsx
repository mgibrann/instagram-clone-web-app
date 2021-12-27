import React from "react";

export default function Button({ onClick, title, disable }) {
  return (
    <button
      onClick={onClick}
      disabled
      className="text-center bg-blue-700 py-[6px] text-xs text-white disabled:opacity-60 rounded"
    >
      {title}
    </button>
  );
}
