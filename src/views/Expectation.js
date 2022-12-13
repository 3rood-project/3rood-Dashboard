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

function AllExpectation() {
  const [allExpectation, setAllExpectation] = useState([]);
  const [deleteExpectation, setDeleteExpectation] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/expectation").then((response) => {
      console.log(response.data.data);
      setAllExpectation(response.data.data);
    });
  }, [deleteExpectation]);

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
          .delete(`http://localhost:8000/api/delete-expectation/${id}`)
          .then((response) => {
            console.log(response.data.data);

            setDeleteExpectation(!deleteExpectation);
          });
      } else {
        swal("Your item is safe!");
      }
    });
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">All Expectation</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">First Team </th>
                      <th className="border-0">First Team logo </th>
                      <th className="border-0"> Second Team</th>
                      <th className="border-0"> Second Team logo</th>
                      <th className="border-0">Result </th>
                      <th className="border-0">Date</th>

                      <th className="border-0">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allExpectation.map((expectation) => {
                      return (
                        <tr key={expectation.id}>
                          <td>{expectation.id}</td>
                          <td>{expectation.team_1}</td>
                          <td>
                            <img
                              src={expectation.team_1_picture}
                              alt="alt image"
                            />
                          </td>
                          <td>{expectation.team_2}</td>
                          <td>
                            <img
                              src={expectation.team_2_picture}
                              alt="alt image"
                            />
                          </td>
                          <td>{expectation.result}</td>{" "}
                          <td>{expectation.points}</td>
                          <td>
                            <td>{expectation.date}</td>{" "}
                          </td>
                          <td>
                            <button
                              className="btn btn-danger ms-4"
                              onClick={() => handleDelete(expectation.id)}
                            >
                              Remove
                            </button>

                            <div>
                              <MDBIcon
                                fas
                                icon="edit"
                                onClick={toggleShow2}
                                style={{ fontSize: 20, cursor: "pointer" }}
                              />
                              <EditPost
                                toggleShow={toggleShow2}
                                setBasicModal={setOptSmModal2}
                                basicModal={optSmModal2}
                                postId={postData.postId}
                              />
                              <MDBIcon
                                fas
                                icon="trash-alt"
                                className="ms-3 text-danger"
                                style={{ fontSize: 20, cursor: "pointer" }}
                              />
                            </div>
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

export default AllExpectation;
