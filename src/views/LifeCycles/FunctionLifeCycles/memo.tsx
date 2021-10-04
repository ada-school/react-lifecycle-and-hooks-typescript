import React, { useState, useEffect, useMemo } from "react";

function fib(n: number): number {
  if (n <= 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

export default function ContextSection() {
  const [index, setIndex] = useState(0);
  const result = useMemo(() => fib(index), [index]);
  //const result = fib(index)

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className="flex-center flex-column">
      <h3>useMemo</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="flex-center flex-column"
      >
        <span>{time.toLocaleTimeString()}</span>
        <span>{`fibonacci de ${index} es ${result}`}</span>
        <button className="app-button" onClick={() => setIndex(index + 1)}>
          +
        </button>
      </div>
    </div>
  );
}
