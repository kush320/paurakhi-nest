import React from "react";
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
  ButtonBase,
  Stack,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const columns = [
    { id: "sn", label: "S.n" },
   
    {
      id: "point",
      label: "Collection Point",
    },
  ];
  function createData(sn, point) {
    return { sn, point };
  }
  
  const rows = [
    createData("1", "Pokhara",),
    createData("2", "Kathmandu",),
    createData("3", "butwal",),
    createData("1", "Kathmandu",),
    createData("2", "butwal",),
    createData("3", "Kathmandu",),
    createData("1", "Pokhara",),
    createData("2", "Pokhara",),
    createData("3", "Pokhara",),
  ];
  
  
export default function CollectionList() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    const navigate = useNavigate();
  return (
    <Box sx={{ width: "100%", background: "#f4f4f4" }}>
    <Box sx={{ float: "right", position: "relative", right: "20px" }}>
      <Stack direction="row" spacing={2} className="my-2 mb-2">
        <ButtonBase>
          <Button
            color="success"
            variant="contained"
            sx={{ backgroundColor: "#34A853" }}
            onClick={() => navigate("/collectionPoint/add")}
          >
            Add Collection Point
          </Button>
        </ButtonBase>
      </Stack>
    </Box>

    <Paper
      sx={{
        width: "99%",
        paddingLeft: "0.5%",
        overflow: "hidden",
        position: "relative",
        top: "30px",
        background: "#f4f4f4",
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
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
                        <TableCell key={column.prodID} align={column.align}>
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
                          onClick={() => navigate("/collectionPoint/edit",{
                            state:{
                              name: row.point,
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
