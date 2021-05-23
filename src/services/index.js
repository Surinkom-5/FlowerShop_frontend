import { setProducts, setCategories } from "../actions/common";
import * as axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:57678/api",
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
    const { data } = await axiosInstance.get(`/Products`);
    dispatch(setProducts(data));
  } catch {
    console.log("Error while getting products!");
  }
};

export const GetCategories = async (dispatch) => {
  try {
    const { data } = await axiosInstance.get(`/Categories`);
    await dispatch(setCategories(data));
  } catch {
    console.log("Error while getting categories!");
  }
};

export const GetProduct = async (id) => {
  try {
    const { data } = await axiosInstance.get(`/Products/${id}`);
    return data;
  } catch {
    console.log("Error while getting product!");
  }
};

export const GetProductsByType = async (type) => {
  try {
    const { data } = await axiosInstance.get(`/Products?ProductType=${type}`);
    return data;
  } catch {
    console.log("Error while getting products by type!");
  }
};


export const GetUser = async () => {

  const options = {
    headers: {'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6Ijg4MTA1NWEwLTlmN2YtNDg1OC04ZDcwLTUzODE1YzlhNTZhYiIsIlVzZXJJZCI6IjMiLCJlbWFpbCI6ImFuZHJpdXNAZXhhbXBsZS5jb20iLCJuYmYiOjE2MjE3NjkxNzAsImV4cCI6MTYyMTc5MDc3MCwiaWF0IjoxNjIxNzY5MTcwfQ.DvLfBsJLMvVMAnJhH6ASbIwxX4c3Xkrsp0GIbxN1jueaE3XD2rJOyquLPKC0Bfd7bs0PyK1XPx-dQGAN8I_xLw'}
  };
  axiosInstance.get(`/User/CurrentUser`,options)
  .then((response) => {
    return response.data;
  }, (error) => {
    return null;
  });
};

export const GetCart = async () => {

  const options = {
    headers: {'cartCookie': 'b45421e5-716b-4e61-92d5-f0e2df1c634a'}
  };
  axiosInstance.get(`/ShoppingCart`,options)
  .then((response) => {
    return response.data;
  }, (error) => {
    return null;
  });
};
