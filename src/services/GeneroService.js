import { AxiosInstance } from "../config/axios-config"

class GeneroService {
    get() {
        return AxiosInstance.get("genero");
    }
}

export default new GeneroService();