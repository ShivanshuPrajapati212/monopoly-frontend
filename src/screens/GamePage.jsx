import SmallCard from "../components/SmallCard";
import BigCard from "../components/BigCard";

const GamePage = () => {
  return (
    <div>
      <div className="flex flex-col items-center container max-w-max">
        <div className="flex w-full">
          <BigCard>Free Parking</BigCard>
          <div className="grid grid-flow-col grid-cols-9">
            <SmallCard>1</SmallCard>
            <SmallCard>2</SmallCard>
            <SmallCard>3</SmallCard>
            <SmallCard>4</SmallCard>
            <SmallCard>5</SmallCard>
            <SmallCard>6</SmallCard>
            <SmallCard>7</SmallCard>
            <SmallCard>8</SmallCard>
            <SmallCard>9</SmallCard>
          </div>
          <BigCard>Go to Jail</BigCard>
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col">
            <SmallCard className="!h-20 !w-28 ">1</SmallCard>
            <SmallCard className="!h-20 !w-28">2</SmallCard>
            <SmallCard className="!h-20 !w-28">3</SmallCard>
            <SmallCard className="!h-20 !w-28">4</SmallCard>
            <SmallCard className="!h-20 !w-28">5</SmallCard>
            <SmallCard className="!h-20 !w-28">6</SmallCard>
            <SmallCard className="!h-20 !w-28">7</SmallCard>
            <SmallCard className="!h-20 !w-28">8</SmallCard>
            <SmallCard className="!h-20 !w-28">9</SmallCard>
          </div>
          <div className="flex flex-col">
            <SmallCard className="!h-20 !w-28 ">1</SmallCard>
            <SmallCard className="!h-20 !w-28">2</SmallCard>
            <SmallCard className="!h-20 !w-28">3</SmallCard>
            <SmallCard className="!h-20 !w-28">4</SmallCard>
            <SmallCard className="!h-20 !w-28">5</SmallCard>
            <SmallCard className="!h-20 !w-28">6</SmallCard>
            <SmallCard className="!h-20 !w-28">7</SmallCard>
            <SmallCard className="!h-20 !w-28">8</SmallCard>
            <SmallCard className="!h-20 !w-28">9</SmallCard>
          </div>
        </div>

        <div className="flex w-full">
          <BigCard>Free Parking</BigCard>
          <div className="grid grid-flow-col grid-cols-9">
            <SmallCard>1</SmallCard>
            <SmallCard>2</SmallCard>
            <SmallCard>3</SmallCard>
            <SmallCard>4</SmallCard>
            <SmallCard>5</SmallCard>
            <SmallCard>6</SmallCard>
            <SmallCard>7</SmallCard>
            <SmallCard>8</SmallCard>
            <SmallCard>9</SmallCard>
          </div>
          <BigCard>Go to Jail</BigCard>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
