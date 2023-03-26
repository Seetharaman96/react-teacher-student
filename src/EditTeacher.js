import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export function EditTeacher() {
  return(
    <div className="add-form">
    <h3>Hello all welcome to the teacher edit page</h3>
    <TextField id="outlined-basic" label="Id" variant="outlined" />
    <TextField id="outlined-basic" label="Name" variant="outlined" />
    <TextField id="outlined-basic" label="Gender" variant="outlined" />
    <TextField id="outlined-basic" label="Subject" variant="outlined" />
    <TextField id="outlined-basic" label="Address" variant="outlined" />
    <TextField id="outlined-basic" label="Email" variant="outlined" />
    <TextField id="outlined-basic" label="Contact" variant="outlined" />
    <div className="btn">
      <Button variant="contained" color="success">Save</Button>
    </div>
  </div>
  )
}
