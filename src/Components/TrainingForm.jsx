import { useState } from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import { sizing } from "@mui/system";
import {
  MenuItem,
  Select,
  FormControlLabel,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";

const TrainingForm = ({ data }) => {
  const [checked, setChecked] = useState(true);
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const [type, setType] = useState();
  const [trainingNotes, setTrainingNotes] = useState();

  return (
    <Box style={({ width: "50%" }, { marginLeft: "1rem" })}>
      <FormControlLabel
        control={<Switch />}
        onChange={() => setChecked(!checked)}
        label="HangBoarding"
      />
      {checked && (
        <Box
          style={
            ({ display: "flex" },
            { justifyContent: "space-between" },
            { width: "25rem" })
          }
        >
          <FormControl style={{minWidth: 300}} variant="standard" >
            <InputLabel id="typeSelector">Type</InputLabel>
            <Select
              labelId="typeSelector"
              id="typeSelector"
              value={type}
              label="type"
              onChange={(e) => setType(e.target.value)}
              style={{ margin: "2rem" }}
            >
              <MenuItem value={"halfCrimp"}>Half Crimp</MenuItem>
              <MenuItem value={"fullCrimp"}>Full Crimp</MenuItem>
              <MenuItem value={"threeFingerOpen"}>Three Finger Open</MenuItem>
              <MenuItem value={"backThreeCrimp"}>
                Back Three Half Crimp
              </MenuItem>
              <MenuItem value={"twoFingerPocket"}>Two Finger Pocket</MenuItem>
            </Select>
          </FormControl>
      
            <FormControl  style={{minWidth: 125}} variant="standard">
              <InputLabel id="setSelector">Sets</InputLabel>
              <Select
                labelId="setSelector"
                id="setSelector"
                value={sets}
                label="sets"
                onChange={(e) => setSets(e.target.value)}
                style={{ margin: "2rem" }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
  
          <FormControl style={{minWidth: 125}} variant="standard">
            <InputLabel id="repSelector">Reps</InputLabel>
            <Select
              labelId="repSelector"
              id="repSelector"
              value={reps}
              label="reps"
              onChange={(e) => setReps(e.target.value)}
              style={{ margin: "2rem" }}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={5}>6</MenuItem>
              <MenuItem value={5}>7</MenuItem>
              <MenuItem value={5}>8</MenuItem>
              <MenuItem value={5}>9</MenuItem>
              <MenuItem value={5}>10</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{minWidth: 125}} variant="standard">
            <InputLabel id="weightSelector">Weight</InputLabel>
            <Select
              labelId="weightSelector"
              id="weightSelector"
              value={weight}
              label="weights"
              onChange={(e) => setWeight(e.target.value)}
              style={{ margin: "2rem" }}
            >
              <MenuItem value={1}>ISO</MenuItem>
              <MenuItem value={10}>10 lb</MenuItem>
              <MenuItem value={20}>20 lb</MenuItem>
              <MenuItem value={30}>30 lb</MenuItem>
              <MenuItem value={40}>40 lb</MenuItem>
              <MenuItem value={50}>50 lb</MenuItem>
              <MenuItem value={60}>60 lb</MenuItem>
              <MenuItem value={70}>70 lb</MenuItem>
              <MenuItem value={80}>80 lb</MenuItem>
              <MenuItem value={90}>90 lb</MenuItem>
              <MenuItem value={100}>100 lb</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <TextField id="notesSection" label="Notes" variant="standard" />
          </FormControl>
        </Box>
      )}
    </Box>
  );
};

export default TrainingForm;
