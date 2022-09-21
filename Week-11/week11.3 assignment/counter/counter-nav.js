import React from "react";

import { useDispatch } from "react-redux";
import { actionType } from "../store";

export const CounterNav = () => {
  const dispatch = useDispatch();
  return (
    <div className="counter-nav">
      <button
        onClick={() => {
          dispatch({
            type: actionType.RESET
          });
        }}
      >
        Reset steps
      </button>

      <button
        onClick={() => {
          dispatch({
            type: actionType.INCREASE
          });
        }}
      >
        Add a step
      </button>
    </div>
  );
};

export default CounterNav;
