/*import axios from "axios";

const API = axios.create({
    baseURL: "https://placement-portal-backend-production-8544.up.railway.app/api"
});

export default API;

import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8082/api"
});

export default API;*/
import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

export default API;