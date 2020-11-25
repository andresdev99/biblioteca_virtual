import React from "react";
import "./App.css";
import { Navbar, Nav, Image } from "react-bootstrap";
import HomeView from "./views/HomeView";
import LibrosView from "./views/LibrosView";
import AgregarLibroView from "./views/AgregarLibroView";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from './assets/Imagenes/logo1.jpg';
function App() {
  return (
    <Router>
      <Navbar expand="lg" className="navbar-custom">
        <Navbar.Brand href=""className="custom-link">
        <Image src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="custom-link" to="/">
              <h4>INICIO</h4>
            </Link>
            <Link className="custom-link" to="/libros">
            <h4>LIBROS</h4>
            </Link>
            <Link className="custom-link" to="/generos">
            <h4>AGREGAR LIBRO</h4>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact={true} path="/" component={HomeView} />
        <Route path="/libros" component={LibrosView} />
        <Route path="/generos" component={AgregarLibroView} />
      </Switch>
    </Router>
  );
}

export default App;
