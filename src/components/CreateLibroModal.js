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

function CreateLibroModal(props) {
  const { show, handleClose } = props;

  const [generos, setGeneros] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [autor, setAutor] = useState(null);
  const [publicacion, setPublicacion] = useState(null);
  const [genero, setGenero] = useState(null);
  const [paginas, setPaginas] = useState(null);
  const [disponibilidad, setDisponibilidad] = useState(null);

  useEffect(() => {
    GeneroService.get().then(
      (resp) => {
        setGeneros(resp.data);
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

    console.log(name, value);

    console.log(name, value);

    switch (name) {
      case "nombre":
        setNombre(value ? value : null);
        break;
      case "genero":
        if (value) {
          setGenero(value);
        } else {
          setGenero(null);
        }
        break;
      case "autor":
        setAutor(value ? value : null);
        break;
      case "publicacion":
        setPublicacion(value ? value : null);
        break;
      case "paginas":
        setPaginas(value ? value : null);
        break;
      case "disponibilidad":
        setDisponibilidad(value ? value : null);
        break;
      default:
        break;
    }
  };

  return (
    <Modal backdrop="static" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Libro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup>
            <FormLabel>Nombre:</FormLabel>
            <FormControl
              name="nombre"
              onChange={(e) => handleOnChange(e)}
              value={nombre ? nombre : ""}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Autor:</FormLabel>
            <FormControl
              name="autor"
              onChange={handleOnChange}
              value={autor ? autor : ""}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Género:</FormLabel>
            <FormControl
              name="genero"
              onChange={handleOnChange}
              value={genero ? genero : ""}
              as="select"
            >
              <option value="">Seleccione Genero</option>
              {generos &&
                generos.length > 0 &&
                generos.map((genero, index) => {
                  return <option value={index} value={genero.id}>{genero.nombre}</option>;
                })}
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel>Año de Publicacion</FormLabel>
            <FormControl
              name="publicacion"
              onChange={handleOnChange}
              value={publicacion ? publicacion : ""}
              type="date"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Numero de Paginas</FormLabel>
            <FormControl
              name="paginas"
              onChange={handleOnChange}
              value={paginas ? paginas : ""}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Diponibilidad del Libro</FormLabel>
            <FormControl
              name="disponibilidad"
              onChange={handleOnChange}
              value={disponibilidad ? disponibilidad : ""}
              as="select"
            >
                <option value="">Seleccione Disponibilidad</option>
                <option value="0">true</option>;
                <option value="1">false</option>;
            </FormControl>
          </FormGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button
                    variant="primary"
                    onClick={() => props.handleSaveLibro({
                        nombre,
                        autor,
                        publicacion,
                        paginas,
                        genero: {
                            id: genero
                        },
                        disponibilidad
                        
                    })}
                    disabled={!nombre || !autor || !publicacion || !paginas
                        || !genero || !disponibilidad}>
                    Guardar
          </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default CreateLibroModal;
