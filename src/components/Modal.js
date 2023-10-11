import React, { useState } from "react";
import Input from "./Input";
import { addNewpet } from "../api/pets";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ show, setShowModal }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [available, setAvailable] = useState(0);
  const navigate = useNavigate();
  if (!show) return "";

  const callAPI = async () => {
    return await addNewpet(name, type, image, available);
  };

  return (
    <div
      className="inset-0 fixed  flex justify-center items-center flex-col z-20 overflow-hidden 
  "
    >
      <div className="bg-black absolute z-0 opacity-70 inset-0 "></div>
      <div className="relative z-10 flex flex-col gap-3 border-[3px] border-black rounded-md w-[95%] md:w-[40%] h-[300px] md:h-[30%] bg-white pt-[50px]">
        <button
          className="right-0 top-2 absolute w-[70px] border border-black rounded-md ml-auto mr-5 hover:bg-red-400"
          onClick={() => {
            setShowModal(false);
          }}
        >
          Close
        </button>
        <Input
          name="Pet Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          name="Pet Type"
          onChange={(e) => {
            setType(e.target.value);
          }}
        />
        <Input
          name="Pet Image Link"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <Input
          name="Pet adopted?"
          onChange={(e) => {
            setAvailable(e.target.value);
          }}
        />

        <button
          onClick={() => {
            callAPI();
            setShowModal(false);
            navigate("/pets");
          }}
          className="w-[70px] border border-black rounded-md ml-auto mr-5 hover:bg-green-400"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Modal;
