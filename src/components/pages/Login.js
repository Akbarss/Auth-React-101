import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = AuthData();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const doLogin = async () => {
    try {
      await login(userName, password);
      navigate("/account");
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <div className="page">
      <h2>Login page</h2>
      <div className="inputs">
        <div className="input">
          <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" />
        </div>
        <div className="input">
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        </div>
        <div className="button">
          <button onClick={doLogin}>Log in</button>
        </div>
        {errorMessage ? <div className="error">{errorMessage}</div> : null}
      </div>
    </div>
  );
};
