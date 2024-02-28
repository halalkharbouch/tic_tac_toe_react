import { useState } from "react";

export default function Player({ name, symbol }) {
  const [editing, setEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleClick = () => {
    if (editing) {
      setPlayerName(playerName);
      setEditing(false);
    } else {
      setEditing(true);
    }
  };
  return (
    <li>
      <span className="player">
        {editing ? (
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{editing ? "Save" : "Edit"}</button>
    </li>
  );
}
