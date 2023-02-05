import axios from "axios";
import React, { useEffect, useState } from "react";

// react-bootstrap components
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllShopsReducers } from "reducers/AllShopsReducers";
import Swal from "sweetalert2";

function Allposts() {
  const [deletePost, setDeletePost] = useState(false);

  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.allShops.allShops);
  useEffect(() => {
    if (!allPosts.users) {
      dispatch(fetchAllShopsReducers());
    }
  }, []);

  const handleDelete = (id) => {
    const config = {
      method: "delete",
      url: `http://127.0.0.1:8000/api/shopDelete/${id}`,
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization: "Bearer 2|i2GfvbsLjqnHHJXtZNftgQZFl5fxz5beWP8iBpBG",
      },
    };
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this item!",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#332d2d",
      cancelButtonColor: "#dc4c64",
      confirmButtonText: "Yes, Continue",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.request(config).then((response) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-right",
            iconColor: "white",
            customClass: {
              popup: "colored-toast",
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          Toast.fire({
            icon: "success",
            title: "shop deactivate successfully",
          });
          dispatch(fetchAllShopsReducers());
        });
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
                <Card.Title as="h4">All Shops</Card.Title>
                <p className="card-category">All Approved Shops</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Shop Profile</th>

                      <th className="border-0">Shop Name</th>
                      <th className="border-0">Shop Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allPosts.map((post) => {
                      return (
                        <tr key={post.post_id}>
                          <td>
                            <img
                              src={post.shop_info.ProfilePhoto}
                              alt=""
                              width={45}
                            />
                          </td>

                          <td>{post.shop_info.shopName}</td>
                          <td>{post.shop_info.category}</td>

                          <td>
                            <button
                              className="btn btn-danger ms-4"
                              onClick={() =>
                                handleDelete(post.shop_info.shop_id)
                              }
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
