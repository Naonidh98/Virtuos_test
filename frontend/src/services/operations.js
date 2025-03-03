import { Api } from "./api";
import { apiConnector } from "./apiconnector";
import toast from "react-hot-toast";

export function createEntry(data) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading....");
    try {
      console.log(data);

      const response = await apiConnector("POST", Api.create, data);

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
  };
}

export function getResult(setData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector("GET", Api.result);

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      setData(response.data.data);

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
  };
}
