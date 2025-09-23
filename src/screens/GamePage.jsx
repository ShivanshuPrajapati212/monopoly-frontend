import SmallCard from "../components/SmallCard";
import BigCard from "../components/BigCard";
import Board from "../components/Board";
import Sidebar from "../components/Sidebar";
import { GAME_OVER, GET_BOARD, INIT_GAME, MOVE } from "../utils/messages";
import { useSocket } from "../hooks/useSocket.js";
import { useEffect, useState } from "react";

const GamePage = () => {
  const socket = useSocket();

   const [started, setStarted] = useState(false)
   const [board, setBoard] = useState([])
   
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
              console.log("connected");
              break;
            case MOVE:
              console.log("Move made");
              break;
            case GET_BOARD:
              // set the real payload instead of "hi"
              setBoard(message.payload);
              console.log("received board payload:", message.payload);
              break;
            case GAME_OVER:
                console.log("Game over");
                break;
          }
        };

        socket.addEventListener("message", handler);
        return () => socket.removeEventListener("message", handler);
    }, [socket]);

    // log when board actually updates
    useEffect(() => {
      console.log("board updated:", board);
    }, [board]);

  return (
    <div className="flex justify-between w-full p-1">
      {started && <div className=" w-[80%] flex items-center justify-center">
        <Board socket={socket} started={started} board={board}/>
      </div> }
      <Sidebar socket={socket} started={started}/>
    </div>
  );
};

export default GamePage;
