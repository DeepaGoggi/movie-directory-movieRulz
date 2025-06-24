import React from "react";
import { Container } from "react-bootstrap";

const About = () => (
  <Container className="my-4">
    <h2 className="mb-3">About MovieZone</h2>
    <p>
      <strong>MovieZone</strong> is a simple and powerful movie directory web
      app that helps you explore thousands of movies using the{" "}
      <strong>OMDb API</strong>. Whether you're searching for a classic, a new
      release, or something specific by title, MovieZone gives you quick access
      to essential movie information in one place.
    </p>
    <p>
      The app is built using modern web development tools like{" "}
      <strong>React</strong> for UI components,
      <strong> React Router</strong> for seamless navigation,{" "}
      <strong>Vite</strong> for fast development and builds, and
      <strong> Bootstrap</strong> for responsive styling. It’s a great example
      of how a React-based application can interact with a third-party API and
      deliver real-time results.
    </p>
    <p>
      This project is ideal for both learning and showcasing web development
      skills. It's fully responsive, lightweight, and easy to expand with
      features like search filters, ratings, and more.
    </p>
  </Container>
);

export default About;
