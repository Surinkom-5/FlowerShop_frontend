import React, { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Badge } from "react-bootstrap";
import AddressCard from "../AddressCard";
import OrderListItem from "../OrderListItem";
import { Header1Center } from "../ui/Text";
import { TableHead } from "../ui/Text";
import { SubmitButton } from "../ui/Form";
import { GetOrder,UpdateOrderStatus, GetAddress,GetUserAuth } from "../../services";
import { useHistory, useLocation,useParams} from "react-router-dom";
import { Context } from "../../store";
import { Header1 } from "../ui/Text";
import OrderItem from "../OrderItem";


function AdminOrder() {
  const history = useHistory();
  const { id } = useParams();

  const navigate = (url) => {
    history.push(url);
  };

  useEffect(() => {
    GetUserAuth().then((user) => {
        if (user == null) {
            navigate("/");
        }else{
            if(user.userRole != "Owner"){
                navigate("/");
            }
        }
    });
  }, []);
  const [order, setOrder] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [address, setAddress] = useState(null);
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
      if(order){
        GetAddress(order.addressId).then((p) => {
            setAddress(p);
          });
      }

  }, [order]);
  const loadData = () => {
      GetOrder(id).then((p) => {
        setOrder(p);
      });
  };

  const completeOrder = (e) => {
    UpdateOrderStatus(id).then((p) => {
        if(p){
            setCompleted(true);
        }
    });

    e.preventDefault();
  };
  return (
    <Container>
      <Header1Center>Užsakymas #{id}</Header1Center>
        <Row>
            <Col xs={12} lg={6}>
            <div className="order-admin-container">
                <b>Užsakymo suma: </b>{order ?(
                    order.totalPrice
                ) : null} €
                <br/>
                <b>Komentaras: </b>{order ?(
                    order.comment
                ) : null}
                <br/>

                <b>Būsena: </b>{order ? (
                    order.orderStatus == "Completed" || completed ? (
                        <Badge variant="success">Užbaigta</Badge>
                    ) : (
                        <>
                        <Badge variant="warning">Patvirtinta</Badge><br/><br/>
                        <SubmitButton onClick={completeOrder}>Užbaigti užsakymą</SubmitButton>
                        </>
                    )

                ) : null}
                
            </div>

            </Col>
            <Col xs={12} lg={6}>
            <div className="order-admin-container">
            <b>Adresas: </b>{address ?(
                    address.street
                ) : null}
                <br/>
                <b>Miestas: </b>{address ?(
                    address.city
                ) : null}
                <br/>
                <b>Pašto kodas: </b>{address ?(
                    address.postalCode
                ) : null}
                <br/>

            </div>
            </Col>
        </Row>
      <div className="cart-items-container">
        <Row className="table-head-container">
          <Col lg={6} xs={4}>
            <TableHead>Prekė</TableHead>
          </Col>
          <Col lg={3} xs={4}>
            <TableHead>Kiekis</TableHead>
          </Col>
          <Col lg={3} xs={4}>
            <TableHead>Kaina</TableHead>
          </Col>
        </Row>
        {order ? (
            order.orderItems.map((c) => (
              <OrderItem id={c.productId} quantity={c.quantity} />
            ))
        ) : null}
      </div>
      <br/>

    </Container>
  );
}

export default AdminOrder;
