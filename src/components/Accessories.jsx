import React from "react";

function Accessories(props) {
    const {state, handleOnChange, title, price} = props
  return (
    <div
      className={`${
        state ? "border-blue-200 bg-blue-100" : ""
      } w-full border rounded-md p-2 md:p-4 mb-3`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <p>{title}</p>
          <div>
            <input
              type="checkbox"
              className="me-2"
              onChange={handleOnChange}
            />
            <span className="font-semibold">${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accessories;
