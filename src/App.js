import "./App.css";
import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import TrainingForm from "./Components/TrainingForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const testData = [
    {
      type: "Three Finger Open",
      sets: 3,
      reps: 2,
      weight: 10,
      trainingNotes: "dsdsfsfddssdffdssdgdfgxsdghffdgdssklgfdj"
    },
    {
      type: "Full Crimp",
      sets: 5,
      reps: 8,
      weight: "ISO",
      trainingNotes: "dsf"
    }
  ];
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const baseURL = "http://localhost:3000/dummyData.json";
  const [userData, setUserData] = useState([]);
  const [type, setType] = useState("");
  const [sets, setSets] = useState();
  const [reps, setReps] = useState();
  const [weight, setWeight] = useState();
  const [trainingNotes, setTrainingNotes] = useState("");
  const [entries, setEntries] = useState(testData);

  useEffect(() => {
    axios.get(baseURL).then((res) => setUserData(res.data));
  }, []);

  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={(e) => handleClick(e)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Ascent Architect
            </Typography>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem>
                <Link to="/">Profile</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/trainingForm">TrainingForm</Link>
              </MenuItem>
              <MenuItem>Climb Form</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route
          path="/trainingForm"
          element={
            <TrainingForm
              entries={entries}
              setEntries={setEntries}
              setType={setType}
              type={type}
              setSets={setSets}
              sets={sets}
              setReps={setReps}
              reps={reps}
              setWeight={setWeight}
              weight={weight}
              setTrainingNotes={setTrainingNotes}
              trainingNotes={trainingNotes}
            /> 
          }
        />
      </Routes>
    </Router>
  );
}

export default App;


