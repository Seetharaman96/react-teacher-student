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

export function Teachers() {
  const navigate = useNavigate();
  const teachers = [
    {
      id: "99",
      name: "Paari",
      Gender: "Male",
      subject: "Tamil",
      address: "Chidambaram",
      email: "paari@gmail.com",
      contact: 1234567890,
    },
    {
      id: "100",
      name: "Kabilar",
      Gender: "Male",
      subject: "English",
      address: "Bangalore",
      email: "kabilar@gmail.com",
      contact: 1234567890,
    },
    {
      id: "101",
      name: "Kabilar",
      Gender: "Male",
      subject: "English",
      address: "Bangalore",
      email: "kabilar@gmail.com",
      contact: 1234567890,
    },
  ];

  return (
    <div className="data">
      <h1 className="title">Welcome to Teachers datas</h1>
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
            {teachers.map((tech) => (
              <StyledTableRow key={tech.id}>
                <StyledTableCell component="th" scope="row">
                  {tech.id}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {tech.name}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {tech.standard}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {tech.batch}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {tech.address}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {tech.email}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {tech.contact}
                </StyledTableCell>
                <StyledTableCell>
                  <IconButton variant="contained" color="success" onClick={()=>navigate("/teacher/details")}>
                    <InfoIcon></InfoIcon>
                  </IconButton>
                  <IconButton variant="contained" color="success" onClick={()=>navigate("/teacher/edit")}>
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
        <Button variant="contained" onClick={()=>navigate("/add/teacher")}>Add Teacher</Button>
      </div>
    </div>
  );
}