import axios from "axios";

const instance = axios.create({

     baseURL : 'http://127.0.0.1:5001/challenge-e0ac9/us-central1/api' //The API (Cloud function) Url

});

export default instance;