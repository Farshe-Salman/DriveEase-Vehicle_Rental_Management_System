import axios from "axios";

const BASE_URL = "http://localhost:8081/api/auth";


// CUSTOMER REGISTER

export const registerUser = async (userData) => {

    return await axios.post(

        `${BASE_URL}/signup`,
        userData

    );

};


// CUSTOMER LOGIN

export const loginUser = async (loginData) => {

    return await axios.post(

        `${BASE_URL}/login`,
        loginData

    );

};