import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import LibroService from "../services/LibroService";
import "../styles/HomeView.css";
import Libro1 from "../img/Libros.svg";
import Libro2 from "../img/Libros2.svg";
import Libro3 from "../img/Libros3.svg";
const HomeView = () => {
  /*  const [libros, setLibro] = useState(null);
  useEffect(() => {
    handleGetLibro();
  }, []);
  const handleGetLibro = async () => {
    try {
      const resp = await LibroService.get();
      console.log(resp);
      console.log(resp.data);
      setLibro(resp.data);
    } catch (error) {
      console.log(error);
    }
  };  */
  return (
    <div className="container">
      {/*  <div><ul>{ libros && libros.map((libro, index)=>{ 
      return <li>{libro.id},{libro.nombre},{libro.autor},{libro.publicacion},{libro.paginas}</li>
      }) 
    }</ul></div>  */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Libro1} alt="Book" />
          <Carousel.Caption>
            <h3>Apuntate a la facilidad de leer</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Libro2} alt="Third slide" />

          <Carousel.Caption>
            <h3>Aprender cosas nuevas.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Libro3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Entrar a un nuevo mundo.</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default HomeView;
