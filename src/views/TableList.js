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
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import axios from "axios";

// we will back to it tomorrow ==================================================
function TableList() {
  const [users, setUsers] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role: "",
  });

  // get all users to show in the dashboard
  useEffect(() => {
    axios.get("http://localhost:8000/api/users").then((response) => {
      console.log(response);
      setUsers(response.data.data);
    });
  }, [deleted]);

  const handleChange = (e) => {
    seCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this item!",
      icon: "error",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your item has been deleted!", {
          icon: "success",
        });
        axios
          .get(`http://localhost:8000/api/delete-user/${id}`)
          .then((response) => {
            console.log(response);
            setDeleted(!deleted);
          });
      } else {
        swal("Your item is safe!");
      }
    });
  };
  if (users.length == 0) {
    return;
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
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
                      <th className="border-0">Role</th>
                      <th className="border-0">Profile Points</th>

                      <th className="border-0"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => {
                      return (
                        <tr>
                          <td>{user.user_id}</td>
                          <td>{user.firstName}</td>
                          <td>{user.email}</td>
                          <td>{user.role}</td>
                          <td>{user.userPoints}</td>
                          <td>
                            <button
                              className="btn btn-danger ms-4"
                              onClick={() => handleDelete(user.user_id)}
                            >
                              Deactivate
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/*-----------Modal------------ */}
      </Container>
    </>
  );
}

export default TableList;
