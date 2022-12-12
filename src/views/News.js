import React ,{useState}from "react";

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

function News() {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

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
        Add New Article
      </Button>
 
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Sport Articles</Card.Title>
                <p className="card-category">
                  Here is all Sport Articles.
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">User ID</th>
                      <th className="border-0">Article Title</th>
                      <th className="border-0">Article Content</th>
                      <th className="border-0">Article Photo</th>
                      <th className="border-0"></th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td><button className="btn btn-success " onClick={handleShow2}>Edit</button></td>

                      <td><button className="btn btn-danger ms-4" onClick={handleDelete}>Delete</button></td>

                    </tr>
                    
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Table on Plain Background</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>$63,542</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col> */}
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
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>

      {/* -------------------------------------------------*/}
      <Modal show={show2} onHide={handleClose2}>
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
          <Button variant="danger" onClick={handleClose2}>
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

export default News;
