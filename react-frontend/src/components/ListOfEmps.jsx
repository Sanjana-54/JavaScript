import { useState, useEffect } from "react";

function ListOfEmps() {
  const [emps,setEmps]=useState([]);

  useEffect(() => {
    async function getEmps() {
      let res = await fetch("http://localhost:3000/emp-api/employees");
      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      }
    }
    getEmps();
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5 text-center text-2xl rounded-2xl shadow-2xl">
            <p>{empObj.email}</p>
            <p className="mb-4">{empObj.name}</p>
            {/* 3 BUTTONS */}
            <div className="flex justify-around">
              <button className="bg-pink-400 p-2 rounded-2xl">View</button>
              <button className="bg-pink-400 p-2 rounded-2xl">Edit</button>
              <button className="bg-pink-400 p-2 rounded-2xl">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps