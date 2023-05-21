import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {
  Autocomplete,
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditTable from "./EditTable";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  width: "80%",
  borderRadius: Number(theme.shape.borderRadius) * 4,
  backgroundColor: alpha(theme.palette.common.white, 0.7),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.7),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  color: alpha(theme.palette.grey[500], 0.5),
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "32ch",
      "&:focus": {
        width: "34ch",
      },
    },
  },
  "&::placeholder": {
    textOverflow: "ellipsis !important",
    color: "black",
  },
}));

const columns = [
  {
    id: "prodID",
    label: "Product ID",
  },

  { id: "prod", label: "Name of The Product" },
  {
    id: "cat",
    label: "Category",
  },
  {
    id: "type",
    label: "Type",
  },
  {
    id: "price",
    label: "Price",
  },

  {
    id: "qty",
    label: "Quantity",
  },
  {
    id: "status",
    label: "Status",
  },
];


// DUMMY DATA START -----------------
function createData(prodID, prod, cat, type, price, qty, status) {
  return { prodID, prod, cat, type, price, qty, status };
}

const rows = [
  createData("#TXASOF", "Rice", "Product1", "Request", "1400", "4", "Pending"),
  createData("#TXASOF", "Rice", "Product1", "Request", "1400", "4", "Pending"),
  createData("#TXASOF", "Rice", "Product1", "Request", "1400", "4", "Pending"),
  createData("#TXASOF", "Rice", "Product1", "Request", "1400", "4", "Pending"),
  createData("#TXASOF", "Rice", "Product1", "Request", "1400", "4", "Pending"),
  createData("#TXASOF", "Rice", "Product1", "Request", "1400", "4", "Pending"),
  createData("#TXASOF", "Rice", "Product1", "Request", "1400", "4", "Pending"),
  createData("#TXASOF", "Rice", "Product1", "Request", "1400", "4", "Pending"),
  createData("#TXASOF", "Rice", "Product1", "Request", "1400", "4", "Pending"),
  createData("#TXASOF", "Rice", "Product1", "Request", "1400", "4", "Pending"),
  createData("#TXASOF", "Rice", "Product1", "Request", "1400", "4", "Pending"),
  createData("#TXASOF", "Rice", "Product1", "Request", "1400", "4", "Pending"),
];
  // DUMMY DATA END -----------------
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "red",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProductsSub() {
  const [page, setPage] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState("");
  // const [rows, setRows] = React.useState([]);
  // console.log(process.env.REACT_APP_GET_PRODUCT)
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  // getData()
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const label = { inputProps: { "aria-label": "Size switch demo" } };

  const navigate = useNavigate();

  //geting data from backend

  // const [rows, setRows] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const response = await axios.get(process.env.REACT_APP_URL + "/product/get-product-staff",
  //       {withCredentials:true});
  //       setRows(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getData();
  // }, []);

  // useEffect(() => {
  //   rows();
  // }, []);

  // const rows = async () => {
  //   try {
  //     const response = await axios.get(process.env.REACT_APP_GET_PRODUCT);
  //     setData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <Box sx={{ width: "100%", background: "#f4f4f4" }}>
      <Box
        sx={{
          width: "99%",
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "0.5%",
        }}
      >
        <Stack direction="row" spacing={2} className="my-2 mb-2">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={rows}
            sx={{ width: 300 }}
            // onChange={(e, v) => filterData(v)}
            getOptionLabel={(rows) => rows.prod || ""}
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                label="Select Category"
                sx={{
                  marginLeft: "4px",
                  width: "250px",
                  backgroundColor: "white",
                }}
              />
            )}
          />
        </Stack>

        <Search
          sx={{
            backgroundBlendMode: "revert",
            width: "25%",
            marginLeft: "20%",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        {/* <TextField
                            id="filled-search"
                            // label="Search field"
                            placeholder='Search by'
                            // type="search"
                            variant="outlined"
                            size='small'
                            sx={{ width: '250px' , backgroundColor:'white' }}

                        /> */}

        <Button
          color="success"
          variant="contained"
          sx={{ height: "50%", marginRight: "22%", backgroundColor: "#34A853" }}
        >
          Find
        </Button>

        {/* <Button variant="outlined" sx={{ color: '#34A853', borderColor: '#34A853', borderWidth: '3px', fontWeight: '600' }}>
                    Add Product
                </Button> */}
      </Box>

      <Paper
        sx={{
          background: "#f4f4f4",
          width: "99%",
          overflow: "hidden",
          marginTop: "12px",
          position: "relative",
          top: "30px",
          paddingLeft: "0.5%",
        }}
      >
        <TableContainer sx={{ maxHeight: 440, marginTop: "0%" }}>
          <Table
            stickyHeader
            aria-label="sticky table"
            style={{ backgroundColor: "#f4f4f4" }}
          >
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontWeight: "600",
                      fontSize: "15px",
                      fontFamily: "Poppins",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    fontFamily: "Poppins",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    fontFamily: "Poppins",
                  }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.prodID} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                      <TableCell>
                        <Button variant="outlined" color="error">
                          Pending
                        </Button>
                      </TableCell>
                      {/* <TableCell>
                                                <Switch {...label} defaultChecked />
                                            </TableCell> */}
                      <TableCell>
                        <Stack spacing={2} direction="row">
                          <EditIcon
                            style={{
                              fontSize: "20px",
                              color: "#34A853",
                              cursor: "pointer",
                            }}
                            className="cursor-pointer"
                            // onClick={() => editProducts(row.prodID, row.prod, row.cat, row.price, row.qty)}
                            onClick={() => navigate("/products/edit",{
                              state:{
                                name:row.prod,
                                pr:row.price,
                                cate:row.cat,
                              }
                            })}
                          />
                          <DeleteIcon
                            style={{
                              fontSize: "20px",
                              color: "#DE5454",
                              cursor: "pointer",
                            }}
                            // onClick={() => {
                            //     deleteUser(row.id);
                            // }} 
                          />
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{ backgroundColor: "#f4f4f4" }}
          rowsPerPageOptions={[10]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
