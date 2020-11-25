import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import GeneroService from "../services/GeneroService";
import LibroService from "../services/LibroService";
import CardLibro from '../components/CardLibro';
import UsuarioService from "../services/UsuarioService";

function CreateReservaModal(props) {
  const { show, handleClose } = props;

  const [libros, setLibros] = useState(null);
  const [id, setId] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [libro, setLibro] = useState(null);
  const [fechaIni, setFechaIni] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);

  useEffect(() => {
    LibroService.get().then(
      (resp) => {
        setLibros(resp.data);
        console.log(resp.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);


  
  
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "id":
        setId(value ? value : null)
        break;
        case "usuario":
          if (value) {
            setUsuario(value);
          } else {
            setUsuario(null);
          }
          break;
          case "libro":
            if (value) {
              setLibro(value);
            } else {
              setLibro(null);
            }
            break;
        case "fechaIni":
        setFechaIni(value ? value : null);
        break;
        case "fechaFin":
        setFechaFin(value ? value : null);
        break;
        default:
        break;
  }
  return (
    <Modal backdrop="static" show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Reservar Libro</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <FormGroup>
          <FormLabel>Referencia de la Reserva:</FormLabel>
          <FormControl
            name="id"
            onChange={(e) => handleOnChange(e)}
            value={id ? id : ""}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Cedula del Usuario:</FormLabel>
          <FormControl
            name="usuario"
            onChange={handleOnChange}
            value={usuario ? usuario : ""}
          ></FormControl>
        </FormGroup>
        <FormGroup>
            <FormLabel>Referencia del Libro</FormLabel>
            <FormControl
              name="libro"
              onChange={handleOnChange}
              value={libro ? libro : ""}
              as="select"
            >
              <option value="">Seleccione Referencia</option>
              {libros &&
                libros.length > 0 &&
                libros.map((libro, index) => {
                  return <option value={index} value={libro.id}>{libro.nombre}</option>;
                })}
            </FormControl>
          </FormGroup>
        <FormGroup>
          <FormLabel>Feche Inicio:</FormLabel>
          <FormControl
            name="fechaIni"
            onChange={handleOnChange}
            value={fechaIni ? fechaIni : ""}
            type="date"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Fecha Final:</FormLabel>
          <FormControl
            name="fechaFin"
            onChange={handleOnChange}
            value={fechaFin ? fechaFin : ""}
          />
        </FormGroup>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancelar
      </Button>
      <Button
                  variant="primary"
                  onClick={() => props.handleSaveReserva({
                      id,
                      usuario,
                      libro: {
                        id: libro
                    },
                      fechaIni,
                      fechaFin
                      
                  })}
                  disabled={!id || !usuario || !libro || !fechaIni
                      || !fechaFin}>
                  Reservar
        </Button>
    </Modal.Footer>
  </Modal>
  );


}
}
export default CreateReservaModal;