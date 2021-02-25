import React, { useEffect } from "react";
import { connect } from "react-redux";

import AddressCard from "./AddressCard/AddressCard";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions";
import classes from "./AddressList.module.scss";

const AddressList = ({
  getAddresses,
  addressList = [],
  loading,
  error,
  onAddAddress,
  onEditAddress,
  onDeleteAddress
}) => {
  useEffect(() => {
    getAddresses();
  }, [getAddresses]);
  const handleAddAddress = () => {
    const address = {
      address1: `New Address ${addressList.length + 1}`,
      city: `City`,
      state: `State`,
      postalCode: `Postal Code`
    };
    onAddAddress(address);
  };
  const handleEditAddress = ({ address1, city, state, postalCode }, index) => {
    const newCity = city.replace(" Edited", "");
    const address = {
      address1: `${address1}`,
      city: `${newCity} Edited`,
      state: `${state}`,
      postalCode: `${postalCode}`
    };
    onEditAddress(address, index);
  };
  return (
    <div className={classes.AddressList}>
      <div className={classes.TitleContainer}>
        <h2 className={classes.Title}>Addresses</h2>
        <button className={classes.AddAddress} onClick={handleAddAddress}>
          Add address
        </button>
      </div>
      {error && error.message && (
        <p className={classes.Error}>{error.message}</p>
      )}
      {loading ? (
        <Spinner />
      ) : (
        <div className={classes.ListContainer}>
          {addressList.map((address, index) => (
            <AddressCard
              {...address}
              key={index}
              onEditAddress={() => handleEditAddress(address, index)}
              onDeleteAddress={() => onDeleteAddress(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAddresses: () => dispatch(actions.getAddressList()),
    onAddAddress: (address) => dispatch(actions.addAddress(address)),
    onEditAddress: (address, index) =>
      dispatch(actions.editAddress(address, index)),
    onDeleteAddress: (index) => dispatch(actions.deleteAddress(index))
  };
};

const mapStateToProps = ({ address: { list, loading, error } }) => {
  return {
    addressList: list,
    loading,
    error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressList);
