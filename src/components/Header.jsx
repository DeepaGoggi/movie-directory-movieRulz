import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand as={Link} to="/">
        MovieZone
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
