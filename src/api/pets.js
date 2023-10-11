import instance from ".";
const getAllpets = async () => {
  return (await instance.get("/pets")).data;
};

const getOnepet = async (petId) => {
  const res = await instance.get(`/pets/${petId}`);
  return res.data;
};
const addNewpet = async (name, type, image, adopted) => {
  await instance.post("/pets", {
    name: name,
    type: type,
    image: image,
    adopted: adopted,
  });
};
const updtPet = async (petId, name, type, image, adopted) => {
  await instance.put(`/pets/${petId}`, {
    name,
    type,
    image,
    adopted,
  });
};
const dPetbyid = async (petId) => {
  await instance.delete(`/pets/${petId}`);
};
export { getAllpets, getOnepet, addNewpet, updtPet, dPetbyid };
