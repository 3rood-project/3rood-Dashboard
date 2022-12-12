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
  Modal,
  Form,
} from "react-bootstrap";
const qs = require('qs');

function News() {


  // handel tow modals states================
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updated, setUpdated] = useState(false);

  const [currentModalAtricle, setCurrentModalAtricle] = useState({
    title : '',
    author: '',
    publish_date:'',
    excerpt:'' ,
    summary:'',
    // media: ''
  });


  useEffect(()=> {
    axios.get('http://localhost:8000/api/all-articles').then((res) => {
      console.log(res.data.data);
      setAllArticles(res.data.data)
    })
  },[updated])

  const handleShow2 = (id) => {
    setShow2(true)
    let art = allArticles.filter((art) => art.article_id == id)
    console.log(art[0]);
    setCurrentModalAtricle(art[0]);
  }

  const handleClose2 = () => setShow2(false);
  //end handel tow modals states =============


  const [allArticles, setAllArticles] = useState([]);

  function handleChange(e){
    setCurrentModalAtricle({ ...currentModalAtricle, [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  function handleSubmit(e, id){
    e.preventDefault();
    console.log(id);

    const config = {
      method: 'put',
      url: `http://localhost:8000/api/update-article/${id}`,
      headers: { 
        'Accept': 'application/vnd.api+json', 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : qs.stringify(currentModalAtricle)
    };

    axios(config).then((res) => {
      console.log(res);
      setUpdated(!updated);
      setShow2(false);
    })
  }



  const handleDelete = () => {
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
                      {/* <th className="border-0">Publish Date</th> */}
                      <th className="border-0"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {allArticles.map((article) => {

                    return <tr>
                      <td>{article.article_id}</td>
                      <td>{article.author}</td>
                      <td>{article.title}</td>
                      <td>{article.summary}</td>
                      {/* <td>{article.published_date}</td> */}
                      <td>
                        <button
                          className="btn btn-success "
                          onClick={() => handleShow2(article.article_id)}>
                          Edit
                        </button>
                      </td>

                      <td>
                        <button
                          className="btn btn-danger ms-4"
                          onClick={handleDelete}>
                          Delete
                        </button>
                      </td>
                    </tr>
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
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>ARTICLE TITLE</Form.Label>
              <Form.Control type="text" placeholder="ARTICLE TITLE" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicContent">
              <Form.Label>ARTICLE CONTENT</Form.Label>
              <Form.Control type="text" placeholder="ARTICLE CONTENT" />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>ARTICLE PHOTO</Form.Label>
              <Form.Control type="file" />
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
        <Modal.Footer></Modal.Footer>
      </Modal>

      {/* -------------------------------------------------*/}
       {currentModalAtricle ? (

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => {
            handleSubmit(e, currentModalAtricle.article_id)
            }}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Author</Form.Label>
              <Form.Control name="author" value={currentModalAtricle.author} onChange={(e) => handleChange(e)} type="text" placeholder="author name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>ARTICLE TITLE</Form.Label>
              <Form.Control name="title"  value={currentModalAtricle.title} onChange={(e) => handleChange(e)} type="text" placeholder="ARTICLE TITLE" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicContent">
              <Form.Label>ARTICLE CONTENT</Form.Label>
              <Form.Control name="summary"  value={currentModalAtricle.summary} onChange={(e) => handleChange(e)} type="text" placeholder="ARTICLE CONTENT" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicContent">
              <Form.Label>ARTICLE Excerpt</Form.Label>
              <Form.Control name="excerpt"  value={currentModalAtricle.excerpt} onChange={(e) => handleChange(e)} type="text" placeholder="ARTICLE CONTENT" />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>ARTICLE PHOTO</Form.Label>
              <Form.Control name="list_media"  type="file" />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button variant="success" type="submit">
                Submit
              </Button>
              <Button variant="danger" onClick={handleClose2}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

       ) : (
        ''
       )}
    </>
  );
}

export default News;
