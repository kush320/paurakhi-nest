import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Autocomplete, Box, Button, Stack, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InputBase from '@mui/material/InputBase';
import { useNavigate } from 'react-router-dom';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    width:'80%',
    borderRadius: Number(theme.shape.borderRadius) * 4,
    backgroundColor: alpha(theme.palette.common.white, 0.70),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.70),
    },
    
   
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    color:alpha(theme.palette.grey[500], 0.50),
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '32ch',
            '&:focus': {
                width: '34ch',
            },
        },
    },
    '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: 'black'
    }
}));


const columns = [
    { id: 'sn', label: 'S.n', },
    { id: 'name', label: 'Name', },
    {
        id: 'cont',
        label: 'Contact',
        // minWidth: 90,
        // align: 'right',
        // format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'addr',
        label: 'Address',
        // minWidth: 90,
        // align: 'right',
        // format: (value) => value.toLocaleString('en-US'),
    },
   
];

function createData(sn, name, cont, addr, ) {
    return { sn, name, cont, addr, };
}

const rows = [
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura', ),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura', ),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura',),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura',),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura', ),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura', ),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura',),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura', ),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura',),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura',),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura',),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura', ),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura',),

];


export default function StaffSub() {
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

    const navigate = useNavigate()

    return (
        <Box sx={{ width: '100%', background: '#f4f4f4'}}>
            <Box sx={{ width: '99%', display: 'flex',  justifyContent: 'space-between', paddingRight:'0.5%'}}>
                <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={rows}
                        sx={{ width: 300 }}
                        // onChange={(e, v) => filterData(v)}
                        getOptionLabel={(rows) => rows.name || ""}
                        renderInput={(params) => (
                            <TextField {...params} size="small" label="Search By Name" sx={{ marginLeft: '4px', width: '250px',  backgroundColor:'white' }} />
                        )}
                    />

                </Stack>
                
                    <Search sx={{ backgroundBlendMode: 'revert',width:'25%', marginLeft:'20%'}}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}

                            />
                        </Search>
                      
                        
                       <Button color="success" variant='contained' sx={{height:'50%', marginRight:'22%', backgroundColor:"#34A853"}}>Find</Button>
                       
                {/* <Button variant="outlined" sx={{ color: '#34A853', borderColor: '#34A853', borderWidth: '3px', fontWeight: '600' }}>
                    Add User
                </Button> */}
            </Box>
            <Paper sx={{ background: '#f4f4f4', width: '99%',paddingLeft:'0.5%', overflow: 'hidden', marginTop: '12px', position: 'relative', top: '30px' }}>
                <TableContainer sx={{ maxHeight: 440, marginTop: '0%' }}>
                    <Table stickyHeader aria-label="sticky table" style={{backgroundColor:'#f4f4f4'}}>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, fontWeight: '600', fontSize: '15px', fontFamily:'Poppins' }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                                <TableCell style={{ fontWeight: '600', fontSize: '15px' }}>Action</TableCell>
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
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                            <TableCell >
                                                <Stack spacing={2} direction="row">
                                                    <EditIcon
                                                        style={{
                                                            fontSize: "20px",
                                                            color: "#34A853",
                                                            cursor: "pointer",
                                                        }}
                                                        className="cursor-pointer"
                                                        // onClick={() => editUser(row.id)}
                                                        onClick={() => navigate('/staff/staffedit')}


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
                    sx={{backgroundColor:'#f4f4f4'}}
                    rowsPerPageOptions={[10]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper >
        </Box>
    );
}
