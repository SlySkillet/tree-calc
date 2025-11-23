import { TbChristmasTree } from "react-icons/tb";

interface TreeButtonProps {
  color: string;
  tree: string;
}

const TreeButton = ({ color, tree }: TreeButtonProps) => {
  return (
    <div className={`w-32 rounded-lg bg-${color} m-1 p-4 text-center`}>
      {tree}
    </div>
  );
};

function App() {
  return (
    <div className="grid h-screen bg-gray-900 text-amber-50">
      {/* top row */}
      <div className="flex gap-4 self-center justify-self-center">
        <TbChristmasTree className="text-9xl" />
        <div className="text-md self-center font-mono font-extrabold italic">
          <h1>Tree Counter</h1>
        </div>
      </div>
      {/* main */}

      <div className="flex flex-col items-center">
        <h1 className="text-xl font-extrabold">F78</h1>
        <TreeButton color="slate-400" tree="129" />
        <TreeButton color="slate-400" tree="139" />
        <TreeButton color="slate-400" tree="149" />
        <TreeButton color="slate-400" tree="159" />
        <TreeButton color="slate-400" tree="179" />
        <TreeButton color="slate-400" tree="199" />
        <TreeButton color="slate-400" tree="219" />
      </div>
    </div>
  );
}

export default App;
