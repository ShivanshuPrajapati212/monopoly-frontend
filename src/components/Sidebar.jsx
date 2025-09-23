import React from "react";
import { useSocket } from "../hooks/useSocket";
import { INIT_GAME, ROLL } from "../utils/messages";

const Sidebar = ({ socket, started }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[30%] bg-[#001b36]">
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
      {
        started && <button onClick={() => {
            socket.send(
              JSON.stringify({
                type: ROLL,
              })
            );
          }} className="btn">Roll</button>
      }
    </div>
  );
};

export default Sidebar;
