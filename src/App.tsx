import Header from "./components/Header";
import Body from "./components/Body";
import LifeCycles from "./views/LifeCycles";
import Pokemon from "./views/Pokemon"

export default function App() {
  return (
    <>
      <Header />
      <Body title="Ciclo de vida de React y hooks">
        <div>
          <LifeCycles />
          <Pokemon />
        </div>
      </Body>
    </>
  );
}
