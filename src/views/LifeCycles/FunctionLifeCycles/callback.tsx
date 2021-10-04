import React, { useState, useEffect, useCallback, memo } from "react";

interface ChildComponentProps {
  index: number;
  calc: (index: number) => number;
}

const ChildComponent = memo((props: ChildComponentProps) => {
  const { index, calc } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <span>{`fibonacci de ${index} es ${calc(index)}`}</span>
      <span>{`re-render: ${new Date().toLocaleTimeString()}`}</span>
    </div>
  );
});

export default function ReducerSection() {
  const [index, setIndex] = useState(0);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, [time]);

  function fibCallback(index: number): number {
    if (index <= 1) {
      return 1;
    } else {
      return fib(index - 1) + fib(index - 2);
    }
  }

  const fib = useCallback<(index: number) => number>(fibCallback, [
    fibCallback,
  ]);

  return (
    <div className="flex-center flex-column">
      <h3>useCallback</h3>
      <span>{time.toLocaleTimeString()}</span>
      <ChildComponent index={index} calc={fib} />
      <button className="app-button" onClick={() => setIndex(index + 1)}>
        +
      </button>
    </div>
  );
}
