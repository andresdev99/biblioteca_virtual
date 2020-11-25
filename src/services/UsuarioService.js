import { AxiosInstance } from "../config/axios-config"

class UsuarioService {
    get() {
        return AxiosInstance.get("usuario");
    }
    post() {
        return AxiosInstance.post("")
    }
}

export default new UsuarioService();