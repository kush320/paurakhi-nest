import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const FinanceEdit = (props) => {
  const [customers, setQueries] = useState({});

  const handleChange = (e) => {
    setQueries((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
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
      <Box
        sx={{
          minWidth: "100%",
          padding: "16px",
          marginLeft: "80%",
          paddingBottom: "5%",
        }}
      >
        <Button variant="contained" color="error">
          Cancel
        </Button>

        <Button variant="contained" color="success" sx={{ marginLeft: "2%" }}>
          Approve
        </Button>
      </Box>
    </div>
  );
};

export default FinanceEdit;
