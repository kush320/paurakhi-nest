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
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InputBase from "@mui/material/InputBase";
import { useNavigate } from "react-router-dom";

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
  { id: "sn", label: "S.n" },

  {
    id: "QueryId",
    label: "Query ID",
  },

  {
    id: "UserId",
    label: "User ID",
  },

  {
    id: "status",
    label: "Status",
  },
];

function createData(sn, QueryId, UserId, status) {
  return { sn, QueryId, UserId, status };
}

const rows = [
  createData("1", "3011", "404", "Unknown"),
  createData("2", "3013", "405", "Unknown"),
  createData("3", "30", "406", "Unknown"),
  createData("4", "31", "407", "Unknown"),
  createData("5", "3001", "408", "Unknown"),
  createData("6", "331", "409", "Unknown"),
  createData("7", "21", "410", "Unknown"),
  createData("8", "11", "414", "Unknown"),
  createData("9", "221", "424", "Unknown"),
  createData("10", "11", "434", "Unknown"),
  createData("11", "381", "444", "Unknown"),
  createData("12", "391", "454", "Unknown"),
  createData("13", "451", "604", "Unknown"),
  createData("14", "671", "104", "Unknown"),
  createData("15", "181", "504", "Unknown"),
  createData("16", "271", "204", "Unknown"),
];

export default function CollectionSub() {
  const [page, setPage] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState("");
  // const [rows, setRows] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const navigate = useNavigate();

  // const getUsers = async () => {
  //     const data = await getDocs(empCollectionRef);
  //     setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };

  // const filterData = (v) => {
  //     if (v) {
  //         setRows([v]);
  //     } else {
  //         getUsers();
  //     }
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
            getOptionLabel={(rows) => rows.status || ""}
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                label="Search By Status"
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

        <Button
          color="success"
          variant="contained"
          sx={{ height: "50%", marginRight: "22%", backgroundColor: "#34A853" }}
        >
          Find
        </Button>

        {/* <Button variant="outlined" sx={{ color: '#34A853', borderColor: '#34A853', borderWidth: '3px', fontWeight: '600' }}>
                    Add User
                </Button> */}
      </Box>
      <Paper
        sx={{
          background: "#f4f4f4",
          width: "99%",
          paddingLeft: "0.5%",
          overflow: "hidden",
          marginTop: "12px",
          position: "relative",
          top: "30px",
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
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
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
                            onClick={() =>
                              navigate("/collection/collectionEdit",{
                                state:{
                                  qrId:row.QueryId,
                                  uId:row.UserId,
                                  stat:row.status
                                }
                              })
                            }
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
        ></TablePagination>
      </Paper>
    </Box>
  );
}
