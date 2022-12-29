import React, { useEffect, useState } from "react";

// react-bootstrap components
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopsRequestReducers } from "reducers/ShopsRequestReducers";
import Swal from "sweetalert2";

function ShopsRequest() {
  // const [pendings, setPendings] = useState([]);
  const [approved, setApproved] = useState(false);
  const [deny, setDeny] = useState(false);
  const dispatch = useDispatch();
  const pendings = useSelector((state) => state.shops.shopsRequest);

  useEffect(() => {
    dispatch(fetchShopsRequestReducers());
  }, [approved, deny]);

  function handleChangeStatus(id, status) {
    const config = {
      method: "put",
      url: `http://127.0.0.1:8000/api/changeStatus/${id}`,
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer 124|eyDiT6RiLYGl7CwilBT5vxYGumBaBN1lQgLkG6VX",
      },
      data: { status },
    };
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#332d2d",
      cancelButtonColor: "#dc4c64",
      confirmButtonText: "Yes, Continue",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.request(config).then((response) => {
          console.log(response);
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
            title: "Shop's Status changed successfully",
          });
          setApproved(!approved);
        });
      }
    });
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Shops Request</Card.Title>
                <p className="card-category">Shops Pending</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Shop Profile </th>
                      <th className="border-0">Shop Name</th>
                      <th className="border-0">Shop Phone</th>
                      <th className="border-0">Category</th>
                      <th className="border-0">City</th>

                      <th className="border-0"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {console.log(pendings)}
                    {pendings?.map((pending) => {
                      return (
                        <tr>
                          <td>
                            <img
                              src={pending.shop_info.ProfilePhoto}
                              alt=""
                              width={40}
                            />
                          </td>
                          <td>{pending.shop_info.shopName}</td>
                          <td>{pending.shop_info.shopPhone}</td>
                          <td>{pending.shop_info.category}</td>
                          <td>{pending.shop_info.city.slice(0, 15)}</td>

                          <td>
                            <button
                              onClick={() =>
                                handleChangeStatus(
                                  pending.shop_info.shop_id,
                                  "approved"
                                )
                              }
                              className="btn btn-success"
                            >
                              Approve
                            </button>
                          </td>

                          <td>
                            <button
                              onClick={() =>
                                handleChangeStatus(
                                  pending.shop_info.shop_id,
                                  "rejected"
                                )
                              }
                              className="btn btn-danger ms-4"
                            >
                              Deny
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

export default ShopsRequest;
