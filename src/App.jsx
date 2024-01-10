import React, { useState } from "react";
import { useFetch } from "./hook/useFetch";

function App() {
  let randomNumber = Math.floor(Math.random() * 50) + 1;
  const [id, setID] = useState(randomNumber);
  const { data, ispending, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );
  console.log(data);

  return (
    <div className="w-full mt-20 flex flex-col items-center">
      {data && (
        <div className=" bg-white shadow w-full max-w-[350px] px-8 py-10 rounded-lg">
          <button className="mb-4 bg-neutral-300 py-1 px-4 rounded-full w-20">
            <p>hp {data.id}</p>
          </button>
          <div className="flex flex-col items-center">
            <img
              className="object-contain w-[200px] h-[200px] mb-6"
              src={data.sprites.other.dream_world.front_default}
            />
            <h1 className="text-2xl font-medium mb-6">{data.name}</h1>
            <button className="mb-8 text-white bg-orange-500 py-[2px] px-6 rounded-full w-24">
              {data.types[0].type.name}
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-center">
              <h2 className="text-lg font-bold">{data.stats[1].base_stat}</h2>
              <span>Attack</span>
            </div>
            <div className="text-center">
              <h2 className="text-lg font-bold">{data.stats[2].base_stat}</h2>
              <span>Defense</span>
            </div>
            <div className="text-center">
              <h2 className="text-lg font-bold">{data.stats[5].base_stat}</h2>
              <span>Speed</span>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => {
          setID(randomNumber);
        }}
        className="bg-black active:outline-dashed outline-3 outline-orange-500 text-white py-3 px-11 rounded-lg mt-5"
      >
        Generate
      </button>
    </div>
  );
}

export default App;
