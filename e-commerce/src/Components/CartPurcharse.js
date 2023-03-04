import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import Checkout from "./Checkout";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";

function CartPurcharse({ cartItem }) {
  const [item, setItem] = useState(cartItem);
  const [subTotal, setSubTotal] = useState(0);
  const [totalItem, setTotalItem] = useState(0);

  useEffect(() => {
    const x = item.filter((cart) => cart.qty !== 0);
    setItem(x);
  }, [totalItem]);

  useEffect(() => {
    let totalAmount = 0;
    let qty = 0;
    for (let i = 0; i < item.length; i++) {
      qty += item[i].qty;
      totalAmount += item[i].qty * item[i].price;
    }
    setSubTotal(totalAmount);
    setTotalItem(qty);
  }, [item, totalItem]);

  const increase = (id) => {
    const currentId = item.findIndex((item) => item.id === id);
    const updatedItem = Object.assign({}, item[currentId]);
    updatedItem.qty += 1;

    const newItem = item.slice();
    newItem[currentId] = updatedItem;
    setItem(newItem);
  };

  const decrease = (id) => {
    const currentId = item.findIndex((item) => item.id === id);
    // 2. Mark the todo as complete
    const updatedItem = Object.assign({}, item[currentId]);
    if (updatedItem.qty > 0) {
      updatedItem.qty -= 1;
    }
    if (updatedItem.qty === 0 && item.length === 1) {
      window.location.href = "/";
    }
    const newItem = item.slice();
    newItem[currentId] = updatedItem;
    setItem(newItem);
  };
  return (
    <div className="container my-4">
      <Row>
        <Col>
          {item.map((item, index) => {
            return (
              <Row key={index} className="shadow p-3 mb-5 bg-body rounded ">
                <Col>
                  <img
                    src={item.image}
                    alt="pic"
                    style={{
                      height: "150px",
                      width: "max-width",
                      marginLeft: "10px",
                    }}
                  />
                </Col>
                <Col>
                  <div>
                    <h5>Review</h5>
                    {item.review.map((r, index) => {
                      return (
                        <span key={index} className="text-warning">
                          {r}
                        </span>
                      );
                    })}
                    {/* <h5 className="mt-2">Description</h5> */}
                    <p>{item.description}</p>
                  </div>
                </Col>
                <Col className="d-flex">
                  <div
                    className="d-flex flex-column gap-2"
                    style={{ marginLeft: "0px" }}
                  >
                    <h4>{item.title}</h4>
                    <h5 className="d-flex gap-3">
                      <span>Qty. </span>
                      <span>
                        <FiMinusCircle
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            decrease(item.id);
                          }}
                        />
                      </span>
                      <span>{item.qty}</span>
                      <span>
                        <FiPlusCircle
                          className="text-success"
                          style={{ cursor: "pointer" }}
                          onClick={() => increase(item.id)}
                        />
                      </span>
                    </h5>
                    <h5>Price {item.price} /- Rs.</h5>
                  </div>
                </Col>
              </Row>
            );
          })}
        </Col>
        <Col>
          {item.length > 0 && (
            <div className="container w-50 h-75">
              <div className="shadow p-3 mb-5 bg-body rounded d-flex flex-column gap-3">
                <h4 className="text-center text-danger">Cart Summary</h4>
                <h5>Total Items : {totalItem}</h5>
                <h5>Net Amount : {subTotal}</h5>
                <div className="text-center">
                  <Checkout subTotal={subTotal} />
                </div>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default CartPurcharse;
