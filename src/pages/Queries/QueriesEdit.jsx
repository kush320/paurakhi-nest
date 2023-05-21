import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import QueriesSub from "./QueriesSub"; 
import { useLocation } from "react-router-dom";

const QueriesEdit = ({route,navigation}) => {
  // const passedData=route.params;
  const {state}=useLocation();
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
      }}
    >
      <Card style={{ marginBottom: "1%" }}>
        {/* {JSON.stringify(state)} */}
        {JSON.stringify(state.code)}
        <Box sx={{ minWidth: "700px", padding: "16px" }}>
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
            Queries
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
                marginLeft: "30%",
                marginTop: "1%",
                fontFamily: "Poppins",
              }}
            >
              Query ID
            </Typography>
            <input
              style={{ height: "36px", marginLeft: "13%" }}
              type="text"
            //   placeholder={rows}
              onChange={handleChange}
              name="name"
              value={state.qId}
              // placeholder={state.qId}
            />
          </Box>

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
                marginLeft: "30%",
                marginTop: "1%",
                fontFamily: "Poppins",
              }}
            >
              Product ID
            </Typography>
            <input
              style={{ height: "36px", marginLeft: "11%" }}
              type="text"
              onChange={handleChange}
              name="name"
              value={state.pId}
            />
          </Box>
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
                marginLeft: "30%",
                marginTop: "1%",
                fontFamily: "Poppins",
              }}
            >
              Product Name
            </Typography>
            <input
              style={{ height: "36px", marginLeft: "6%" }}
              type="text"
              onChange={handleChange}
              name="name"
              value={state.prName}
            />
          </Box>
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
                marginLeft: "30%",
                marginTop: "1%",
                fontFamily: "Poppins",
              }}
            >
              Quantity
            </Typography>
            <input
              style={{ height: "36px", marginLeft: "13%" }}
              type="text"
              onChange={handleChange}
              name="name"
              value={state.qt}
            />
          </Box>

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
                marginLeft: "30%",
                marginTop: "1%",
                fontFamily: "Poppins",
              }}
            >
              Approve Price
            </Typography>
            <input
              style={{ height: "36px", marginLeft: "6.5%" }}
              type="text"
              label="Approve Price"
              placeholder="Enter Price"
              onChange={handleChange}
              name="name"
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
                marginLeft: "30%",
                marginTop: "1%",
                fontFamily: "Poppins",
              }}
            >
              Pickup Point
            </Typography>
            <select
              id="status"
              style={{ height: "36px", width: "167px", marginLeft: "9%" }}
            >
              <option value="pending">Kathmandu</option>
              <option value="ok">Pokhara</option>
              <option value="ok">Butwal</option>
            </select>
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
                marginLeft: "30%",
                marginTop: "1%",
                fontFamily: "Poppins",
              }}
            >
              Destination Point
            </Typography>
            <select
              id="status"
              style={{ height: "36px", width: "167px", marginLeft: "3%" }}
            >
              <option value="pending">Kathmandu</option>
              <option value="ok">Pokhara</option>
              <option value="ok">Butwal</option>
            </select>
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
              Approve
            </Button>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default QueriesEdit;
