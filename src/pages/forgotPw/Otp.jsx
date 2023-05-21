import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
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
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get("email"),
    password: data.get("password"),
  });
};

export default function Otp() {
  const navigate = useNavigate();
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
              my: 25,
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
                fontWeight: "400",
                fontFamily: "Poppins",
                fontSize: "30px",
              }}
            >
              Enter OTP
            </Typography>
            {/* <Typography component="p" variant="body1" sx={{ marginTop: '12px' }}>
                    Welcome back! Please enter your details.
                </Typography> */}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3, width: "80%", ml: 10 }}
            >
              <input style={{ width: "40px", height: "40px" }} />
              <input
                style={{ width: "40px", height: "40px", marginLeft: "40px" }}
              />
              <input
                style={{ width: "40px", height: "40px", marginLeft: "40px" }}
              />
              <input
                style={{ width: "40px", height: "40px", marginLeft: "40px" }}
              />

              <Button
                type="submit"
                onClick={() => navigate("/resetpw")}
                variant="contained"
                color="success"
                sx={{
                  mt: 3,
                  mb: 2,
                  textTransform: "capitalize",
                  background: "#000",
                  mx: "30%",
                }}
              >
                Submit
              </Button>
              {/* <Box sx={{ display: 'flex', justifyContent: 'center', background: '#fff' }}>
                        <GoogleLogin
                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                            render={renderProps => (
                                <Button sx={{ background: '#fff', color: '#000', padding: '8px 25px' }} variant='contained' onClick={renderProps.onClick} disabled={renderProps.disabled} > <GoogleIcon /> <Typography sx={{ position: 'relative', left: '10px' }}>Sign In with Google</Typography> </Button>
                            )}
                            buttonText="Login"
                            // onSuccess={responseGoogle}
                            // onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </Box> */}
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
