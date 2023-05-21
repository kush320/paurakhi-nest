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
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


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
    {
        id: 'TId',
        label: 'Tickets ID',
    },
    {
        id: 'Title',
        label: 'Tickets Title',
    },
    {
        id: 'Created',
        label: 'Created at',
    },
    
   
];

function createData(sn, TId,Title, Created, ) {
    return { sn, TId,Title, Created, };
}

const rows = [
    createData('1', '2','Dhaan', '2022/10/1', 'Shyam',),
    createData('1', '3','Problem1', '2022/10/1', 'Ram', ),
    createData('1', '4','Problem9', '2022/10/1', 'Ram',),
    createData('1', '9','Problem4', '2022/10/1', 'Ram',),
    createData('1', '5','Problem3', '2022/10/1', 'Ram',),
    createData('1', '2','Problem8', '2022/10/1', 'Ram',),
    createData('1', '8','Problem7', '2022/10/1', 'Ram',),
    createData('1', '13','Problem6', '2022/10/1', 'Ram',),
    createData('1', '7','Problem15', '2022/10/1', 'Shyam',),
    createData('1', '11','Problem3', '2022/10/1', 'Shyam',),
    createData('1', '12','Problem14', '2022/10/1', 'Ram'),
    createData('1', '2','Problem17', '2022/10/1', 'Ram',),
    createData('1', '10','Problem22', '2022/10/1', 'Ram',),

];



export default function ViewTicketsSub() {

    const [page, setPage] = React.useState(0);
    const [searchTerm, setSearchTerm] = React.useState("");
  
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
    <Box sx={{ width: '100%',background: '#f4f4f4',}}>
     <Box sx={{width: '68%', display: 'flex', justifyContent: 'space-between',}}>
        <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={rows}
                sx={{ width: 300 }}
                // onChange={(e, v) => filterData(v)}
                getOptionLabel={(rows) => rows.Title || ""}
                renderInput={(params) => (
                    <TextField {...params} size="small" label="Search By Ticket Title" sx={{ marginLeft: '4px', width: '250px',  backgroundColor:'white' }} />
                )}
            />

        </Stack>
        <Stack sx={{marginLeft:'30%'}}>
                    <Search sx={{ backgroundBlendMode: 'revert'}}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}

                            />
                        </Search>
                        </Stack>
                        <Stack>
                        <Button variant='contained' sx={{backgroundColor: '#34A853' }}>Find</Button>
                       </Stack>
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
                        <TableCell style={{ fontWeight: '600', fontSize: '15px', fontFamily:'Poppins' }}>Status</TableCell>
                        
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
                                                <Button color="success" variant="contained" 
                                                 onClick={() => navigate("/tickets/ticketreply")}>
                                                    Open
                                                    </Button>
                                                    <Button color="error" variant="contained" >
                                                    Close
                                                    </Button>
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
            rowsPerPageOptions={[10, 25, 100]}
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

