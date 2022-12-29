import axios from "axios";
import React, { useEffect, useState } from "react";

// react-bootstrap components
import { Card, Table, Container, Row, Col } from "react-bootstrap";

function Allposts() {
  const [allPosts, setAllPosts] = useState([]);
  const [deletePost, setDeletePost] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/allShops").then((response) => {
      setAllPosts(response.data.data);
    });
  }, [deletePost]);

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
          .get(`http://localhost:8000/api/delete-post/${id}`)
          .then((response) => {
            setDeletePost(!deletePost);
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
                <Card.Title as="h4">All Posts</Card.Title>
                <p className="card-category">All Approved Posts</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>

                      <th className="border-0">User Name</th>
                      <th className="border-0">Post Content</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allPosts.map((post) => {
                      return (
                        <tr key={post.post_id}>
                          <td>
                            <img src={post.ProfilePhoto} alt="" width={45} />
                          </td>

                          <td>{post.shopName}</td>
                          <td>{post.category}</td>

                          <td>
                            <button
                              className="btn btn-danger ms-4"
                              onClick={() => handleDelete(post.post_id)}
                            >
                              Remove
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

export default Allposts;
