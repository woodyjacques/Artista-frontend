import axios from "axios";
import { api } from "./Urls";

const token = localStorage.getItem("ACCESS_TOKEN");

export async function obtenerEventos() {
    try {
        const response = await axios.get(`${api}/eventos`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function obtenerClubs() {
    try {
        const response = await axios.get(`${api}/clubs`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function obtenercampañas() {
    try {
        const response = await axios.get(`${api}/campanas`);
        return response.data;
    } catch (error) {
        throw error;
    }
}