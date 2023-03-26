import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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

export function Students() {
  const navigate = useNavigate()
  const students = [
    {
      id: "99",
      name: "Seetharaman",
      standard: "12",
      batch: "B",
      address: "Chidambaram",
      email: "seetharaman@gmail.com",
      contact: 9876543210,
    },
    {
      id: "100",
      name: "Aadhira",
      standard: "12",
      batch: "B",
      address: "Bangalore",
      email: "aadhira@gmail.com",
      contact: 9876543210,
    },
    {
      id: "101",
      name: "Krishnan",
      standard: "12",
      batch: "B",
      address: "Chidambaram",
      email: "krishnan@gmail.com",
      contact: 9876543210,
    },
    {
      id: "102",
      name: "Dhanam",
      standard: "12",
      batch: "B",
      address: "Chidambaram",
      email: "dhanam@gmail.com",
      contact: 9876543210,
    },
    {
      id: "103",
      name: "Raghu",
      standard: "12",
      batch: "B",
      address: "Bangalore",
      email: "raghu@gmail.com",
      contact: 9876543210,
    },
    {
      id: "104",
      name: "Anbu",
      standard: "12",
      batch: "B",
      address: "Bangalore",
      email: "anbu@gmail.com",
      contact: 9876543210,
    },
    {
      id: "105",
      name: "Aadhini",
      standard: "12",
      batch: "B",
      address: "Trichy",
      email: "aadhini@gmail.com",
      contact: 9876543210,
    },
  ];

  return (
    <div className="data">
      <h1 className="title">Welcome to Students datas</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>NAME</StyledTableCell>
              <StyledTableCell>STANDARD</StyledTableCell>
              <StyledTableCell>BATCH</StyledTableCell>
              <StyledTableCell>ADDRESS</StyledTableCell>
              <StyledTableCell>EMAIL</StyledTableCell>
              <StyledTableCell>CONTACT</StyledTableCell>
              <StyledTableCell>ACTION</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((std) => (
              <StyledTableRow key={std.id}>
                <StyledTableCell component="th" scope="row">
                  {std.id}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {std.name}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {std.standard}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {std.batch}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {std.address}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {std.email}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {std.contact}
                </StyledTableCell>
                <StyledTableCell>
                  <IconButton variant="contained" color="success" onClick={()=>navigate("/student/details")}>
                    <InfoIcon></InfoIcon>
                  </IconButton>
                  <IconButton variant="contained" color="success" onClick={()=>navigate("/student/edit")}>
                    <EditIcon></EditIcon>
                  </IconButton>
                  <IconButton variant="contained" color="error">
                    <DeleteIcon></DeleteIcon>
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="btn">
        <Button variant="contained" onClick={()=>navigate("/add/student")}>Add Student</Button>
      </div>
    </div>
  );
}