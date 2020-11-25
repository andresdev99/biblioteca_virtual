import { AxiosInstance } from "../config/axios-config"

class ReservaService {

    create(reserva) {
        return AxiosInstance.post('reserva/create', reserva);
    }
}

export default new ReservaService();