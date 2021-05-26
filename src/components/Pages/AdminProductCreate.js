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

function AdminProductCreate() {
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
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [productType, setProductType] = useState("Flower");
  const [availabilityCount, setAvailabilityCount] = useState(null);
  
  const [state, dispatch] = useContext(Context);
  const [message, setMessage] = useState(null);

  const createProduct = (e) => {
    const data = {
      availabilityCount: availabilityCount,
      description: description,
      name: name,
      price: price,
      productType: productType
    };
    e.preventDefault();


    if(!name){
      setMessage("Įveskite pavadinimą");
      return;
    }
    if(!price){
      setMessage("Įveskite kainą");
      return;
    }
    if(!availabilityCount){
      setMessage("Įveskite kiekį");
      return;
    }
    if(!description){
      setMessage("Įveskite aprašymą");
      return;
    }

    const axiosInstance = axios.create({
      baseURL: "http://localhost:57678/api",
    });

    const cookies = new Cookies();
    if (cookies.get("userToken")) {
      const options = {
        headers: { Authorization: "Bearer " + cookies.get("userToken") },
      };
      axiosInstance.post(`/Products`, data, options).then(
        (response) => {
          navigate('/admin')
        },
        (error) => {
          if (Array.isArray(Object.values(error.response.data.errors)[0])) {
            var message = Object.values(error.response.data.errors)[0][0];
          } else {
            var message = Object.values(error.response.data.errors)[0];
          }
  
          setMessage(message);
        }
      );
    }

  };
  return (
    <Container>
      <Header1Center>Sukurti naują prekę</Header1Center>
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
            <Form.Control as="select" onChange={(e) => {
                setProductType(e.target.value);
              }}>
              <option value="Flower">Flower</option>
              <option value="Bouquet">Bouquet</option>
              <option value="PotterPlant">PotterPlant</option>
            </Form.Control>
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
              value={availabilityCount}
              onChange={(e) => {
                setAvailabilityCount(e.target.value);
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
            <SubmitButton onClick={createProduct}>Sukurti</SubmitButton>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminProductCreate;
