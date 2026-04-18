import { useContext } from "react";
import { counterContextObj } from "./ContextProvider";

function EditCounter4() {
  const { counter, increment, decrement } = useContext(counterContextObj);

  return (
    <div className="border rounded-xl p-6 shadow-lg bg-gray-100">
      <h2 className="text-xl font-semibold mb-2">Edit Counter 1</h2>
      
      <p className="text-lg mb-3">Counter: {counter}</p>

      <button 
        onClick={increment} 
        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
      >
        +
      </button>

      <button 
        onClick={decrement} 
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        -
      </button>
    </div>
  );
}

export default EditCounter4;