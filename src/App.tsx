import Header from "./components/Header";
import Body from "./components/Body";
import LifeCycles from "./views/LifeCycles";

export default function App() {
  return (
    <>
      <Header />
      <Body title="Ciclo de vida de React y hooks">
        <LifeCycles />
      </Body>
    </>
  );
}
