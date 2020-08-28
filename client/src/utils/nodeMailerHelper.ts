import axios from "axios";

export default {
    sendEmail: function(messageBody: {}) {
        return axios.post("/sendEmail", messageBody)
    }
};