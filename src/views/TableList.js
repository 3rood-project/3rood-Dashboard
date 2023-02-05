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
import Swal from "sweetalert2";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "reducers/UsersReducers";

// we will back to it tomorrow ==================================================
function TableList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  // get all users to show in the dashboard
  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, []);

  const handleDelete = (id) => {
    const config = {
      method: "delete",
      url: `http://127.0.0.1:8000/api/deleteUser/${id}`,
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization: "Bearer 2|i2GfvbsLjqnHHJXtZNftgQZFl5fxz5beWP8iBpBG",
      },
    };
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this item!",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#332d2d",
      cancelButtonColor: "#dc4c64",
      confirmButtonText: "Yes, Continue",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.request(config).then((response) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-right",
            iconColor: "white",
            customClass: {
              popup: "colored-toast",
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          Toast.fire({
            icon: "success",
            title: "user  deleted successfully",
          });
          dispatch(fetchUsers());
        });
      }
    });
  };
  const handleRoleChange = (id, role) => {
    const config = {
      method: "post",
      url: `http://127.0.0.1:8000/api/changeRole/${id}`,
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization: "Bearer 2|i2GfvbsLjqnHHJXtZNftgQZFl5fxz5beWP8iBpBG",
      },
      data: { role },
    };
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#332d2d",
      cancelButtonColor: "#dc4c64",
      confirmButtonText: "Yes, Continue",
    }).then((result) => {
      if (result.isConfirmed) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "white",
          customClass: {
            popup: "colored-toast",
          },
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "success",
          title: "user's role changed successfully",
        });
        axios.request(config).then((response) => {
          console.log(response);
          dispatch(fetchUsers());
        });
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
                      <th className="border-0">Profile</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Role</th>
                      <th className="border-0">Phone Number</th>

                      <th className="border-0"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => {
                      return (
                        <tr>
                          <td>
                            <img src={user.useProfile} alt="" width={40} />
                          </td>
                          <td>{user.firstName + user.lastName}</td>
                          <td>{user.userEmail}</td>
                          <td>{user.role}</td>
                          <td>{user.phoneNumber}</td>
                          <td>
                            {user.role === "user" ? (
                              <button
                                className="btn btn-warning ms-4  "
                                style={{ width: 130 }}
                                onClick={() =>
                                  handleRoleChange(user.user_id, "admin")
                                }
                              >
                                Make Admin
                              </button>
                            ) : (
                              <button
                                className="btn btn-success ms-4 "
                                style={{ width: 130 }}
                                onClick={() =>
                                  handleRoleChange(user.user_id, "user")
                                }
                              >
                                Make user
                              </button>
                            )}
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
