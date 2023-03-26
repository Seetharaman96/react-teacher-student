import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";

export function AddStudent() {
  // const navigate = useNavigate()
  return (
    <div className="add-form">
      <h3>Hello all welcome to the add student form page</h3>
      <TextField id="outlined-basic" label="Id" variant="outlined" />
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Standard" variant="outlined" />
      <TextField id="outlined-basic" label="Batch" variant="outlined" />
      <TextField id="outlined-basic" label="Address" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Contact" variant="outlined" />
      <div className="btn">
        <Button variant="contained">Add Student</Button>
      </div>
    </div>
  );
}
