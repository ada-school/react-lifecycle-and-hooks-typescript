import React, { useReducer } from "react";

interface State {
  count: number;
}

enum Event {
  SUMA = "suma",
  RESTA = "resta",
}

const counterReducer = (state: State, event: Event) => {
  switch (event) {
    case Event.SUMA:
      return { ...state, count: state.count + 1 };
    case Event.RESTA:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default function ReducerSection() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div className="flex-center flex-column">
      <h3>useReducer</h3>
      <div className="flex-center flex-column">
        <span>{state.count}</span>
        <div>
          <button className="app-button" onClick={() => dispatch(Event.RESTA)}>
            -
          </button>
          <button className="app-button" onClick={() => dispatch(Event.SUMA)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
