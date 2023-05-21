import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation } from "react-router-dom";

const CollectionPointEdit = () => {
  const {state}=useLocation();
    const [startDate, setStartDate] = useState(new Date());
    const [category, setCategory] = useState({
      categoryName: "",
      NoOfProd: "",
      createdAt: "",
    });
  
    const handleChange = (e) => {
      setCategory((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleClick = async (e) => {
      e.preventDefault();
  
    };
    return (
      <div
        id="editTable"
        style={{
          height: "87vh",
          display: "flex",
          justifyContent: "center",
          background: "#f4f4f4",
        }}
      >
        <Card sx={{ maxHeight: "550px" }}>
        {JSON.stringify(state.code)}
          <Box sx={{ minWidth: "500px", padding: "16px" }}>
            <Typography
              component={"h3"}
              variant="h5"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "600",
                fontFamily: "Poppins",
              }}
            >
              Edit Collection Point
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                margin: "12px",
                padding: "10px",
                marginTop: "30px",
              }}
            >
              <Typography
                component={"h6"}
                variant="body1"
                sx={{ fontWeight: "600", fontFamily: "Poppins", marginTop: "2%" }}
              >
                Point Name
              </Typography>
              <input
                style={{ height: "36px" }}
                type="text"
                defaultValue={state.name}
                onChange={handleChange}
                name="name"
              />
            </Box>
  
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <Button color="success" onClick={handleClick} variant="contained">
                Save
              </Button>
            </Box>
          </Box>
        </Card>
      </div>
    );
  };
  

export default CollectionPointEdit
