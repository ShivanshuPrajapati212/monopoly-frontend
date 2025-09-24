import React from "react";
import { useSocket } from "../hooks/useSocket";
import { INIT_GAME, ROLL } from "../utils/messages";

const Sidebar = ({ socket, started, board, players }) => {
  return (
    <div className="flex flex-col items-center justify-between py-5 w-[30%] bg-[#001b36]">
      {!started && (
        <button
          onClick={() => {
            socket.send(
              JSON.stringify({
                type: INIT_GAME,
              })
            );
          }}
          className="btn"
        >
          Start Game
        </button>
      )}
      {started && Array.isArray(players) && (
        <div>
          <div className="text-center text-4xl">Player Stats</div>
          {players.map((e) => (
            <div key={e.id ?? e.id} className="p-2 py-5">
              <div>{e.name}</div>
              <div>Money: <span className="text-green-400">${e.money}</span></div>
              <div>Position: {e.position}</div>
            </div>
          ))}
        </div>
      )}
      {started && (
        <button
          onClick={() => {
            socket.send(
              JSON.stringify({
                type: ROLL,
              })
            );
          }}
          className="btn"
        >
          Roll
        </button>
      )}
    </div>
  );
};

export default Sidebar;
