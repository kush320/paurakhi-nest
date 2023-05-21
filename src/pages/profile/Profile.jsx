import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Profile() {
  const navigate = useNavigate();
  return (
    <div
      id="profile"
      style={{
        height: "95vh",
        display: "flex",
        justifyContent: "center",
        background: "#f4f4f4",
      }}
    >
      <Card sx={{ minWidth: "60%", height: "90%" }}>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <Avatar
            sx={{ width: 100, height: 100 }}
            alt="Travis Howard"
            src="/assets/images/avatars/avatar_2.jpg"
          />
        </Stack>
        {/* <CardContent sx={{ display: 'flex', justifyContent: 'center',  flexDirection: 'column' }}> */}

        <Grid container sx={{ marginTop: "2%", marginLeft: "23%" }}>
          {/* <Typography sx={{ marginTop:'1%', fontSize:'20px'}}> Name</Typography> */}
          <Typography
            sx={{
              marginTop: "0%",
              marginLeft: "5%",
              fontWeight: "600",
              fontSize: "25px",
              fontFamily: "Poppins",
              marginLeft: "13%",
            }}
          >
            {" "}
            Ram Bahadur
          </Typography>
        </Grid>
        <Grid
          container
          sx={{ marginTop: "2%", background: "#f4f4f4", height: "12%" }}
        >
          <Typography
            sx={{ marginTop: "2%", fontSize: "20px", marginLeft: "5%" }}
          >
            {" "}
            Address
          </Typography>
          <Typography
            sx={{
              marginTop: "2%",
              marginLeft: "5%",
              fontWeight: "600",
              fontSize: "20px",
              fontFamily: "Poppins",
              marginLeft: "11%",
            }}
          >
            {" "}
            Kathmandu
          </Typography>
        </Grid>
        <Grid
          container
          sx={{ marginTop: "3%", background: "#f4f4f4", height: "12%" }}
        >
          <Typography
            sx={{ marginTop: "2%", fontSize: "20px", marginLeft: "5%" }}
          >
            {" "}
            Number
          </Typography>
          <Typography
            sx={{
              marginTop: "2%",
              fontWeight: "600",
              fontSize: "20px",
              fontFamily: "Poppins",
              marginLeft: "11%",
            }}
          >
            {" "}
            9848000000
          </Typography>
        </Grid>

        <Grid
          container
          sx={{ marginTop: "3%", background: "#f4f4f4", height: "12%" }}
        >
          <Typography
            sx={{ marginTop: "2%", fontSize: "20px", marginLeft: "5%" }}
          >
            {" "}
            Designation
          </Typography>
          <Typography
            sx={{
              marginTop: "2%",
              fontWeight: "600",
              fontSize: "20px",
              fontFamily: "Poppins",
              marginLeft: "5%",
            }}
          >
            {" "}
            Admin
          </Typography>
        </Grid>

        <Grid container sx={{ marginTop: "3%", marginLeft: "5%" }}>
          <Checkbox size="small" />
          <Typography
            sx={{ marginTop: "1%", fontSize: "16px", fontFamily: "Poppins" }}
          >
            {" "}
            Two Factor Authentications
          </Typography>

          <Button
            onClick={() => navigate("/resetpw")}
            sx={{
              fontSize: "15px",
              marginLeft: "20%",
              fontFamily: "Poppins",
              color: "black",
            }}
          >
            {" "}
            Reset Password
          </Button>
          <Button
            color="success"
            variant="contained"
            sx={{ fontSize: "15px", marginLeft: "40%", fontFamily: "Poppins" }}
          >
            {" "}
            Save
          </Button>
        </Grid>

        {/* </CardContent> */}
      </Card>
    </div>
  );
}
