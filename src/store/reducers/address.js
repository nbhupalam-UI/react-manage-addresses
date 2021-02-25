import * as actionTypes from "../actions/actionTypes";

import { updateObject } from "../../shared/utility";

const initialState = {
  list: [],
  error: null,
  loading: false
};

const onFetchStart = (state) => {
  return updateObject(state, { error: null, loading: true });
};

const onFetchSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    list: action.addressList
  });
};

const onFetchFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const setAddressListInStorage = (list) => {
  localStorage.setItem("addressList", JSON.stringify(list));
};

const onAddAddress = (state, action) => {
  const newList = [action.address].concat(state.list);
  setAddressListInStorage(newList);
  return updateObject(state, { list: newList });
};

const onEditAddress = (state, action) => {
  const { address, index } = action;
  const { list } = state;
  const newList = list.slice(0, index).concat(address, list.slice(index + 1));
  setAddressListInStorage(newList);
  return updateObject(state, { list: newList });
};

const onDeleteAddress = (state, action) => {
  const { index } = action;
  const { list } = state;
  const newList = list.slice(0, index).concat(list.slice(index + 1));
  setAddressListInStorage(newList);
  return updateObject(state, { list: newList });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ADDRESSES_START:
      return onFetchStart(state);
    case actionTypes.FETCH_ADDRESSES_SUCCESS:
      return onFetchSuccess(state, action);
    case actionTypes.FETCH_ADDRESSES_FAIL:
      return onFetchFail(state, action);
    case actionTypes.ADD_ADDRESS:
      return onAddAddress(state, action);
    case actionTypes.EDIT_ADDRESS:
      return onEditAddress(state, action);
    case actionTypes.DELETE_ADDRESS:
      return onDeleteAddress(state, action);
    default:
      return state;
  }
};

export default reducer;
