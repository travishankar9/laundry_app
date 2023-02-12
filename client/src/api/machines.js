import axios from "axios";

const URL = "https://muir-laundry-app-api.onrender.com";

export const getMachines = () => axios.get(URL);
export const updateMachine = (id, updatedMachine) =>
  axios.patch(`${URL}/${id}`, updatedMachine);
