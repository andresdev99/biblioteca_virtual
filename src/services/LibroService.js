import { AxiosInstance } from "../config/axios-config"

class LibroService {
    get() {
        return AxiosInstance.get("libro");
    }

    delete(id) {
        return AxiosInstance.delete(`libro/delete/${id}`);
    }

    create(libro) {
        return AxiosInstance.post('libro/create', libro);
    }

    update(id,libro) {
        return AxiosInstance.put(`libro/update/${id}`, libro);
    }
}

export default new LibroService();