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

function Comments() {
  const [allComments, setAllComments] = useState([]);
  const [deleteComment, setDeleteComment] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/all-comments").then((response) => {
      console.log(response.data.data);
      setAllComments(response.data.data);
    });
  }, [deleteComment]);

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
          .delete(`http://localhost:8000/api/delete-comment/${id}`)
          .then((response) => {
            console.log(response);
            setDeleteComment(!deleteComment);
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
                <Card.Title as="h4">Post's Comments</Card.Title>
                <p className="card-category">Here is All Comments.</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">User Name</th>

                      <th className="border-0">Comment Content</th>
                      <th className="border-0"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {allComments.map((comment) => {
                      return (
                        <tr key={comment.comment_id}>
                          <td>{comment.comment_id}</td>
                          <td>{comment.comment_Owner}</td>

                          <td>{comment.comment_content}</td>
                          <td>
                            <button
                              className="btn btn-danger ms-4"
                              onClick={() => handleDelete(comment.comment_id)}
                            >
                              Delete
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

export default Comments;
