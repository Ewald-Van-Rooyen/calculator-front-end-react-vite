import axios from "axios";

export function postCalculation(url, calculation) {
    return axios.post(url, { calculation });
}
