import "./App.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import TrainingForm from "./Components/TrainingForm";
import UserSignUpForm from "./Components/UserSignUpForm";
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
      trainingNotes: "dsdsfsfddssdffdssdgdfgxsdghffdgdssklgfdj",
    },
    {
      type: "Full Crimp",
      sets: 5,
      reps: 8,
      weight: "ISO",
      trainingNotes: "dsf",
    },
  ];

  const [anchorEl, setAnchorEl] = useState();

  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const baseUrl = "http://localhost:9001/trainingForms/";
  const [type, setType] = useState();
  const [sets, setSets] = useState();
  const [reps, setReps] = useState();
  const [weight, setWeight] = useState();
  const [trainingNotes, setTrainingNotes] = useState();
  const [timeOn, setTimeOn] = useState();
  const [timeOff, setTimeOff] = useState();
  const [entries, setEntries] = useState(testData);
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    height: 0,
    apeIndex: 0,
    weight: 0,
    age: 0,
    home: "",
  });

  useEffect(() => {
    axios.get(baseUrl).then((res) => setEntries(res.data));
  }, []);

  return (
    <Box className="app">
      <Router>
        <Box className="header">
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
              <Typography variant="h6" component="div">
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
                <MenuItem onClick={handleClose}>
                  <Link to="/" className="menuLink">
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/trainingForm" className="menuLink">
                    TrainingForm
                  </Link>
                </MenuItem>
                <MenuItem>Climb Form</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
        </Box>
    
          <UserSignUpForm user={user} setUser={setUser} />
        
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
                setTimeOn={setTimeOn}
                timeOn={timeOn}
                setTimeOff={setTimeOff}
                timeOff={timeOff}
                baseUrl={baseUrl}
              />
            }
          />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
