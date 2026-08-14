// Example only, unused 

import { useReducer } from "react";

// 1. The state shape
interface CounterState {
  count: number;
}

// 2. The actions — a discriminated union (all the things that can happen)
type CounterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "add"; amount: number };

// 3. The reducer: given current state + an action, return the NEW state
function reducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "add":
      return { count: state.count + action.amount };
    default:
      return state;
  }
}

// COULD HAVE BEEN THIS BUT FOR THE SAKE OF THE EXPLANATION WE USED AN INTERFACE
// function reducer(count: number, action: CounterAction): number {
//   switch (action.type) {
//     case "increment": return count + 1;
//     case "decrement": return count - 1;
//     case "reset":     return 0;
//     case "add":       return count + action.amount;
//     default:          return count;
//   }
// }

// const [count, dispatch] = useReducer(reducer, 0);

export default function Counter() {
  // 4. useReducer(reducer, initialState) → [state, dispatch]
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "decrement" })}>−</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "add", amount: 10 })}>+10</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}