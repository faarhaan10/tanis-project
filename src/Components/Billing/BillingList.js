import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Box,
  Button,
  Container,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import AddBilling from "./AddBilling";
import PageButtons from "./PageButtons";
import EditBill from "./EditBill";

// style
const heroText = {
  textAlign: "center",
  fontSize: "30px",
  mt: "5%",
};
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
const BillingList = () => {
  const [billings, setBillings] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [count, setCount] = useState(0);
  const [page, setPage] = React.useState(1);
  const limit = 10;

  console.log(count)
  const handleChange = (event, value) => {
    setPage(value - 1);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/billing?page=${page}&&size=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setCount(Math.ceil(data.count / limit));
        setBillings(data.result);
      });
  }, [isAdding, page]);

  return (
    <div>
      <Container>
        <AddBilling
          billings={billings}
          setBillings={setBillings}
          isAdding={isAdding}
          setIsAdding={setIsAdding}
        />

        <Typography sx={{ ...heroText }}>Billing Table</Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Billing Id</TableCell>
              <TableCell align="right">Full Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Paid Amount</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {billings.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row._id ? row._id : "generating bill id"}
                </TableCell>
                <TableCell align="right">{row.fullName}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phoneNumber}</TableCell>
                <TableCell align="right">{row.paidAmount}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={1}>
                    <EditBill id={row?._id} />
                    <Button variant="text">DELETE</Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <PageButtons
          pageTotal={count}
          page={page}
          handleChange={handleChange}
        />
      </Container>
    </div>
  );
};

export default BillingList;
