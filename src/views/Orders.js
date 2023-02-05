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
import { fetchOrdersReducers } from "reducers/OrderReducers";
import { fetchProductsReducers } from "reducers/ProductsReducers";
import Swal from "sweetalert2";

function Orders() {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.allOrders.allOrders);
  useEffect(() => {
    if (allOrders) {
      dispatch(fetchOrdersReducers());
    }
  }, []);

  const handleDelete = (id) => {
    const config = {
      method: "delete",
      url: `http://127.0.0.1:8000/api/order/${id}`,
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
            title: "user  deleted successfully",
          });
          dispatch(fetchOrdersReducers());
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
                <Card.Title as="h4">Orders</Card.Title>
                <p className="card-category">Here is All Orders.</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Order Id</th>
                      <th className="border-0">order from</th>
                      <th className="border-0">total Price</th>
                      <th className="border-0">order status</th>
                      <th className="border-0">order Stage</th>
                      <th className="border-0">order Products</th>

                      <th className="border-0"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {allOrders.map((order) => {
                      return (
                        <tr key={order.order_id}>
                          <td>{order.order_id}</td>
                          <td>{order.shopName}</td>
                          <td>{order.total}JD</td>
                          <td>{order.orderStatus}</td>
                          <td>{order.orderStage}</td>

                          <td>{order.orderProducts.length}</td>
                          {order.orderStatus !== "rejected" ? (
                            <td>
                              <button
                                className="btn btn-danger ms-4"
                                onClick={() => handleDelete(order.order_id)}
                              >
                                Cancel Order
                              </button>
                            </td>
                          ) : (
                            <td></td>
                          )}
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

export default Orders;
