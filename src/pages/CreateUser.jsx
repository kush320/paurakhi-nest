import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import "react-image-crop/dist/ReactCrop.css";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card } from "@mui/material";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

const theme = createTheme();

export default function CreateUser() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError();

    try {
      const response = await axios.post(
        process.env.REACT_APP_ADD_STAFF,
        {
          phoneNumber,
          email,
          role,
          firstName,
          lastName,
          address,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          // withCredentials: true
        }
      );
      toast.success("Added Staff Successfully");
      // setToken(response.data.token)
      // onLogin(response.data.token)
      setIsLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      // console.log(error.response.data.message)
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Card
        component="main"
        style={{ backgroundColor: "#f4f4f4", paddingLeft: "40%" }}
      >
        <Box
          sx={{
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Typography component="h2" variant="h4" sx={{ fontWeight: "600" }}>
            Staff Details
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              fullWidth
              id="firstname"
              label="First Name"
              name="firstname"
              // autoFocus
            />
            <TextField
              margin="normal"
              required
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              fullWidth
              id="lastname"
              label="Last Name"
              name="lastname"
              // autoFocus
            />
            <TextField
              margin="normal"
              required
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              fullWidth
              name="address"
              label="Address"
              type="text"
              id="address"
            />
            <TextField
              margin="normal"
              required
              value={phoneNumber}
              onChange={(event) => setphoneNumber(event.target.value)}
              fullWidth
              name="phone"
              label="Phone"
              type="text"
              id="phone"
            />
            <TextField
              margin="normal"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              // autoFocus
            />
            <TextField
              margin="normal"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              // autoComplete="current-password"
            />

            <FormControl sx={{ marginLeft: "5%" }}>
              <RadioGroup row>
                <Button sx={{ color: "black" }}>Role</Button>
                <FormControlLabel
                  value="admin"
                  onChange={(event) => setRole(event.target.value)}
                  control={<Radio />}
                  label="Admin"
                />
                <FormControlLabel
                  value="manager"
                  onChange={(event) => setRole(event.target.value)}
                  control={<Radio />}
                  label="Manager"
                />
                <FormControlLabel
                  value="collector"
                  onChange={(event) => setRole(event.target.value)}
                  control={<Radio />}
                  label="Collector"
                />
              </RadioGroup>
            </FormControl>

            <Button
              type="submit"
              fullWidth
              color="success"
              variant="contained"
              isLoading={isLoading}
              loadingText="Loggin you in..."
              sx={{ backgroundColor: "#34A853", marginTop: "5%", mb: "30px" }}
            >
              Add Staff
            </Button>
          </Box>
        </Box>
      </Card>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ThemeProvider>
  );
}
