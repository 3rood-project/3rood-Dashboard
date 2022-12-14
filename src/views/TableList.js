
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Modal,
  Form,
} from "react-bootstrap";
import React, { useState } from 'react';
import swal from 'sweetalert';


function TableList() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this item!",
      icon: "error",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your item has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your item is safe!");
      }
    });
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
        <Button variant="success" className={"mb-3"} onClick={handleShow}>
        Add New User
      </Button>
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">All Users </Card.Title>
                <p className="card-category">
                  Here is all registered user for our website
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Password</th>
                      <th className="border-0">Role</th>
                      <th className="border-0">Profile Points</th>

                      <th className="border-0"></th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>rama@gmail.com</td>
                      <td>rama</td>
                      <td>User</td>
                      <td>5</td>

                      <td><button className="btn btn-danger ms-4" onClick={handleDelete}>Delete</button>
                      </td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>rama@gmail.com</td>
                      <td>rama</td>
                      <td>User</td>
                      <td>5</td>

                      <td><button className="btn btn-danger ms-4">Delete</button>
                      </td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>rama@gmail.com</td>
                      <td>rama</td>
                      <td>User</td>
                      <td>5</td>

                      <td><button className="btn btn-danger ms-4">Delete</button>
                      </td>
                    </tr>
                   
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
     {/*-----------Modal------------ */}
      </Container>
      {/* <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add New User</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>

            <MDBInput label='Name' id='name' type='text' />
            <MDBInput label='Email' id='email' type='text' />
            <MDBInput label='Password' id='password' type='text' />
            <MDBInput label='Role' id='role' type='text' />
            <MDBInput label='Profile Points' id='points' type='text' />


            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='danger' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal> */}
      <Modal show={show}  onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicRole">
        <Form.Label>Role</Form.Label>
        <Form.Control type="text" placeholder="Role" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPoints">
        <Form.Label>User's Points</Form.Label>
        <Form.Control type="number" placeholder="Points" />
      </Form.Group>
     <div className="d-flex justify-content-between">
      <Button variant="success" type="submit">
        Submit
      </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          </div>
    </Form>
    </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TableList;
