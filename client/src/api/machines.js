import axios from "axios";

const URL = "https://muir-app.herokuapp.com/machines";

export const getMachines = () => axios.get(URL);
export const updateMachine = (id, updatedMachine) =>
  axios.patch(`${URL}/${id}`, updatedMachine);
