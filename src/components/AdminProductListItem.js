import React, {useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { GetProduct, RemoveFromCart, DeleteProduct } from "../services";
import {SubmitButton } from "./ui/Form";
import { useHistory, useLocation,useParams} from "react-router-dom";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AdminProductListitem(props) {
  const [product, setProduct] = useState({});
  const [show, setShow] = useState(true);
  const history = useHistory();

  function navigateToProduct() {
    history.push("/admin-product/" + props.id);
  }
  useEffect(() => {
    GetProduct(props.id).then((p) => {
      setProduct(p);
    });
  }, []);

  const deleteProduct = (e) => {
    DeleteProduct(props.id).then((p) => {
        if(p){
            setShow(false);
        }
    });
    e.preventDefault();
  };
  return (
    <div>
      {show ? (
        <Row>
            <Col xs={1} className="cart-item-row-title"><span className="cart-item-title">{product.id}</span>
            </Col>
          <Col xs={4}>
            

            <Row>

              <Col xs={4}>
                <img
                  className="img-fluid cart-item-image"
                  src={product.image}
                ></img>
              </Col>
              <Col xs={8} className="cart-item-row-title">
                <span className="cart-item-title">{product.name}</span>
              </Col>
            </Row>
          </Col>
          <Col xs={2} className="cart-item-row">
            <b>{product.quantity}</b>
          </Col>
          <Col xs={2} className="cart-item-row">
            <b className="text-main">{product.price} €</b>
          </Col>
          <Col xs={1} className="cart-item-row">
          <FontAwesomeIcon
              icon={faTrash}
              onClick={deleteProduct}
              className="search-input-icon"
            />
          </Col>
          <Col xs={2} className="cart-item-row">
            <SubmitButton onClick={navigateToProduct}>Peržiūrėti</SubmitButton>
          </Col>
        </Row>
      ) : null}
    </div>
  );
}

AdminProductListitem.defaultProps = {
  title: "Title",
  image: "https://dummyimage.com/500x500/d6d6d6/fff",
  price: 0,
  code: "0000",
  amount: "0",
};

export default AdminProductListitem;
