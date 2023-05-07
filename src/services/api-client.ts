import axios from "axios";

export const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e1305eea9c6947e9bb95248f01c3be67',
    }
})