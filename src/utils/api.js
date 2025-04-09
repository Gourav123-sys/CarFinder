import axios from 'axios';

export const getCarModelsByMake = async (make) => {
  try {
    const response = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`);
    return response.data.Results;
  } catch (error) {
    console.error('Error fetching car models:', error);
    return [];
  }
};
