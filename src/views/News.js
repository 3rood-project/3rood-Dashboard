import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

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
const qs = require("qs");

function News() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [viewArticle, setViewArticle] = useState({});
  // handel tow modals states================
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updated, setUpdated] = useState(false);
  const [currentModalAtricle, setCurrentModalAtricle] = useState({
    title: "",
    author: "",
    publish_date: "",
    excerpt: "",
    summary: "",
    // media: ''
  });

  // state for add article
  const [newArticle, setNewArticle] = useState({
    author: "",
    title: "",
    image: "",
    excerpt: "",
    summary: "",
  });

  // handle add new atricle inputs
  function handleAddNewArticle(e) {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
  }

  // to add new article
  function handleSubmitAddArticle(e) {
    e.preventDefault();

    const config = {
      method: "post",
      url: "http://localhost:8000/api/add-article",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(newArticle),
    };

    axios(config).then((res) => {
      console.log(res);
      setUpdated(!updated);
      setShow(false);
    });
  }

  // to get all articles
  useEffect(() => {
    axios.get("http://localhost:8000/api/all-articles").then((res) => {
      console.log(res.data.data);
      setAllArticles(res.data.data);
    });
  }, [updated]);

  //filter all articles to get only the approved
  const handleShow2 = (id) => {
    setShow2(true);
    let art = allArticles.filter((art) => art.article_id == id);
    console.log(art[0]);
    setCurrentModalAtricle(art[0]);
  };

  const handleClose2 = () => setShow2(false);
  //end handel tow modals states =============

  const [allArticles, setAllArticles] = useState([]);

  // handle the modal current article
  function handleChange(e) {
    setCurrentModalAtricle({
      ...currentModalAtricle,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  }

  // handle the update one aritcle in the modal
  function handleSubmit(e, id) {
    e.preventDefault();
    console.log(id);

    const config = {
      method: "put",
      url: `http://localhost:8000/api/update-article/${id}`,
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(currentModalAtricle),
    };

    axios(config).then((res) => {
      console.log(res);
      setUpdated(!updated);
      setShow2(false);
    });
  }

  // handle delete one aritcle
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
          .delete(`http://localhost:8000/api/delete-article/${id}`)
          .then((resp) => {
            console.log(resp);
            setUpdated(!updated);
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
            <Button variant="success" className={"mb-3"} onClick={handleShow}>
              Add New Article
            </Button>

            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Sport Articles</Card.Title>
                <p className="card-category">Here is all Sport Articles.</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Author</th>
                      <th className="border-0">Article Title</th>
                      <th className="border-0">Article Content</th>
                      <th className="border-0">Publish Date</th>
                      <th className="border-0"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {allArticles.map((article) => {
                      return (
                        <tr>
                          <td>{article.article_id}</td>
                          <td>{article.author ? article.author : "Rama"}</td>
                          <td>
                            {article.title.slice(0, 30)}
                            <b>...</b>
                          </td>
                          <td>
                            {article.summary.slice(0, 30)}
                            <b>...</b>{" "}
                          </td>
                          <td>{article.published_date}</td>
                          <td>
                            <button
                              className="btn btn-success "
                              onClick={() => handleShow2(article.article_id)}
                            >
                              Edit
                            </button>
                          </td>

                          <td>
                            <button
                              className="btn btn-danger "
                              onClick={() => handleDelete(article.article_id)}
                            >
                              Remove
                            </button>
                          </td>

                          <td>
                            <MDBBtn
                              color="warning"
                              onClick={() => {
                                toggleShow(), setViewArticle(article);
                              }}
                              // onClick={() => handelView()}
                            >
                              View
                            </MDBBtn>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSubmitAddArticle(e)}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Author</Form.Label>
              <Form.Control
                name="author"
                value={newArticle.author}
                onChange={(e) => handleAddNewArticle(e)}
                type="text-area"
                placeholder="Enter Author name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>ARTICLE TITLE</Form.Label>
              <Form.Control
                name="title"
                value={newArticle.title}
                onChange={(e) => handleAddNewArticle(e)}
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
                value={newArticle.excerpt}
                onChange={(e) => handleAddNewArticle(e)}
                as="textarea"
                type="text"
                placeholder="ARTICLE EXCERPT"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicContent">
              <Form.Label>ARTICLE CONTENT</Form.Label>
              <Form.Control
                name="summary"
                value={newArticle.summary}
                onChange={(e) => handleAddNewArticle(e)}
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
      </Modal>
      {/* -------------------------------------------------*/}
      {currentModalAtricle ? (
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Add New User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={(e) => {
                handleSubmit(e, currentModalAtricle.article_id);
              }}
            >
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  name="author"
                  value={currentModalAtricle.author}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="author name"
                />
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>ARTICLE PHOTO</Form.Label>
                <Form.Control name="list_media" type="file" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>ARTICLE TITLE</Form.Label>
                <Form.Control
                  name="title"
                  value={currentModalAtricle.title}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="ARTICLE TITLE"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicContent">
                <Form.Label>ARTICLE CONTENT</Form.Label>
                <Form.Control
                  name="summary"
                  value={currentModalAtricle.summary}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  as="textarea"
                  style={{ height: "100px" }}
                  placeholder="ARTICLE CONTENT"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicContent">
                <Form.Label>ARTICLE EXCERPT</Form.Label>
                <Form.Control
                  name="excerpt"
                  value={currentModalAtricle.excerpt}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  as="textarea"
                  style={{ height: "100px" }}
                  placeholder="ARTICLE EXCERPT"
                />
              </Form.Group>

              <div className="d-flex justify-content-between">
                <Button variant="danger" onClick={handleClose2}>
                  Close
                </Button>
                <Button variant="success" type="submit">
                  Update
                </Button>
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      ) : (
        ""
      )}
      {/****************************** */}
      <>
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>{viewArticle.title}</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  style={{ backgroundColor: "#fff" }}
                  onClick={toggleShow}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <p> By: {viewArticle.author}</p>
                <p> At: {viewArticle.published_date}</p>
                <p>{viewArticle.summary}</p>
              </MDBModalBody>

              <MDBModalFooter>
                <MDBBtn
                  style={{ backgroundColor: "#751f4a" }}
                  onClick={toggleShow}
                >
                  Close
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
      );
    </>
  );
}

export default News;
