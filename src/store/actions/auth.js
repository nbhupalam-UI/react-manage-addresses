import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userName) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    userName
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("addressList");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    fetch("users.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(function (response) {
        return response.json();
      })
      .then(function ({ users }) {
        const [user] = users.filter(
          (user) => user.email === email && user.password === password
        );
        if (user) {
          localStorage.setItem("token", user.token);
          dispatch(authSuccess(user.token, user.userName));
        } else {
          dispatch(authFail({ message: "Invalid username or password" }));
        }
      })
      .catch(() => {
        dispatch(
          authFail({ message: "Something went wrong, please try again later" })
        );
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const userName = localStorage.getItem("userName");
      dispatch(authSuccess(token, userName));
    }
  };
};
