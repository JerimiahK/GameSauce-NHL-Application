import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../utils/mutations";
import { TextField, Button } from "@mui/material";
import styled from "@emotion/styled";
import Auth from "../../utils/auth";

const StyledTextField = styled(TextField)({
  width: "100%",
  marginTop: "1.5rem",
});

export default function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);
  let history = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token, history);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div style={style.container}>
      <form onSubmit={handleFormSubmit} style={style.form}>
        <h1 style={style.header}>Welcome Back To GameSauce!</h1>
        <StyledTextField
          style={style.input}
          placeholder="Your Email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          label="Email"
          variant="standard"
        />
        <StyledTextField
          style={style.input}
          placeholder="Password"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
          label="Password"
          variant="standard"
        />
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <Button
          type="submit"
          sx={{
            mt: 5,
            border: 1,
            backgroundColor: "#92b9e0",
            color: "#fff",
          }}
        >
          Login
        </Button>
        <p style={style.text}>
          Don't Have An Account? Click <a href="/signup">Here</a> To Create An
          Account!
        </p>
      </form>
    </div>
  );
}

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    margin: 10,
    height: "90vh",
    width: "90vw",
    backgroundColor: "#282828",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "60%",
    backgroundColor: "#fff",
    border: "#92b9e0 5px solid",
  },
  text: {
    position: "absolute",
    bottom: 20,
    color: "#fff",
    textAlign: "center",
    padding: 25,
    fontSize: 20,
  },
  header: {
    color: "#fff",
    textAlign: "center",
  },
};