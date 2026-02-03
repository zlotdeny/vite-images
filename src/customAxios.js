import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

export const customFetch = axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        "Authorization": `Client-ID ${apiKey}`
    }
});