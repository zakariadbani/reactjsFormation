import axios from "axios";
import {
  API_BASE_URL,
  API_BASE_URL_2,
  API_TIMEOUT,
  DEFAULT_HEADERS,
} from "../../config/config";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: DEFAULT_HEADERS,
});
//creer car le baseURL n'est pas le meme je l'utilise pour recuperer les produits
export const apiProduct = axios.create({
  baseURL: API_BASE_URL_2,
  timeout: API_TIMEOUT,
  headers: DEFAULT_HEADERS,
});
