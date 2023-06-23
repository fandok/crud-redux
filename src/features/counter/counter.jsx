import { useSelector, useDispatch } from "react-redux";
import { addNewCar, decrement, increment } from "./counterSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import BasicExample from "../example";

export function Counter() {
  const navigate = useNavigate();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (count > 10) {
      navigate("/detail");
    }
  }, [count, navigate]);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(addNewCar(2))}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <BasicExample />
    </div>
  );
}
