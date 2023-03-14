import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";

export default function SignUp() {
  
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [addUser] = useMutation(ADD_USER);
  
  let history = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: {
          ...formState,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token, history);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div style={style.container}>
      <form onSubmit={handleFormSubmit} style={style.form}>
        <h1 style={style.header}>Welcome To GameSauce, Feel Free To Create An Account!</h1>
        <TextField
          style={style.input}
          placeholder="Your Email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          label="Email"
          variant="standard"
        />
        <TextField
          style={style.input}
          placeholder="Password"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
          label="Password"
          variant="standard"
        />
        <Button
          type="submit"
          sx={{
            mt: 5,
            border: 1,
            backgroundColor: "#92b9e0",
            color: "#fff",
          }}
        >
          Create
        </Button>
        <p style={style.text}>
          Already Have An Account? Click <a href="/login">Here</a> To Login!
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
    marginTop: "1.2rem",
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