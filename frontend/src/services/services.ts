import Axios from "axios";

export const validateToken =  async (tokenValue: String)=> {
    const response = await Axios.get(`${process.env.REACT_APP_VALIDATOR_URL}/api/validate?validateInputValue=${tokenValue}`);
    return response.data
}

export const generateToken =  async (availableDigits: String)=> {
    const response = await Axios.get(`${process.env.REACT_APP_GENERATOR_URL}/api/generate?generateInputValue=${availableDigits}`);
    return response.data
}