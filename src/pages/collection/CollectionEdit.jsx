import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";

const CollectionEdit = (props) => {
  const { state } = useLocation();
  const [customers, setQueries] = useState({});

  const handleChange = (e) => {
    setQueries((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // API Integration part

    // try {
    //     await axios.put()
    //     navigate("/")
    // } catch (error) {
    //     console.log(error);
    // }
  };
  return (
    <div
      id="editTable"
      style={{
        maxHeight: "100%",
        display: "flex",
        justifyContent: "center",
        background: "#f4f4f4",
        marginTop: "20%",
      }}
    >
      {JSON.stringify(state.code)}
      <Box
        sx={{
          minWidth: "100%",
          padding: "16px",
          marginLeft: "10%",
          paddingBottom: "5%",
        }}
      >
        <Grid>
          <TextField
            size="small"
            id="outlined-basic"
            label="Query Id"
            variant="outlined"
            value={state.qrId}
            sx={{ marginBottom: "1%" }}
          />
          <TextField
            size="small"
            id="outlined-basic"
            label="user ID"
            value={state.uId}
            variant="outlined"
            sx={{ marginLeft: "5%", marginBottom: "1%" }}
          />
           <TextField
            size="small"
            id="outlined-basic"
            label="Price To Pay"
            value={state.price}
            variant="outlined"
            sx={{ marginLeft: "5%", marginBottom: "1%" }}
          />
          <TextField
            size="small"
            id="outlined-basic"
            label="Status"
            value={state.stat}
            variant="outlined"
            sx={{ marginLeft: "5%", marginBottom: "1%" }}
          />
        </Grid>
        <Button variant="contained" color="error" sx={{ marginLeft: "5%" }}>
          Terminate Query
        </Button>
        <Button variant="contained" color="secondary" sx={{ marginLeft: "5%" }}>
          SetUp Pickup Point
        </Button>
        <Button variant="contained" color="primary"  sx={{ marginLeft: "5%" }}>
          SetUp to Onway
        </Button>
        <Button variant="contained" color="success" sx={{ marginLeft: "5%" }}>
          Setup to Destination
        </Button>
      </Box>
    </div>
  );
};
export default CollectionEdit;
