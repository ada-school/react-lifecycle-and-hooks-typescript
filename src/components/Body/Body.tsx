import { ReactChild } from "react";
import "./styles.css";

interface BodyProps {
  title: string;
  children: ReactChild;
}

export default function Body(props: BodyProps) {
  const { title, children } = props;
  return (
    <section className="app-body">
      {title && <h2>{title}</h2>}
      <article className="app-container">{children}</article>
    </section>
  );
}
