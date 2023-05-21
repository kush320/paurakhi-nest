import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const EditTable = () => {
  const {state}=useLocation();
  const [products, setProducts] = useState({
    nameOfProduct: "",
    cat: "",
    price: "",
    quantity: null,
    status: "",
  });

  const handleChange = (e) => {
    setProducts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
      <Card style={{ marginBottom: "2%", minWidth: "500px" }}>
      {JSON.stringify(state.code)}
        {/* <Box sx={{ minWidth: '500px', padding: '16px'}}> */}
        <Typography
          component={"h3"}
          variant="h5"
          sx={{
            display: "flex",
            margin: "12px",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "600",
            fontFamily: "Poppins",
          }}
        >
          Product Details
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
              fontFamily: "Poppins",
              margin: "5px",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "20%",
            }}
          >
            Name
          </Typography>
          <input
            style={{ height: "36px", marginLeft: "10%" }}
            type="text"
            defaultValue={state.name}
            onChange={handleChange}
            name="product"
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
              fontFamily: "Poppins",
              margin: "5px",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "20%",
            }}
          >
            Price
          </Typography>
          <input
            style={{ height: "36px", marginLeft: "12%" }}
            type="number"
            defaultValue={state.pr}
            onChange={handleChange}
            name="product"
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
              fontFamily: "Poppins",
              margin: "5px",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "20%",
            }}
          >
            Category
          </Typography>
          <input
            style={{ height: "36px", marginLeft: "4%" }}
            type="text"
            defaultValue={state.cate}
            onChange={handleChange}
            name="product"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            margin: "12px",
            right: "24px",
            padding: "10px",
            fontWeight: "600",
          }}
        >
          <Typography
            component={"h6"}
            variant="body1"
            sx={{
              fontWeight: "600",
              fontFamily: "Poppins",
              margin: "5px",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "20%",
            }}
          >
            Status
          </Typography>
          <select
            id="status"
            style={{ height: "36px", width: "167px", marginLeft: "9%" }}
          >
            <option value="pending">Pending</option>
            <option value="ok">Accepted</option>
            <option value="ok">Decline</option>
          </select>
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
              fontFamily: "Poppins",
              margin: "5px",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "20%",
            }}
          >
            Description
          </Typography>
          <input 
            style={{ height: "36px", marginLeft: "0%"}}
            type="text"
            placeholder="Type....."
            onChange={handleChange}
            name="product"
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
            Update
          </Button>
        </Box>
        {/* </Box> */}
      </Card>
    </div>
  );
};

export default EditTable;
