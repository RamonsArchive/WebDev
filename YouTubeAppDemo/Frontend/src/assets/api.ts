import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const API_KEY = import.meta.env.VITE_RAPID_API_KEY;

const options = {
  method: "GET",
  params: {
    maxResults: 50,
  },
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url: string): Promise<any> => {
  try {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
    
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Axios error:", err.message);
      console.error("Response status:", err.response?.status);
    } else {
      console.log(`Unkown Error: ${err}`);
    }
  }
};
