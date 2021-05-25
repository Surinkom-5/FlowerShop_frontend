import React, { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Alert, Form } from "react-bootstrap";
import { Header1Center } from "../ui/Text";
import { TextInput, SubmitButton } from "../ui/Form";
import { GetProduct, GetUserAuth } from "../../services";
import { useHistory, useParams } from "react-router-dom";
import { Context } from "../../store";
import * as axios from "axios";
import Cookies from "universal-cookie";

function AdminProduct() {
  const history = useHistory();
  const { id } = useParams();

  const navigate = (url) => {
    history.push(url);
  };

  useEffect(() => {
    GetUserAuth().then((user) => {
      if (user == null) {
        navigate("/");
      } else {
        if (user.userRole != "Owner") {
          navigate("/");
        }
      }
    });
  }, []);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [version, setVersion] = useState(null);
  const [state, dispatch] = useContext(Context);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (product) {
      setQuantity(product.quantity);
      setName(product.name);
      setPrice(product.price);
      setDescription(product.description);
      setVersion(product.version);
    }
  }, [product]);

  const loadData = () => {
    GetProduct(id).then((p) => {
      setProduct(p);
    });
  };

  const updateProduct = (e) => {
    const data = {
      quantity: quantity,
      description: description,
      name: name,
      price: price,
      version: version,
    };
    const axiosInstance = axios.create({
      baseURL: "http://localhost:57678/api",
    });

    const cookies = new Cookies();
    if (cookies.get("userToken")) {
      const options = {
        headers: { Authorization: "Bearer " + cookies.get("userToken") },
      };
      axiosInstance.patch(`/Products/${id}`, data, options).then(
        (response) => {},
        (error) => {
          setMessage("Prekė jau buvo pakeista!");
        }
      );
    }

    e.preventDefault();
  };
  return (
    <Container>
      <Header1Center>Atnaujinti prekę</Header1Center>
      <Row className="justify-content-center">
        <Col lg={6} xs={12}>
          <form className="address-container">
            {message && <Alert variant="danger">{message}</Alert>}
            <TextInput
              type="text"
              placeholder="Pavadinimas"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextInput
              type="text"
              placeholder="Kaina"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <TextInput
              type="text"
              placeholder="Kiekis"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            <Form.Control
              className="text-input"
              as="textarea"
              value={description}
              rows={10}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <br />
            <SubmitButton onClick={updateProduct}>Atnaujinti</SubmitButton>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminProduct;
