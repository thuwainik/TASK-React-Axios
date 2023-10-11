import React, { useEffect, useState } from "react";
import petsData from "../petsData";
import { useParams, useNavigate } from "react-router-dom";
import { addNewpet, dPetbyid, getOnepet, updtPet } from "../api/pets";
const PetDetail = () => {
  const [pet, setPet] = useState({});
  const { petId } = useParams();
  const navigate = useNavigate();

  const callAPI = async () => {
    const res = await getOnepet(petId);
    setPet(res);
  };
  const updtPet_ = async () => {
    navigate("/pets");
    return await updtPet(petId, pet.name, pet.type, pet.image, 1);
  };
  useEffect(() => {
    callAPI();
  }, []);
  if (!pet) {
    return <h1>There is no pet with the id:{petId}</h1>;
  }

  return (
    <div className="bg-[#F9E3BE] w-screen h-[100vh] flex justify-center items-center">
      <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
        <div className="h-full w-full md:w-[35%]">
          <img
            src={pet.image}
            alt={pet.name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
          <h1>Name: {pet.name}</h1>
          <h1>Type: {pet.type}</h1>
          <h1>adopted: {pet.adopted}</h1>

          <button
            onClick={updtPet_}
            className="w-[70px] border border-black rounded-md  hover:bg-green-400 mb-5"
          >
            Adobt
          </button>

          <button
            onClick={async () => {
              navigate("/pets");
              return await dPetbyid(petId);
            }}
            className="w-[70px] border border-black rounded-md  hover:bg-red-400"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
