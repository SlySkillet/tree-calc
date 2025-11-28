import { TbChristmasTree } from "react-icons/tb";
import { useState, useEffect } from "react";

interface TreeButtonProps {
  color: string;
  tree: number;
}

function App() {
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [avg, setAvg] = useState(0);

  useEffect(() => {
    const calcAvg = () => {
      if (count === 0) {
        setAvg(0);
      } else {
        setAvg(Number((totalPrice / count).toFixed(2)));
      }
    };
    calcAvg();
  }, [totalPrice, count]);

  const TreeButton = ({ color, tree }: TreeButtonProps) => {
    // const [price, setPrice] = useState<number>(0);
    return (
      <div
        className={`m-1 w-32 rounded-lg ${color} p-4 text-center`}
        onClick={() => {
          setCount(count + 1);
          setTotalPrice(totalPrice + tree);
          // setAvg(Number((totalPrice / count).toFixed(2)));
        }}
      >
        {tree}
      </div>
    );
  };

  const ResetButton = () => {
    return (
      <div
        className={`m-1 w-16 rounded-lg bg-stone-300 p-1 text-center text-stone-700`}
        onClick={() => {
          setCount(0);
          setTotalPrice(0);
        }}
      >
        Reset
      </div>
    );
  };

  return (
    <div className="grid h-screen bg-gray-900 text-amber-50">
      {/* top row */}
      <div className="flex gap-4 self-center justify-self-center">
        <TbChristmasTree className="text-2xl" />
        <div className="text-md self-center font-mono font-extrabold italic">
          <h1>Tree Counter</h1>
        </div>
      </div>
      {/* main */}

      <div className="flex flex-col items-center">
        <h1 className="flex text-xl font-extrabold">
          F78 <ResetButton />
        </h1>
        <h5>
          count: {count}, total price: {totalPrice},avg: {avg}
        </h5>
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <TreeButton color="bg-red-400" tree={129} />
            <TreeButton color="bg-green-400" tree={139} />
            <TreeButton color="bg-yellow-400" tree={149} />
            <TreeButton color="bg-fuchsia-400" tree={159} />
          </div>
          <div className="flex flex-col">
            <TreeButton color="bg-teal-400" tree={179} />
            <TreeButton color="bg-emerald-400" tree={199} />
            <TreeButton color="bg-rose-400" tree={219} />
            <TreeButton color="bg-amber-400" tree={239} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
