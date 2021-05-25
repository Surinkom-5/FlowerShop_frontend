import * as axios from "axios";
import Cookies from "universal-cookie";
const axiosInstance = axios.create({
  baseURL: "http://localhost:57678/api",
});

const cookies = new Cookies();

export const GetProducts = async (dispatch) => {
  try {
    const { data } = await axiosInstance.get(`/Products`);
    dispatch({type: 'SET_PRODUCTS', data: data});
  } catch {
    console.log("Error while getting products!");
  }
};

export const GetCategories = async (dispatch) => {
  try {
    const { data } = await axiosInstance.get(`/Categories`);
    await dispatch({type: 'SET_CATEGORIES', data: data});
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

export const GetUser = async (dispatch) => {
  if (cookies.get("userToken")) {
    try {
      const options = {
        headers: { Authorization: "Bearer " + cookies.get("userToken") },
      };
      const { data } = await axiosInstance.get(`/User/CurrentUser`, options);
      dispatch({type: 'SET_USER', data: data});
    } catch {
      console.log("Error while getting User!");
    }
  } else {
    dispatch({type: 'SET_USER', data: null});
  }
};

export const GetUserAuth = async (dispatch) => {
  if (cookies.get("userToken")) {
    try {
      const options = {
        headers: { Authorization: "Bearer " + cookies.get("userToken") },
      };
      const { data } = await axiosInstance.get(`/User/CurrentUser`, options);
      return data;
    } catch {
      console.log("Error while getting User!");
    }
  }
};

export const GetCart = async (dispatch) => {
  if (cookies.get("cartId")) {
    try {
      if(cookies.get("userToken")){
        const options = {
          headers: { cartCookie: cookies.get("cartId"),Authorization: "Bearer " + cookies.get("userToken") },
        };
        const { data } = await axiosInstance.get(`/ShoppingCart`, options)
        if(cookies.get("cartId") != data.cartId){
          cookies.set("cartId", data.cartId, { path: "/" });
        }


        await dispatch({type: 'SET_CART', data: data});
      }else{
        const options = {
          headers: { cartCookie: cookies.get("cartId") },
        };
        const { data } = await axiosInstance.get(`/ShoppingCart`, options)

        await dispatch({type: 'SET_CART', data: data});
      }
      
      
    } catch {
      console.log("Error while getting Cart!");
    }
  } else {
    try {
      if(cookies.get("userToken")){
        const options = {
          headers: {Authorization: "Bearer " + cookies.get("userToken") },
        };
        const { data } = await axiosInstance.get(`/ShoppingCart`,options)
        cookies.set("cartId", data.cartId, { path: "/" });
  
        await dispatch({type: 'SET_CART', data: data});
      }else{
        const { data } = await axiosInstance.get(`/ShoppingCart`)
        cookies.set("cartId", data.cartId, { path: "/" });
  
        await dispatch({type: 'SET_CART', data: data});
      }
      
    } catch {
      console.log("Error while getting Cart!");
    }
  }
};

export const GetAddresses = async (dispatch) => {
  if (cookies.get("userToken")) {
    try {
      const options = {
        headers: { Authorization: "Bearer " + cookies.get("userToken") },
      };
      const { data } = await axiosInstance.get(`/Address`, options);
      dispatch({type: 'SET_ADDRESSES', data: data});
      return data;
    } catch {
      console.log("Error while getting Addresses!");
    }
  }
};



export const GetAllOrders = async () => {
  if (cookies.get("userToken")) {
    try {
      const options = {
        headers: { Authorization: "Bearer " + cookies.get("userToken") },
      };
      const { data } = await axiosInstance.get(`/Orders/ForOwner`,options);
      return data;
    } catch {
      console.log("Error while getting Orders!");
    }
  }
};
export const GetOrders = async (id) => {
  if (cookies.get("userToken")) {
    try {
      const { data } = await axiosInstance.get(`/Orders?userId=${id}`);
      return data;
    } catch {
      console.log("Error while getting Orders!");
    }
  }
};

export const GetAddress = async (id) => {
  if (cookies.get("userToken")) {
    try {
      const options = {
        headers: { Authorization: "Bearer " + cookies.get("userToken") },
      };
      const { data } = await axiosInstance.get(`/Address/${id}`,options);
      return data;
    } catch {
      console.log("Error while getting Orders!");
    }
  }
};

export const UpdateOrderStatus = async (id) => {
  const cookie = cookies.get("userToken");

  if (cookies.get("userToken")) {
    try {
      const orderData = {
        orderStatus: "Completed",
      };
      const options = {
        headers: { Authorization: "Bearer " + cookie },
      };
      const response = await axiosInstance.patch(`/Orders/${id}`,orderData,options);
      return response;
    } catch {
      console.log("Error while updating Order!");

    }
  }
};

export const GetOrder = async (id) => {
  try {
    const { data } = await axiosInstance.get(`/Orders/${id}`);
    return data;
  } catch {
    console.log("Error while getting Order!");
  }
};

export const UpdateAddress = async (id, newAdress) => {
  const cookie = cookies.get("userToken");
  if (cookie) {
    try {
      const options = {
        headers: { Authorization: "Bearer " + cookie },
      };
      await axiosInstance.patch(`/Address/${id}`, newAdress, options);
    } catch {
      console.log("Error while updating Address!");
    }
  }
};

export const AddToCart = async (data) => {
  const cookie = cookies.get("cartId");
  if (cookie) {
    
    try {
      if(cookies.get("userToken")){
        const options = {
          headers: { cartCookie: cookies.get("cartId"),Authorization: "Bearer " + cookies.get("userToken") },
        };
        await axiosInstance.patch(`/ShoppingCart`, data, options);
  
        }else{
          const options = {
            headers: { cartCookie: cookies.get("cartId") },
          };
          await axiosInstance.patch(`/ShoppingCart`, data, options);
        }
    } catch {
      console.log("Error while adding To Cart!");
    }
  }
};
export const RemoveFromCart = async (id) => {
  const cookie = cookies.get("cartId");
  if (cookie) {
    try {
      const options = {
        headers: { cartCookie: cookies.get("cartId") },
      };
      await axiosInstance.delete(`/ShoppingCart/${id}`, options);
    } catch {
      console.log("Error while removing from Cart!");
    }
  }
};

export const DeleteProduct = async (id) => {
  if(cookies.get("userToken")){
    try {
      const options = {
        headers: { Authorization: "Bearer " + cookies.get("userToken") },
      };
      const response = await axiosInstance.delete(`/Products/${id}`,options);
      return response;
    } catch {
      console.log("Error while deleting Product!");
    }
  }
};

export const UpdateProduct = async (id, data) => {
  if(cookies.get("userToken")){
    try {
      const options = {
        headers: { Authorization: "Bearer " + cookies.get("userToken") },
      };
      const response = await axiosInstance.patch(`/Products/${id}`,data,options);
      return response;
    } catch {
      console.log("Error while updating Product!");
    }
  }
};

