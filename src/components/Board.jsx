import React from "react";
import BigCard from "./BigCard";
import SmallCard from "./SmallCard";

const Board = ({ socket, started, board }) => {
  return (
    <div className={`flex flex-col items-center container max-w-max text-xs text-center`}>
      <div className="flex w-full">
        <BigCard>{board[20]?.name}</BigCard>
        <div className="grid grid-flow-col grid-cols-9">
          {board
            ?.slice(21, 30) // take elements 1..9
            .map((element, idx) => (
              <SmallCard key={element.id ?? idx} colorFace={'-bottom-[20%] w-full h-[20%]'} cost={element.cost} color={element.color}>{element.name}</SmallCard>
            ))}
        </div>
        <BigCard>{board[30]?.name}</BigCard>
      </div>
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col">
          {board
            ?.slice(11, 20) // take elements 1..9
            .reverse()
            .map((element, idx) => (
              <SmallCard className="!h-20 !w-28" key={element.id ?? idx} colorFace={'-right-[20%] w-[20%] h-full top-0'} cost={element.cost} color={element.color}>
                {element.name}
              </SmallCard>
            ))}
        </div>
        <div className="flex flex-col">
          {board
            ?.slice(31, 40) // take elements 1..9
            .map((element, idx) => (
              <SmallCard className="!h-20 !w-28" key={element.id ?? idx} colorFace={'-left-[20%] w-[20%] h-full top-0'} cost={element.cost} color={element.color}>
                {element.name}
              </SmallCard>
            ))}
        </div>
      </div>

      <div className="flex w-full">
        <BigCard>{board[10]?.name}</BigCard>
        <div className="grid grid-flow-col grid-cols-9">
          {board
            ?.slice(1, 10) // take elements 1..9
            .reverse() // reverse them
            .map((element, idx) => (
              <SmallCard key={element.id ?? idx} colorFace={'-top-[20%] w-full h-[20%]'} color={element.color} cost={element.cost}>{element.name}</SmallCard>
            ))}
        </div>
        <BigCard>{board[0]?.name}</BigCard>
      </div>
    </div>
  );
};

export default Board;
