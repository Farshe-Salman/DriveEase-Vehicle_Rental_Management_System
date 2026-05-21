import axios from "axios";

const API_BASE_URL = "http://localhost:8081/api/vehicles";

export const getAllVehicles = async () => {
  return await axios.get(API_BASE_URL);
};