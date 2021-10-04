import { ReactChild } from "react";
import "./styles.css";

interface CardProps {
  prevSection: () => void;
  nextSection: () => void;
  children: ReactChild;
}

export default function Card(props: CardProps) {
  const { prevSection, nextSection, children } = props;
  return (
    <div className="card">
      <div className="card-corner">
        <button
          className="app-button card-button"
          onClick={() => prevSection()}
        >
          {"⬅"}
        </button>
      </div>
      <div className="card-body">{children}</div>
      <div className="card-corner">
        <button
          className="app-button card-button"
          onClick={() => nextSection()}
        >
          {"⮕"}
        </button>
      </div>
    </div>
  );
}
