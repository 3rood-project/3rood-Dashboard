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
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsReducers } from "reducers/ProductsReducers";
import Swal from "sweetalert2";

function Products() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts);
  useEffect(() => {
    if (allProducts) {
      dispatch(fetchProductsReducers());
    }
  }, []);
  console.log(allProducts);
  const handleDelete = (id) => {
    const config = {
      method: "delete",
      url: `http://127.0.0.1:8000/api/deleteProducts/${id}`,
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization: "Bearer 124|eyDiT6RiLYGl7CwilBT5vxYGumBaBN1lQgLkG6VX",
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
            title: "user  deleted successfully",
          });
          dispatch(fetchProductsReducers());
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
                <Card.Title as="h4">Shop's Products</Card.Title>
                <p className="card-category">Here is All Products.</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">product photo</th>
                      <th className="border-0">product Name</th>

                      <th className="border-0">Product Price</th>
                      <th className="border-0">Product Content</th>
                      <th className="border-0"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {allProducts.map((product) => {
                      return (
                        <tr key={product.product_id}>
                          <td>
                            <img src={product.productPhoto} alt="" width={45} />
                          </td>
                          <td>{product.productName}</td>
                          <td>{product.productPrice}JD</td>

                          <td>{product.expirationDate}</td>
                          <td>
                            <button
                              className="btn btn-danger ms-4"
                              onClick={() => handleDelete(product.product_id)}
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

export default Products;
