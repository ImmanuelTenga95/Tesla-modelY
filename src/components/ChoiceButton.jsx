import React from "react";

function ChoiceButton({state, handleOnclick, type}) {
  return (
    <div className="w-full mb-3">
      <button
        className={`${
          state ? "bg-gray-800 text-white" : "bg-gray-200"
        } px-6 py-2  flex w-full rounded-md justify-center items-center  font-semibold`}
        onClick={handleOnclick}
      >
        {type}
      </button>
    </div>
  );
}

export default ChoiceButton;
