import axios from "axios";
import React, { useEffect, useState } from "react";

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
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessageReducers } from "reducers/ContactReducers";
import Swal from "sweetalert2";

function Products() {
  const dispatch = useDispatch();
  const allMessages = useSelector((state) => state.allMessages.allMessages);
  useEffect(() => {
    dispatch(fetchMessageReducers());
  }, []);
  console.log(allMessages);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Contact Messages</Card.Title>
                <p className="card-category">Here is All Messages.</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">From</th>
                      <th className="border-0">Send Date</th>

                      <th className="border-0">Sender Email</th>

                      <th className="border-0">Message</th>
                      <th className="border-0"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {allMessages.map((message) => {
                      return (
                        <tr key={message.id}>
                          <td>{message.name}</td>
                          <td>{message.created_at.slice(0, 10)}</td>
                          <td>{message.email} </td>

                          <td>{message.message}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Products;
