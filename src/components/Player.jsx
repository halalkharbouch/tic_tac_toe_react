import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [editing, setEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  return (
    <li className={isActive && 'active'}>
      <span className="player">
        {editing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setEditing((isEditing) => !isEditing)}>
        {editing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
