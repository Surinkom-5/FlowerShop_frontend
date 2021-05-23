import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { useHistory, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select, { components } from "react-select";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

function Header() {
  const history = useHistory();
  const location = useLocation();
  const products = useSelector((state) => state.appReducer.products);
  const [value, setValue] = useState(null);

  const navigate = (url) => {
    history.push(url);
  };

  const handleInputChange = (e) => {
    setValue(e);
    history.push("/product/" + e.id);
  };

  useEffect(() => {
    // reseting search field
    if (value && location.pathname !== "/product/" + value.id) {
      setValue(null);
    }
  }, [location]);

  const SearchStyles = {
    menu: (provided, state) => ({
      ...provided,
      marginTop: 30,
    }),
    container: (provided) => ({
      ...provided,
      width: "300px",
      position: "relative",
      zIndex: 1,
    }),
    option: (provided, state) => ({
      ...provided,
      color: "black",
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "rgba(143, 181, 106, 0.2)",
      },
    }),
    control: (base) => ({
      ...base,
      borderColor: "#E4E4E4",
      boxShadow: "none",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      paddingLeft: "40px",
      width: "300px",
      "&:hover": {
        boxShadow: "0 0 5px rgba(143, 181, 106, 1)",
      },
      "&:focus": {
        boxShadow: "0 0 5px rgba(143, 181, 106, 1)",
      },
    }),
  };

  const DropdownIndicator = (props) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <FontAwesomeIcon icon={faSearch} className="search-input-icon" />
        </components.DropdownIndicator>
      )
    );
  };

  const searchOptions = [];
  products.forEach((product) => {
    searchOptions.push({
      id: product.id,
      label: product.name,
      value: product.name.toLowerCase(),
    });
  });

  return (
    <div className="header-container">
      <Container>
        <Row>
          <Col xs={3}>
            <div className="logo" onClick={() => navigate("/")}>
              <span>Gėlių</span>
              <span className="logoText2">Parduotuvė</span>
            </div>
          </Col>
          <Col xs={6} className="search-input-container">
            <Select
              value={value}
              options={searchOptions}
              placeholder={"Search for flowers"}
              className="search-input"
              styles={SearchStyles}
              components={{ DropdownIndicator, IndicatorSeparator: () => null }}
              onChange={(e) => handleInputChange(e)}
            />
          </Col>
          <Col xs={3} className="header-info-container">
            <div className="header-info">
              {/* TODO: make a conditional statement: if user logged in: button "Logoff" */}
              <span onClick={() => navigate("/login")} className="user-icon">
                Prisijungti
              </span>
              <span className="cart-icon" onClick={() => navigate("/cart")}>
                Pirkinių krepšelis
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
