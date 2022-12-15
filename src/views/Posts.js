import React, { useEffect, useState } from "react";
import NotificationAlert from "react-notification-alert";

// react-bootstrap components
import {
  Alert,
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
import axios from "axios";

function Posts() {
  const [pendings, setPendings] = useState([]);
  const [approved, setApproved] = useState(false);
  const [deny, setDeny] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/pendingsPost").then((response) => {
      console.log(response.data.data);
      setPendings(response.data.data);
    });
  }, [approved, deny]);

  function handleApprove(id) {
    axios
      .put(`http://localhost:8000/api/approve-post/${id}`)
      .then((response) => {
        setApproved(!approved);
      });
  }

  function handleDeny(id) {
    axios.put(`http://localhost:8000/api/deny-post/${id}`).then((response) => {
      setDeny(!deny);
    });
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Posts Request</Card.Title>
                <p className="card-category">Posts Pending</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">User Name</th>
                      <th className="border-0">Post Content</th>

                      <th className="border-0"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {console.log(pendings)}
                    {pendings?.map((pending) => {
                      console.log(pending);
                      return (
                        <tr>
                          <td>{pending.user_info.id}</td>
                          <td>{pending.user_info.first_name}</td>
                          <td>{pending.post_content.slice(0, 30)}...More</td>

                          <td>
                            <button
                              onClick={() => handleApprove(pending.post_id)}
                              className="btn btn-success"
                            >
                              Approve
                            </button>
                          </td>

                          <td>
                            <button
                              onClick={() => handleDeny(pending.post_id)}
                              className="btn btn-danger ms-4"
                            >
                              Deny
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
      </Container>
    </>
  );
}

export default Posts;
