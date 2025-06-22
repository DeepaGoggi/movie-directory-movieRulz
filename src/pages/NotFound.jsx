import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => (
  <Container className="my-4 text-center">
    <h2>Oops! The page you're looking for doesn’t exist. </h2>
    <p>
      <Link to="/">Go back to Home</Link>
    </p>
  </Container>
);

export default NotFound;
