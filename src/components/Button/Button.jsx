import React from "react";

function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-300 px-4 py-2 rounded-md text-xl"
    >
      {text}
    </button>
  );
}

export default Button;
