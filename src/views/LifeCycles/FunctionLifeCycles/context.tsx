import React, { useState, useContext, createContext } from "react";

interface Player {
  name: string;
  points: number;
}

interface IPlayerContext {
  player: Player;
  setPlayer: (player: Player) => void;
}

const PlayerContext = createContext<IPlayerContext>({
  player: {
    name: "",
    points: 0,
  },
  setPlayer: () => {},
});

const FirstComponent = () => (
  <div className="flex-center flex-column">
    <h3>Primer Nivel</h3>
    <SecondComponent />
  </div>
);
const SecondComponent = () => (
  <div className="flex-center flex-column">
    <h3>Segundo Nivel</h3>
    <ThirdComponent />
  </div>
);
const ThirdComponent = () => {
  const { player, setPlayer } = useContext(PlayerContext);
  return (
  <div className="flex-center flex-column">
    <h3>Tercer Nivel</h3>
    <div>{`Current Player: ${player.name}`}</div>
    <FourthComponent />
  </div>
  )
};
const FourthComponent = () => {
  const { player, setPlayer } = useContext(PlayerContext);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3>Cuarto Nivel</h3>
      <div>{`Name: ${player.name}`}</div>
      <div>{`Points: ${player.points}`}</div>
      <button
        className="app-button"
        onClick={() => setPlayer({ ...player, points: player.points + 1 })}
      >
        +
      </button>
    </div>
  );
};

export default function ContextSection() {
  const [player, setPlayer] = useState<Player>({
    name: "Pepito Perez",
    points: 1,
  });
  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      <div className="flex-center flex-column">
        <h3>useContext</h3>
        <div className="flex-center flex-column">
          <FirstComponent />
        </div>
      </div>
    </PlayerContext.Provider>
  );
}
