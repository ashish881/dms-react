import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

function createData(custId, name, renewalDate, expireDate) {
  return { custId, name, renewalDate, expireDate };
}

const rows = [
  createData(1, "abc", "01/01/2015", "01/01/2020"),
  createData(2, "def", "01/01/2016", "01/01/2022"),
  createData(3, "ijk", "01/01/2017", "01/01/2025"),
  createData(4, "lmn", "01/01/2018", "01/01/2030"),
  createData(5, "abc", "01/01/2019", "01/01/2020"),
  createData(6, "def", "01/01/2020", "01/01/2022"),
  createData(7, "ijk", "01/01/2017", "01/01/2025"),
  createData(8, "lmn", "01/01/2018", "01/01/2030"),
  createData(9, "abc", "01/01/2015", "01/01/2020"),
  createData(10, "def", "01/01/2016", "01/01/2022"),
  createData(11, "ijk", "01/01/2017", "01/01/2025"),
  createData(12, "lmn", "01/01/2018", "01/01/2030"),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1976d2",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function DenseTable() {
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const sliceRow = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  console.log("rowperpage", rowsPerPage);

  console.log("slic", sliceRow);

  const handleChangePage = (event, newPage) => {
    console.log("newpage", newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log("event.target.value", event.target.value);
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="a dense table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="center">Customer Id</StyledTableCell>
            <StyledTableCell align="center">Customer Name</StyledTableCell>
            <StyledTableCell align="center">Renewal Date</StyledTableCell>
            <StyledTableCell align="center">Expired Date</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {sliceRow.map((row) => (
            <StyledTableRow
              key={row.custId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row" align="center">
                {row.custId}
              </StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">
                {row.renewalDate}
              </StyledTableCell>
              <StyledTableCell align="center">{row.expireDate}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 40]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
