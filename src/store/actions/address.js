import * as actionTypes from "./actionTypes";

export const fetchStart = () => {
  return {
    type: actionTypes.FETCH_ADDRESSES_START
  };
};

export const fetchSuccess = (addressList) => {
  return {
    type: actionTypes.FETCH_ADDRESSES_SUCCESS,
    addressList
  };
};

export const fetchFail = (error) => {
  return {
    type: actionTypes.FETCH_ADDRESSES_FAIL,
    error
  };
};

export const addAddress = (address) => {
  return {
    type: actionTypes.ADD_ADDRESS,
    address
  };
};

export const editAddress = (address, index) => {
  return {
    type: actionTypes.EDIT_ADDRESS,
    address,
    index
  };
};

export const deleteAddress = (index) => {
  return {
    type: actionTypes.DELETE_ADDRESS,
    index
  };
};

export const getAddressList = () => (dispatch) => {
  dispatch(fetchStart());
  const list = localStorage.getItem("addressList");
  if (list) {
    dispatch(fetchSuccess(JSON.parse(list)));
  } else {
    fetch("http://localhost:8000/addresses")
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("addressList", JSON.stringify(res));
        dispatch(fetchSuccess(res));
      })
      .catch(() => {
        dispatch(
          fetchFail({ message: "Something went wrong please try again later" })
        );
      });
  }
};
