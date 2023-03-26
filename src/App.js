import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Dashboard } from "./Dashboard";
import { Teachers } from "./Teachers";
import { Students } from "./Students";
import { AddStudent } from "./AddStudent";
import { AddTeacher } from "./AddTeacher";
import { TeacherDetails } from "./TeacherDetails";
import { StudentDetails } from "./StudentDetails";
import { EditTeacher } from "./EditTeacher";
import { EditStudent } from "./EditStudent";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/teachers")}>
              Teacher
            </Button>
            <Button color="inherit" onClick={() => navigate("/students")}>
              Student
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teacher/details" element={<TeacherDetails />} />
        <Route path="/student/details" element={<StudentDetails />} />
        <Route path="/add/teacher" element={<AddTeacher />} />
        <Route path="/add/student" element={<AddStudent />} />
        <Route path="/teacher/edit" element={<EditTeacher />} />
        <Route path="/student/edit" element={<EditStudent />} />
      </Routes>
    </div>
  );
}

export default App;