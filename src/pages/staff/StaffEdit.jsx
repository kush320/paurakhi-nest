import { Box, Button, Card, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const StaffEdit = () => {
  const {state}=useLocation();
  const [customers, setCustomers] = useState({
    Name: "",
    contact: "",
    address: "",
    password: "",
    orders: "",
  });

  const handleChange = (e) => {
    setCustomers((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
        height: "87vh",
        display: "flex",
        justifyContent: "center",
        background: "#f4f4f4",
      }}
    >
      <Card style={{ marginBottom: "1%" }}>
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
            Staff Details
          </Typography>
          <Box
            sx={{
              display: "flex",
              margin: "12px",
              padding: "10px",
              marginTop: "20px",
            }}
          >
            <Typography
              component={"h6"}
              variant="body1"
              sx={{
                fontWeight: "600",
                marginLeft: "20%",
                marginTop: "2%",
                fontFamily: "Poppins",
              }}
            >
              Name
            </Typography>
            <input
              style={{ height: "36px", marginLeft: "11%" }}
              type="text"
              defaultValue={state.name}
              onChange={handleChange}
              name="name"
            />
          </Box>
          <Box sx={{ display: "flex", margin: "12px", padding: "10px" }}>
            <Typography
              component={"h6"}
              variant="body1"
              sx={{
                fontWeight: "600",
                marginLeft: "20%",
                marginTop: "2%",
                fontFamily: "Poppins",
              }}
            >
              Contact
            </Typography>
            <input
              style={{ height: "36px", marginLeft: "7%" }}
              type="text"
              defaultValue={state.contact}
              onChange={handleChange}
              name="contact"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              margin: "12px",
              padding: "10px",
              fontWeight: "600",
            }}
          >
            <Typography
              component={"h6"}
              variant="body1"
              sx={{
                fontWeight: "600",
                marginLeft: "20%",
                marginTop: "2%",
                fontFamily: "Poppins",
              }}
            >
              Address
            </Typography>
            <input
              style={{ height: "36px", marginLeft: "7%" }}
              type="text"
              defaultValue={state.address}
              onChange={handleChange}
              name="address"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              margin: "12px",
              padding: "10px",
              fontWeight: "600",
            }}
          >
            <Typography
              component={"h6"}
              variant="body1"
              sx={{
                fontWeight: "600",
                marginLeft: "20%",
                marginTop: "2%",
                fontFamily: "Poppins",
              }}
            >
              Password
            </Typography>
            <input
              style={{ height: "36px", marginLeft: "4%" }}
              type="text"
              placeholder="Enter password"
              onChange={handleChange}
              name="password"
            />
          </Box>
          {/* <Box
            sx={{
              display: "flex",
              margin: "12px",
              padding: "10px",
              fontWeight: "600",
            }}
          >
            <Typography
              component={"h6"}
              variant="body1"
              sx={{
                fontWeight: "600",
                marginLeft: "20%",
                marginTop: "2%",
                fontFamily: "Poppins",
              }}
            >
              Orders
            </Typography>
            <input
              style={{ height: "36px", marginLeft: "9%" }}
              type="number"
              placeholder="Enter orders"
              onChange={handleChange}
              name="product"
            />
          </Box> */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <Button color="success" onClick={handleClick} variant="contained">
              Update
            </Button>
          </Box>
        </Box>
      </Card>
    </div>
  );
};
export default StaffEdit;
