import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const NavBar = () => {
  const productsCount = useSelector((state) => state.cart);
  // localStorage.setItem("productCart", JSON.stringify(productsCount));
  // const productCart = JSON.parse(localStorage.getItem("productCart"));
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
        <Nav>
          <Nav.Link to={"/"} as={Link}>
            Products
          </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Nav.Link to={"/cart"} as={Link}>
              My Bag {productsCount.length}
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
