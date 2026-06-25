"use client";

import {
  decremented,
  incremented,
  reset,
} from "@/lib/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";

export function Countercomponent() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="grid grid-cols-3 gap-5">
      <h2 className="text-5xl">{count}</h2>
      <button
        className="bg-pink-300 p-5 rounded-2xl"
        onClick={() => dispatch(incremented())}
      >
        increment
      </button>
      <button
        className="bg-pink-300 p-5 rounded-2xl"
        onClick={() => dispatch(decremented())}
      >
        decremented
      </button>
      <button
        className="bg-pink-300 p-5 rounded-2xl"
        onClick={() => dispatch(reset())}
      >
        reset
      </button>
    </div>
  );
}
