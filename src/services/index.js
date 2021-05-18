import { setProducts, setCategories } from "../actions/common";
import * as axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:57678",
});

// Egzamples of how api calls may look like:
// GET
// const { data } = await axiosInstance.get(`/products`);
// DELETE
// await axiosInstance.delete(`/${product.id}`);
// POST
// const { data } = await axiosInstance.post("", product);
// PUT
// await axiosInstance.put("", product);

export const GetProducts = async (dispatch) => {
  try {
    //   API call
    // const { data } = await axiosInstance.get(`/products`);

    const response = [
      {
        id_product: "111",
        code: "0202",
        name: "Gele 1",
        price: "14",
        quantity: "30",
        image: null,
      },
      {
        id_product: "111",
        code: "0202",
        name: "Gele 2",
        price: "1",
        quantity: "3",
        image: null,
      },
      {
        id_product: "111",
        code: "0202",
        name: "Gele 3",
        price: "100",
        quantity: "2",
        image: null,
      },
      {
        id_product: "111",
        code: "0202",
        name: "Gele 1",
        price: "14",
        quantity: "30",
        image: null,
      },
      {
        id_product: "111",
        code: "0202",
        name: "Gele 2",
        price: "1",
        quantity: "3",
        image: null,
      },
      {
        id_product: "111",
        code: "0202",
        name: "Gele 3",
        price: "100",
        quantity: "2",
        image: null,
      },
    ];

    await dispatch(setProducts(response));
  } catch {
    console.log("Error while getting products!");
  }
};

export const GetCategories = async (dispatch) => {
  try {
    //   API call
    const response = [
      {
        id: "111",
        name: "Puokstes",
        image: null,
      },
      {
        id: "111",
        name: "Geles",
        image: null,
      },
      {
        id: "111",
        name: "Vazonai",
        image: null,
      },
      {
        id: "111",
        name: "Puokstes",
        image: null,
      },
      {
        id: "111",
        name: "Geles",
        image: null,
      },
      {
        id: "111",
        name: "Vazonai",
        image: null,
      },
      {
        id: "111",
        name: "Puokstes",
        image: null,
      },
      {
        id: "111",
        name: "Geles",
        image: null,
      },
      {
        id: "111",
        name: "Vazonai",
        image: null,
      },
    ];

    await dispatch(setCategories(response));
  } catch {
    console.log("Error while getting categories!");
  }
};

export const GetProduct = async (id) => {
  try {
    // API call
    // const { product } = await axiosInstance.get(`/products.id`);
    // return product;
  } catch {
    console.log("Error while getting categories!");
  }
};
