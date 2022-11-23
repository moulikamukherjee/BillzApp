import React from "react";
import PropTypes from 'prop-types';
import { Container, TableContainer } from '@material-ui/core';
import { Paper, Table, TableHead, TableBody, TableFooter, TableRow, TableCell, Box , TablePagination, useTheme, IconButton } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';


function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

const rows = [{
    billNo: 'M35780',
    billType:'Primary',
    status: 'Initiated',
    sponsor: 'self' 
  },{
    billNo: 'B579809',
    billType: 'Secondary',
    status: 'Reported',
    sponsor: 'self' 
  },{
    billNo: 'X579809',
    billType: 'Secondary',
    status: 'Reported',
    sponsor: 'self' 
  },{
    billNo: 'K587909',
    billType: 'Secondary',
    status: 'Pending',
    sponsor: 'self' 
  },{
    billNo: 'L003299',
    billType: 'Primary',
    status: 'Reported',
    sponsor: 'self' 
  },{
    billNo: 'N930009',
    billType: 'Secondary',
    status: 'Reported',
    sponsor: 'self' 
  },{
    billNo: 'N930009',
    billType: 'Secondary',
    status: 'Reported',
    sponsor: 'self' 
  },{
    billNo: 'N930009',
    billType: 'Secondary',
    status: 'Reported',
    sponsor: 'self' 
  },{
    billNo: 'N930009',
    billType: 'Secondary',
    status: 'Reported',
    sponsor: 'self' 
  },{
    billNo: 'N930009',
    billType: 'Secondary',
    status: 'Reported',
    sponsor: 'self' 
  },{
    billNo: 'N930009',
    billType: 'Secondary',
    status: 'Reported',
    sponsor: 'self' 
  }]

  const BillsTable = () => {
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container maxWidth="lg">
    <TableContainer component={Paper} maxWidth="sm">
      <Table sx={{ minWidth: 650 }} aria-label="custom pagination table">
      <TableHead>
                       <TableRow sx={{"& th": {
                            color: "white",
                            backgroundColor: "black"
                        }}}>
                        <TableCell>Bill Number</TableCell>
                        <TableCell>Bill Type</TableCell>
                        <TableCell>Bill Status</TableCell>
                        <TableCell>Sponsor</TableCell>
                    </TableRow>
                    </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.billNo}>
                <TableCell component="th" scope="row">
                {row.billNo}
              </TableCell>
              <TableCell >
                {row.billType}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.sponsor}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    </Container>
  );
  }

// const BillsTable = () => {
//     return (
//         <div>
//             <>
//             <TableContainer component = {Paper} aria-label='simple table'>
//                 <Table sx={{minWidth:650}}>
//                     <TableHead>
//                     <TableRow sx={{"& th": {
//                             color: "white",
//                             backgroundColor: "black"
//                         }}}>
//                         <TableCell>Bill Number</TableCell>
//                         <TableCell align="right">Bill Type</TableCell>
//                         <TableCell align="right">Bill Status</TableCell>
//                         <TableCell align="right">Sponsor</TableCell>
//                     </TableRow>
//                     </TableHead>
//                     <TableBody>
//                     {rows.map((row) => (
//                         <TableRow
//                         key={row.name}
//                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                         >
//                         <TableCell component="th" scope="row">
//                             {row.billNo}
//                         </TableCell>
//                         <TableCell align="right">{row.billType}</TableCell>
//                         <TableCell align="right">{row.status}</TableCell>
//                         <TableCell align="right">{row.sponsor}</TableCell>
//                         </TableRow>
//                     ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
            
//             </>
//         </div>
//     )
// }

export default BillsTable