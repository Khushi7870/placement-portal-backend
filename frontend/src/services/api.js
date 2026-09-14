import axios from "axios";

const API = axios.create({
    baseURL: "https://placement-portal-backend-production-8544.up.railway.app/api"
});

export default API;