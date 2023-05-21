import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Input } from "@mui/material";

const theme = createTheme();
export default function Login({ onLogin }) {
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError();

    try {
      const response = await axios.post(
        process.env.REACT_APP_STAFF_LOGIN,
        {
          phoneNumber,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      // setToken(response.data.token)
      onLogin(response.data.token);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError("Invalid Phone Number or Password");
      setIsLoading(false);
    }
  };

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);
  //     console.log({
  //         email: data.get('email'),
  //         password: data.get('password'),
  //     });
  // };

  // const navigate= useNavigate()
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{
          background: "",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: "999999",
        }}
      >
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 15,
              display: "flex",
              flexDirection: "column",
              // alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar> */}
            <Typography
              component="h6"
              variant="h4"
              sx={{
                position: "relative",
                marginLeft: "18.5%",
                fontWeight: "600",
                fontFamily: "Poppins",
              }}
            >
              Welcome back
            </Typography>
            {/* <Typography component="p" variant="body1" sx={{ marginTop: '12px' }}>
                            Welcome back! Please enter your details.
                        </Typography> */}
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ mt: 3, width: "80%", ml: 10 }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "18px",
                  fontFamily: "Poppins",
                }}
              >
                Enter Mobile Number
              </Typography>
              <TextField
                margin="normal"
                size="small"
                fontFamily="Poppins"
                fullWidth
                id="number"
                name="number"
                // autoComplete="mobile number"
                // autoFocus
                placeholder="Enter your mobile number"
                required
                value={phoneNumber}
                onChange={(event) => setphoneNumber(event.target.value)}
                sx={{ position: "relative", bottom: "10px" }}
              />

              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "18px",
                  fontFamily: "Poppins",
                }}
              >
                Enter Password
              </Typography>
              <TextField
                margin="normal"
                fullWidth
                fontFamily="Poppins"
                size="small"
                name="password"
                // label="Password"
                placeholder="Enter your password"
                type="password"
                id="password"
                // autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                sx={{ position: "relative", bottom: "10px" }}
              />
              <Box ml={4}>
                {error && <div style={{ color: "red" }}>{error}</div>}
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <FormControlLabel
                  sx={{ width: "90%", mt: 3, ml: 0, fontFamily: "Poppins" }}
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Link
                  href="/forgot"
                  variant="body2"
                  sx={{ width: "60%", mt: 4.5, fontFamily: "Poppins" }}
                >
                  Forgot password?
                </Link>
              </Box>

              <Button
                type="submit"
                isLoading={isLoading}
                loadingText="Loggin you in..."
                fullWidth
                variant="contained"
                color="success"
                // onClick={() => navigate("/")}
                sx={{
                  mt: 3,
                  mb: 2,
                  textTransform: "capitalize",
                  background: "#000",
                }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            // mx: 10,
            // my
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
