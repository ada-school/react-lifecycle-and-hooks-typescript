import React, { useState, useEffect } from "react";

export default function ContextSection() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, [time]);

  useEffect(() => {
    console.log("component did mount!")
  }, [])

  return (
    <div>
      <h3>useEffect</h3>
      <div>
        <span>{time.toLocaleTimeString()}</span>
      </div>
    </div>
  );
}
