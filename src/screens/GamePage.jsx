import SmallCard from "../components/SmallCard";
import BigCard from "../components/BigCard";
import Board from "../components/Board";
import Sidebar from "../components/Sidebar";
import { GAME_OVER, GET_BOARD, GET_PLAYERS, INIT_GAME, INVALID, MOVE, PAY, RECEIVE, RENT } from "../utils/messages";
import { useSocket } from "../hooks/useSocket.js";
import { useEffect, useState } from "react";

const GamePage = () => {
  const socket = useSocket();

   const [started, setStarted] = useState(false)
   const [board, setBoard] = useState([])
  const [players, setPlayers] = useState([])
   
   useEffect(() => {
        if (!socket) {
            return;
        }
        const handler = (event) => {
          const message = JSON.parse(event.data);

          switch (message.type) {
            case INIT_GAME:
              setStarted(true);
              socket.send(JSON.stringify({ type: GET_BOARD }));
              socket.send(JSON.stringify({ type: GET_PLAYERS }));
              console.log("connected");
              break;
            case MOVE:
              console.log("Move made", message.payload);

              // update players immutably using functional setState (no stale closure)
              setPlayers((prev) => {
                if (!Array.isArray(prev)) return prev;
                const idx = prev.findIndex((p) => p.name === message.payload.name);
                if (idx === -1) return prev; // player not found

                const updated = [...prev];
                updated[idx] = { ...updated[idx], position: message.payload.position };
                return updated;
              });
              break;
            case GET_BOARD:
              // set the real payload instead of "hi"
              setBoard(message.payload);
              console.log("received board payload:", message.payload);
              break;
            case GET_PLAYERS:
              // set the real payload instead of "hi"
              setPlayers(message.payload);
              console.log("received players payload:", message.payload);
              break;
            case PAY:
              setPlayers((prev) => {
                if (!Array.isArray(prev)) return prev;
                const idx = prev.findIndex((p) => p.name === message.payload.name);
                if (idx === -1) return prev; // player not found

                const updated = [...prev];
                updated[idx] = { ...updated[idx], money:  updated[idx].money - message.payload.amount};
                return updated;
              });
              break;
            case RECEIVE:
              console.log("received -", message)
              setPlayers((prev) => {
                if (!Array.isArray(prev)) return prev;
                const idx = prev.findIndex((p) => p.name === message.payload.name);
                if (idx === -1) return prev; // player not found
                
                const updated = [...prev];
                updated[idx] = { ...updated[idx], money:  updated[idx].money + message.payload.amount};
                return updated;
              });
              console.log("received - ", players)
              break;
            case RENT:
              setPlayers((prev) => {
                if (!Array.isArray(prev)) return prev;
                const idx = prev.findIndex((p) => p.name === message.payload.name);
                const ownerIdx = prev.findIndex((p) => p.name === message.payload.ownerName)
                if (idx === -1) return prev; // player not found

                const updated = [...prev];
                updated[idx] = { ...updated[idx], money:  updated[idx].money - message.payload.rent};
                updated[ownerIdx] = { ...updated[ownerIdx], money:  updated[ownerIdx].money + message.payload.rent};
                return updated;
              });
              break;
              
            case GAME_OVER:
                console.log("Game over");
                break;
            case INVALID:
                console.log("Invalid move, ", message.payload);
                break;
          }
        };

        socket.addEventListener("message", handler);
        return () => socket.removeEventListener("message", handler);
    }, [socket]);

    // log when board actually updates
    useEffect(() => {
      console.log("board updated:", board);
      console.log("players updated:", players);
    }, [board, players]);

  return (
    <div className="flex justify-between w-full p-1">
      {started && players && <div className=" w-[80%] flex items-center justify-center">
        <Board socket={socket} started={started} board={board} players={players}/>
      </div> }
      <Sidebar socket={socket} started={started} board={board} players={players}/>
    </div>
  );
};

export default GamePage;
