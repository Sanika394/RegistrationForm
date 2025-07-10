import React, { useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import ViewDetail from './ViewDetail';

function StudentTable({ submittedData, setSubmittedData, setFormData, setIsEditing, setEditIndex }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      const updatedData = submittedData.filter((_, i) => i !== index);
      setSubmittedData(updatedData);
    }
  };

  const handleView = (entry) => {
    setSelectedEntry(entry);
    setShowModal(true);
  };

  const handleEdit = (index) => {
    setFormData(submittedData[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <Container className="mt-5">
      <h3 className="text-center">Submitted Data</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Mobile</th>
            <th>Degree</th>
            <th>Year</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.length > 0 ? (
            submittedData.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.fullName}</td>
                <td>{entry.email}</td>
                <td>{entry.rollNo}</td>
                <td>{entry.mobile}</td>
                <td>{entry.degree}</td>
                <td>{entry.year}</td>
                <td>
                  <Button variant="info" size="sm" onClick={() => handleView(entry)}>
                    View
                  </Button>{' '}
                  <Button variant="warning" size="sm" onClick={() => handleEdit(index)}>
                    Edit
                  </Button>{' '}
                  <Button variant="danger" size="sm" onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center text-muted">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <ViewDetail show={showModal} handleClose={() => setShowModal(false)} entry={selectedEntry} />
    </Container>
  );
}

export default StudentTable;
