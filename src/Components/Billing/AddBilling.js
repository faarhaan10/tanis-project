import {
  Box,
  Fade,
  Modal,
  TextField,
  Typography,
  Backdrop,
  Button,
  DialogActions,
  Dialog,
  IconButton,
} from "@mui/material";
import { useForm } from "react-hook-form";

import React, { useState } from "react";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const AddBilling = ({ addBills, setBills }) => {
  let formRef = React.createRef();
  const [billingId, setBillingId] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paidAmount, setPaidAmount] = useState("");
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    let AddBillData = {
      billingId: billingId,
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      paidAmount: paidAmount,
    };
    setBills([...addBills, AddBillData]);
    setBillingId("");
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setPaidAmount("");
  };

  const handleSubmit = () => {
    let newData = {
      addBills: [...addBills],
    };

    axios
      .post("http://localhost:5000/api/add-billing", newData)
      .then(function (response) {
        if (response.status === 200) {
          setBills("");
          setBillingId("");
          setFullName("");
          setEmail("");
          setPhoneNumber("");
          setPaidAmount("");
          setOpen(false);
        }
        console.log(response);
      })

      .catch(function (error) {
        console.log(error.message);
      });
  };

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   reset,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   data.billingId = billingId;
  //   data.fullName = fullName;
  //   data.email = email;
  //   data.phoneNumber = phoneNumber;
  //   data.paidAmount = paidAmount;
  //   reset();
  //   axios
  //     .post("http://localhost:5000/api/add-billing", data)
  //     .then((response) => {
  //       response.status === 200 &&
  //         alert("Successfully Registered", "Successfully Biling Added");
  //     })

  //     .catch((error) => {
  //       !error.status === 200 &&
  //         alert("error", "Bad Request, Places Try again");
  //       console.log(error);
  //     });
  // };
  // const handleBillingId = (e) => {
  //   setBillingId(e.target.value);
  // };
  // const handleFullName = (e) => {
  //   setFullName(e.target.value);
  // };
  // const handleEmail = (e) => {
  //   setFullName(e.target.value);
  // };

  // const handlePhoneNumber = (e) => {
  //   setFullName(e.target.value);
  // };

  // const handlePaidAmount = (e) => {
  //   setEmail(e.target.value);
  // };
  return (
    <div>
      <Button
        id="publishButton"
        onClick={handleClickOpen}
        aria-label="show more"
      >
        Add quiz &nbsp;&nbsp;
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {" "}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "end",
          }}
        >
          <IconButton color="primary" aria-label="cancel">
            close
          </IconButton>
        </Box>
        <form red={formRef}>
          <Box sx={{ px: 2, pt: 0, pb: 2 }}>
            <Typography>
              Enter add new quiz/true false/fill in the blank
            </Typography>
            <br />

            <Box>
              <Box>
                <input
                  type="text"
                  name=""
                  id="contentInputQuiz"
                  placeholder="Enter billingId..."
                  value={billingId}
                  onChange={(e) => setBillingId(e.target.value)}
                  // required
                />
              </Box>
              <Box>
                <input
                  type="text"
                  name=""
                  id="contentInputQuiz"
                  placeholder="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  // required
                />
              </Box>
              <Box>
                <input
                  type="text"
                  name=""
                  id="contentInputQuiz"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // required
                />
              </Box>
              <Box>
                <input
                  type="text"
                  name=""
                  id="contentInputQuiz"
                  placeholder="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  // required
                />
              </Box>
              <Box>
                <input
                  type="text"
                  name=""
                  id="contentInputQuiz"
                  placeholder="setPaidAmount"
                  value={paidAmount}
                  onChange={(e) => setPaidAmount(e.target.value)}
                  // required
                />
              </Box>
              <br />
            </Box>
          </Box>

          <DialogActions SX={{ pt: 0 }}>
            <Button size="small" id="publishButton" onClick={handleSubmit}>
              Save
            </Button>
            <Button size="small" onClick={handleClose} id="publishButton">
              Close
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default AddBilling;
