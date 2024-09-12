import axios from "axios";

class DatabaseService {
  async getAllProducts() {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/products",
        { withCredentials: true }
        /*
          NOTE: For Axios Requests, this setting must be set to true.
          `withCredentials:true` option enables the browser to send cookies and other credential-related stuff to the server (located in a different domain than the frontend-client)
        */
      );
      return response.data;
    } catch (error) {
      /*
        AXIOS ERROR HANDLING
        The error sent by the backend server is stored inside the `AxiosError.response.data` object

        NOTE: We will send the exact same error object (sent by the backend service) to the client. Therefore, we throw `error.response.data` instead of `error` simply.
      */
      throw error.response.data;
    }
  }

  async getCurrentProduct(productId) {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/products/${productId}`,
        { withCredentials: true }
        /*
          NOTE: For Axios Requests, this setting must be set to true.
          `withCredentials:true` option enables the browser to send cookies and other credential-related stuff to the server (located in a different domain than the frontend-client)
        */
      );
      return response.data;
    } catch (error) {
      /*
        AXIOS ERROR HANDLING
        The error sent by the backend server is stored inside the `AxiosError.response.data` object

        NOTE: We will send the exact same error object (sent by the backend service) to the client. Therefore, we throw `error.response.data` instead of `error` simply.
      */
      throw error.response.data;
    }
  }

  async addProductToCart(data) {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/products/add-to-cart?productId=${
          data.productId
        }&size=${data.size}&quantity=${data.quantity || 1}`,
        {},
        { withCredentials: true }
        /*
          NOTE: For Axios Requests, this setting must be set to true.
          `withCredentials:true` option enables the browser to send cookies and other credential-related stuff to the server (located in a different domain than the frontend-client)
        */
      );
      return response.data;
    } catch (error) {
      /*
        AXIOS ERROR HANDLING
        The error sent by the backend server is stored inside the `AxiosError.response.data` object

        NOTE: We will send the exact same error object (sent by the backend service) to the client. Therefore, we throw `error.response.data` instead of `error` simply.
      */
      throw error.response.data;
    }
  }

  async updateProductQtInCart() {}

  async removeProductFromCart() {}

  async getUserCart() {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/cart/get-cart`,
        { withCredentials: true }
        /*
          NOTE: For Axios Requests, this setting must be set to true.
          `withCredentials:true` option enables the browser to send cookies and other credential-related stuff to the server (located in a different domain than the frontend-client)
        */
      );
      return response.data;
    } catch (error) {
      /*
        AXIOS ERROR HANDLING
        The error sent by the backend server is stored inside the `AxiosError.response.data` object

        NOTE: We will send the exact same error object (sent by the backend service) to the client. Therefore, we throw `error.response.data` instead of `error` simply.
      */
      throw error.response.data;
    }
  }
}

const databaseService = new DatabaseService();

export default databaseService;
