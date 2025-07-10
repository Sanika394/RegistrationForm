import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import StudentTable from './StudentTable';
import './Style.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    rollNo: '',
    mobile: '',
    degree: '',
    year: ''
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedData = submittedData.map((entry, index) =>
        index === editIndex ? formData : entry
      );
      setSubmittedData(updatedData);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setSubmittedData([...submittedData, formData]);
      setSubmitted(true);
    }

    setFormData({
      fullName: '',
      email: '',
      rollNo: '',
      mobile: '',
      degree: '',
      year: ''
    });
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      rollNo: '',
      mobile: '',
      degree: '',
      year: ''
    });
    setIsEditing(false);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center mb-4">{isEditing ? 'Edit Entry' : 'Registration Form'}</h2>
          {submitted && <Alert variant="success">Form Submitted Successfully!</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Roll Number</Form.Label>
              <Form.Control
                type="text"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                placeholder="Enter your roll number"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Degree</Form.Label>
              <Form.Control
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                placeholder="Enter your degree"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Year</Form.Label>
              <Form.Control
                as="select"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
              >
                <option value="">Select your year</option>
                <option value="First Year">First Year</option>
                <option value="Second Year">Second Year</option>
                <option value="Third Year">Third Year</option>
                <option value="Final Year">Final Year</option>
              </Form.Control>
            </Form.Group>

            <Row>
              <Col>
                <Button variant={isEditing ? 'success' : 'primary'} type="submit" className="w-100">
                  {isEditing ? 'Update' : 'Submit'}
                </Button>
              </Col>
              <Col>
                <Button variant="secondary" type="button" className="w-100" onClick={handleReset}>
                  Reset
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      <StudentTable
        submittedData={submittedData}
        setSubmittedData={setSubmittedData}
        setFormData={setFormData}
        setIsEditing={setIsEditing}
        setEditIndex={setEditIndex}
      />
    </Container>
  );
}

export default RegistrationForm;
