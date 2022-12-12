import React from "react";
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

function Posts() {


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
                      <th className="border-0">User ID</th>
                      <th className="border-0">User Name</th>
                      <th className="border-0">Post Content</th>
                      <th className="border-0">photo</th>
              

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
                      <td><button className="btn btn-success">Approve</button></td>

                      <td><button className="btn btn-danger ms-4">Deny</button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>rama@gmail.com</td>
                      <td>rama</td>
                      <td>User</td>
                      <td>5</td>
                      
                      <td><button className="btn btn-success">Approve</button></td>

                      <td><button className="btn btn-danger ms-4">Deny</button>
                      </td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>rama@gmail.com</td>
                      <td>rama</td>
                      <td>User</td>
                      <td>5</td>
                      <td><button className="btn btn-success" >Approve</button></td>
                      

                      <td><button className="btn btn-danger ms-4">Deny</button>
                      </td>
                    </tr>
                   
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
