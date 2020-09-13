import axios from "axios";

export const sendEmail = (messageBody: {}) => {
        return axios.post("/sendEmail", messageBody)
};