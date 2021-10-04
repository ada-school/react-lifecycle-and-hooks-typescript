import React, { useState, useRef } from "react";

export default function ContextSection() {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);
  console.log(ref);

  return (
    <div className="flex-center flex-column">
      <h3>useRef</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          ref={ref}
          className="app-button"
          onClick={() => setCounter(counter + 1)}
        >
          click
        </button>
        <span role="img" aria-label="description">
          See the console below ⬇️
        </span>
      </div>
    </div>
  );
}
