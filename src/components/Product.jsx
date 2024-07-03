import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
//import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import Alert from "react-bootstrap/Alert";
import { StatusCode } from "../StatusCode";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  //const [products, getProducts] = useState([]);
  useEffect(() => {
    dispatch(getProducts());
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => getProducts(data));
  }, []);

  const addToCart = (product) => {
    // create an add dispatch action
    dispatch(add(product));
  };

  console.log(products);

  if (status === StatusCode.LOADING) {
    return <p>Loading...</p>;
  }

  if (status === StatusCode.ERROR) {
    return (
      <Alert key="danger" variant="danger">
        Something went wrong!Try again later
      </Alert>
    );
  }

  return (
    <>
      <h1>Product Dashboard</h1>

      <Row xs={1} md={3} className="g-4">
        {/* <div className="row">that also work */}
        {products.map((product) => (
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
                  <Button variant="primary" onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
            {/* </Col> */}
          </div>
        ))}
      </Row>
    </>
  );
};

export default Product;
