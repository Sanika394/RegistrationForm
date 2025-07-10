import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import RegistrationForm from './Registrationform'; // Import the form component

function Header() {
  return (
    <>
      {/* Navbar Section */}
      <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">Student Registration Portal</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container>
        <RegistrationForm /> {/* Include the form */}
      </Container>
    </>
  );
}

export default Header;
