import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { remove } from "../store/cartSlice";
//import { useEffect } from "react";
//import { useState } from "react";

const Cart = () => {
  //const [productCart, setProductCart] = useState([]);
  const productCart = useSelector((state) => state.cart);

  // useEffect(() => {
  //   window.localStorage.setItem("productList", JSON.stringify(storedProduct));
  // }, [storedProduct]);

  // useEffect(() => {
  //   const cart = localStorage.getItem("productList");
  //   console.log(cart);
  //   if (cart !== null) setProductCart(JSON.parse(cart));
  // }, []);

  // console.log(cart);
  // setProductCart(cart);

  const dispatch = useDispatch();
  const removeCart = (id) => {
    //create a remove dispatch action
    dispatch(remove(id));
  };
  return (
    <div>
      <h1>Cart</h1>
      {/* {JSON.stringify(productCart)} */}

      <Row xs={1} md={3} className="g-4">
        {/* <div className="row">that also work */}
        {productCart.map((product) => (
          <div
            className="col-md-4"
            key={product.id}
            style={{ marginBottom: "10px" }}
          >
            {/* <Col style={{ marginBottom: "10px" }}> That also work*/}
            <Card key={product.id} style={{ width: "20rem", height: "28rem" }}>
              <div className="text-center">
                {" "}
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: "100px", height: "120px" }}
                />
              </div>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price:{product.price}</Card.Text>
                <Card.Footer style={{ textAlign: "center" }}>
                  {" "}
                  <Button
                    variant="danger"
                    onClick={() => removeCart(product.id)}
                  >
                    Remove Cart
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
            {/* </Col> */}
          </div>
        ))}
      </Row>
    </div>
  );
};

export default Cart;
