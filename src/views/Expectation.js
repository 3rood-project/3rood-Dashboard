import axios from "axios";
import { MDBIcon } from "mdb-react-ui-kit";
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
  Modal,
  Form,
} from "react-bootstrap";
import AddExpectation from "./AddExpectation";
import EditExpectation from "./EditExpectation";

function AllExpectation() {
  const [allExpectation, setAllExpectation] = useState([]);
  const [add, setAdd] = useState(false);
  const [update, setUpdate] = useState(false);
  const [deleteExpectation, setDeleteExpectation] = useState(false);
  const [optSmModal2, setOptSmModal2] = useState(false);
  const [optSmModal1, setOptSmModal1] = useState(false);
  // const [show, setShow] = useState(false);
  // const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);
  const toggleShow2 = () => setOptSmModal2(!optSmModal2);
  const toggleShow1 = () => setOptSmModal1(!optSmModal1);
  // state for add article
  const [newExpectation, setNewExpectation] = useState({
    team_1: "",
    team_1_picture: "",
    team_2: "",
    team_2_picture: "",
    date: "",
    points: "",
    result: "",
  });

  useEffect(() => {
    axios.get("http://localhost:8000/api/expectation").then((response) => {
      // console.log(response.data.data);
      setAllExpectation(response.data.data);
    });
  }, [deleteExpectation, add, update]);

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
  // to add new article
  // function handleSubmitAddExpectation(e) {
  //   e.preventDefault();

  //   const config = {
  //     method: "post",
  //     url: "http://localhost:8000/api/addExpectation",
  //     headers: {
  //       Accept: "application/vnd.api+json",
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     data: qs.stringify(newArticle),
  //   };

  //   axios(config).then((res) => {
  //     console.log(res);
  //     setUpdated(!updated);
  //     setShow(false);
  //   });
  // }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Button variant="success" className={"mb-3"} onClick={toggleShow1}>
              Add New Article
            </Button>
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">All Expectation</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped text-center">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">First Team </th>
                      <th className="border-0">First Team logo </th>
                      <th className="border-0">Second Team</th>
                      <th className="border-0">Second Team logo</th>
                      <th className="border-0">Points</th>
                      <th className="border-0">Date</th>
                      <th className="border-0">Result </th>
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
                          <td>{expectation.points}</td>
                          <td>{expectation.date}</td>
                          <td>{expectation.result}</td>
                          <td>
                            <button
                              className="btn btn-danger ms-4"
                              onClick={() => handleDelete(expectation.id)}
                            >
                              Remove
                            </button>
                          </td>
                          <td>
                            <div>
                              <MDBIcon
                                icon="edit"
                                onClick={toggleShow2}
                                style={{ fontSize: 20, cursor: "pointer" }}
                              />
                              <EditExpectation
                                toggleShow={toggleShow2}
                                setBasicModal={setOptSmModal2}
                                basicModal={optSmModal2}
                                expectation={expectation}
                                update={update}
                                setUpdate={setUpdate}
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
      <AddExpectation
        toggleShow={toggleShow1}
        setBasicModal={setOptSmModal1}
        basicModal={optSmModal1}
        add={add}
        setAdd={setAdd}
      />
      {/*}  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Expectation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSubmitAddExpectation(e)}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Author</Form.Label>
              <Form.Control
                name="author"
                // value={newArticle.author}
                onChange={(e) => handleSubmitAddExpectation(e)}
                type="text-area"
                placeholder="Enter Author name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>ARTICLE TITLE</Form.Label>
              <Form.Control
                name="title"
                // value={newArticle.title}
                onChange={(e) => handleSubmitAddExpectation(e)}
                type="text"
                placeholder="ARTICLE TITLE"
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>ARTICLE IMAGE</Form.Label>
              <Form.Control name="image" type="file" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicExcerpt">
              <Form.Label>ARTICLE EXCERPT</Form.Label>
              <Form.Control
                name="excerpt"
                // value={newArticle.excerpt}
                onChange={(e) => handleSubmitAddExpectation(e)}
                as="textarea"
                type="text"
                placeholder="ARTICLE EXCERPT"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicContent">
              <Form.Label>ARTICLE CONTENT</Form.Label>
              <Form.Control
                name="summary"
                // value={newArticle.summary}
                onChange={(e) => handleSubmitAddExpectation(e)}
                as="textarea"
                type="text"
                placeholder="ARTICLE CONTENT"
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" type="submit">
                Add
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
                  </Modal>*/}
    </>
  );
}

export default AllExpectation;
