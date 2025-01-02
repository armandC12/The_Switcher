import React from "react";
import CreateGameForm from "@/components/ui/CreateGameForm";

const CreateGame = () => {

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-zinc-950 ">
      <h1 className="text-6xl  mb-10 text-white">Crear partida</h1>
      <div className="text-white w-1/4 h-1/2">
        <CreateGameForm />
      </div>
    </div>
  );
};

export default CreateGame;



