import React from "react";

import classes from "./AddressCard.module.scss";

const AddressCard = ({
  address1,
  city,
  state,
  postalCode,
  onEditAddress,
  onDeleteAddress
}) => {
  return (
    <div className={classes.AddressCard}>
      <p className={classes.CardHeader}>{city}</p>
      <div className={classes.CardBody}>
        <div className={classes.Details}>
          <p>{address1}</p>
          <p>{city}</p>
          <p>
            {state} - {postalCode}
          </p>
        </div>
        <div className={classes.Actions}>
          <button className={classes.Edit} onClick={onEditAddress}>
            Edit
          </button>
          <button className={classes.Delete} onClick={onDeleteAddress}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
