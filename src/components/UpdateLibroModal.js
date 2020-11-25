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

function UpdateLibroModal(props) {
  const { show, handleClose,data } = props;
  const strId = props.data.id;
  const strNombre = props.data.nombre;
  const strAutor = props.data.autor;
  const strGenero = props.data.genero;
  const strFecha = props.data.fecha;
  const strPaginas = props.data.paginas;
  const strDisponibilidad = props.data.disponibilidad;
console.log(data);
  const [generos, setGeneros] = useState();
  const [id, setId] = useState(props.data.id);
  const [nombre, setNombre] = useState(props.data.nombre);
  const [autor, setAutor] = useState(props.data.autor);
  const [publicacion, setPublicacion] = useState(props.data.fecha);
  const [genero, setGenero] = useState(props.data.genero);
  const [valueGenero, setValorGenero] = useState(genero); 
  const [paginas, setPaginas] = useState(props.data.paginas);
  const [disponibilidad, setDisponibilidad] = useState(props.data.disponibilidad);
  const [valorDisponibilidad, setValorDisponibilidad] = useState(disponibilidad);
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
/*
   useEffect(()=>{
    setNombre(strNombre)
    setValorGenero(strGenero);
    setValorDisponibilidad(strDisponibilidad)
    setAutor(strAutor)
    setPublicacion(strFecha)
    setPaginas(strPaginas)
  }) 
  */
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);

    console.log(name, value);

    switch (name) {
      case "id":
        setId(value ? value : null)
        break;
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
        <Modal.Title>Modificar Libro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <FormGroup>
            <FormLabel>ID</FormLabel>
            <FormControl
              name="ID"
              onChange={(e) => handleOnChange(e)}
              value={id ? id : ""}
            />
          </FormGroup>
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
              value={genero ?  genero: ""}
              as="select"
            >
              <option value={valueGenero}>{valueGenero}</option>
              {generos &&
                generos.length > 0 &&
                generos.map((genero, index) => {
                  return <option value= {index} value={genero.id}>{genero.nombre}</option>;
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
          Cancelar
        </Button>
        <Button
                    variant="primary"
                      onClick={() => props.handleUpdateLibro({
                        id : id,
                        nombre : nombre,
                        autor : autor,
                        publicacion,
                        paginas,
                        genero: {
                            id: genero
                        },
                        disponibilidad
                        
                    })}
                    disabled={!id || !nombre || !autor || !publicacion || !paginas
                        || !genero || !disponibilidad}>
                    Actualizar
          </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default UpdateLibroModal;
