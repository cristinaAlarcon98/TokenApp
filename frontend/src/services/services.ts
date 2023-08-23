import Axios from "axios";


export const validateToken =  async (tokenValue: String)=> {
    const response = await Axios.get(`http://localhost:4000/api/validate?validateInputValue=${tokenValue}`);
    return response.data
}

export const generateToken =  async (availableDigits: String)=> {
    const response = await Axios.get(`http://localhost:3000/api/generate?generateInputValue=${availableDigits}`);
    return response.data
}