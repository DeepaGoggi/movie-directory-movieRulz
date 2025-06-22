// import { Navbar, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const Header = () => (
//   <Navbar bg="dark" variant="dark">
//     <Container>
//       <Navbar.Brand as={Link} to="/">
//         🎬MovieZone
//       </Navbar.Brand>
//     </Container>
//   </Navbar>
// );

// export default Header;
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm py-3">
    <Container>
      <Navbar.Brand
        as={Link}
        to="/"
        style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#ffffff" }}
      >
        <i
          className="bi bi-collection-play-fill"
          style={{ marginRight: "10px" }}
        ></i>
        MovieZone
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" className="me-3">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
