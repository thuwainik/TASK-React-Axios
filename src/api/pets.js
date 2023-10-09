import instance from ".";
const getAllpets = async () => {
  return (await instance.get("/pets")).data;
};

const getOnepet = async (petId) => {
  const res = await instance.get(`/pets/${petId}`);
  return res.data;
};
export { getAllpets, getOnepet };
