import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { useHistory, useLocation } from "react-router-dom";
import Select, { components } from "react-select";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Context } from "../store";

function SearchBar() {
  const history = useHistory();
  const location = useLocation();
  const [state, dispatch] = useContext(Context);

  const products = state.products;

  const [value, setValue] = useState(null);

  const handleInputChange = (e) => {
    setValue(e);
    history.push("/product/" + e.id);
  };

  useEffect(() => {
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
      borderRadius: 0,
      boxShadow: "none",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      paddingLeft: "40px",
      width: "300px",
      "&:hover": {
        // boxShadow: "0 0 5px rgba(143, 181, 106, 1)",
      },
      "&:focus": {
        // boxShadow: "0 0 5px rgba(143, 181, 106, 1)",
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

  const NoOptionsMessage = (props) => {
    return (
      <components.NoOptionsMessage {...props}>
        <span>Gėlių nerasta</span>
      </components.NoOptionsMessage>
    );
  };

  const searchOptions = [];
  products.slice(0, 6).forEach((product) => {
    searchOptions.push({
      id: product.id,
      label: product.name,
      value: product.name.toLowerCase(),
    });
  });
  return (
    <Select
      value={value}
      options={searchOptions}
      placeholder={"Gėlių paieška..."}
      className="search-input"
      styles={SearchStyles}
      components={{
        DropdownIndicator,
        IndicatorSeparator: () => null,
        NoOptionsMessage,
      }}
      onChange={(e) => handleInputChange(e)}
    />
  );
}

export default SearchBar;
