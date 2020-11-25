import React, { useState, useEffect } from "react";
import { Container, Row, Col, CardDeck } from "react-bootstrap";
import LibroService from "../services/LibroService";
import CardLibro from "../components/CardLibro";
import Swal from 'sweetalert2';


const LibrosView = () => {
  const [libros, setLibro] = useState(null);

  useEffect(() => {
    handleGetLibro();
  }, []);
  
  const handleGetLibro = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        icon: 'info',
        text: 'Por favor espere...'
    });

    Swal.showLoading();

      const resp = await LibroService.get();
      console.log(resp);
      console.log(resp.data);
      setLibro(resp.data);

      Swal.close();
    } catch (error) {
      Swal.close();
      console.log(error);
    }
  };

  const handleDeleteLibro = (id) => {
    LibroService.delete(id).then((resp) => {
        console.log(resp);
      },
      (err) => {
        console.log("ERROR AL ELIMINAR ", err);
      }
    );
  };
  
  const handledRenderLibros = () => {
    if (!libros || libros.length === 0) {
      return <div>No existen datos</div>;
    }
    const columns = 4;
    let rows = Math.floor(libros.length / columns);
    const resto = libros.length % columns;
    console.log(resto);
    if (resto !== 0) {
      rows = rows + 1;
    }
    console.log(rows);
    const arrayRows = [...Array(rows)];
    return arrayRows.map((row, index) => {
   
      return (

       
        
        
        <p> 
          <br></br>                         
        <CardDeck key={index}>
         
          {libros 
            .slice(
              index === 0 ? index : index * columns,              
              index === 0 ? columns : index * columns + columns
            )
            .map((libro, index) => {
              return (
                <CardLibro
                  key={index}
                  id={libro.id}
                  nombre={libro.nombre}
                  autor={libro.autor}
                  genero={libro.genero.nombre}
                  fecha={libro.publicacion}
                  paginas={libro.paginas}
                  disponibilidad={libro.disponibilidad}
                  handleDeleteLibro={handleDeleteLibro}
                  
                />
              );
            })}
        </CardDeck></p>
      );
    });
  };
  return <Container>{handledRenderLibros()} </Container>;
  /*  return (
    <div className="container">
       <div><ul>{ libros && libros.map((libro, index)=>{ 
      return <li>{libro.id},{libro.nombre},{libro.autor},{libro.publicacion},{libro.paginas}</li>
      }) 
    }</ul></div> 
    </div>
   ); */
};
export default LibrosView;
