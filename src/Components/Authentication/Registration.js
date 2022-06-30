import { TextField, Typography, Container } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import BillingList from "../Billing/BillingList";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.username = username;
    data.email = email;
    data.password = password;
    reset();
    axios
      .post("http://localhost:5000/api/registration", data)
      .then((response) => {
        response.status === 200 &&
          alert("Successfully Registered", "Successfully Registered");
      })

      .catch((error) => {
        !error.status === 200 &&
          alert("error", "Bad Request, Places Try again");
        console.log(error);
      });
    // <Navigate to="/billingList" replace={true} />;
  };

  const handleUserName = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  // style=====
  const heroText = {
    textAlign: "center",
    fontSize: "30px",
    mt: "5%",
  };
  const input = {
    my: 2,
  };
  // ======
  return (
    <div>
      <Typography sx={{ ...heroText }}>Please Register</Typography>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            size="small"
            sx={{ ...input }}
            variant="outlined"
            {...register("username", { required: true })}
            value={username}
            onChange={handleUserName}
            fullWidth
            label="Your Name"
            autoFocus
          />
          <br />
          <TextField
            size="small"
            variant="outlined"
            sx={{ ...input }}
            {...register("username", { required: true })}
            value={email}
            onChange={handleEmail}
            fullWidth
            label="Your Email "
            autoFocus
          />
          <br />
          <TextField
            size="small"
            variant="outlined"
            sx={{ ...input }}
            {...register("username", { required: true })}
            value={password}
            onChange={handlePassword}
            fullWidth
            label="Your Password"
            autoFocus
          />
          <br />

          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </Container>
      <BillingList />
    </div>
  );
};

export default Registration;
