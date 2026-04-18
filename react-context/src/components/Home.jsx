import EditCounter1 from "./EditCounter1";
import EditCounter2 from "./EditCounter2";
import EditCounter3 from "./EditCounter3";
import EditCounter4 from "./EditCounter4";
function Home() {
  return (
    <div className="text-center p-5">
      <h1 className="text-3xl font-bold">Shared Counter App</h1>

      <div className="grid grid-cols-2 gap-6 justify-center mt-6">
        <EditCounter1 />
        <EditCounter2 />
        <EditCounter3 />
        <EditCounter4 />
      </div>
    </div>
  );
}

export default Home;