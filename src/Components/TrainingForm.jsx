import { useState } from "react";
import TrainingCardContainer from "./TrainingCardContainer";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import {
  MenuItem,
  Select,
  FormControlLabel,
  FormControl,
  InputLabel,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const TrainingForm = ({
  entries,
  setEntries,
  type,
  setType,
  sets,
  setSets,
  reps,
  setReps,
  weight,
  setWeight,
  trainingNotes,
  setTrainingNotes,
}) => {
  const [checked, setChecked] = useState(false);

  const entryConstructor = (type, sets, reps, weight, trainingNotes) => {
    const entryInit = {
      type,
      sets,
      reps,
      weight,
      trainingNotes,
    };
    console.log(entryInit);
    entries.push(entryInit);
    setEntries(entries);
    setType("");
    setSets(0);
    setReps(0);
    setWeight(0);
    setTrainingNotes("");
  };

  return (
    <Box >
      {/* <Typography varient=>HangBoard form</Typography> */}
      {/* Below is the hangboard switch */}
      {/* <FormControlLabel
        control={<Switch />}
        onChange={() => setChecked(!checked)}
        label="HangBoarding"
      /> */}

      <Box className="trainingFormContainer">
        <FormControl style={{ minWidth: 300 }} variant="standard">
          <InputLabel id="typeSelector">Type</InputLabel>
          <Select
            labelId="typeSelector"
            id="typeSelector"
            value={type}
            label="type"
            onChange={(e) => setType(e.target.value)}
            
          >
            <MenuItem value={"Half Crimp"}>Half Crimp</MenuItem>
            <MenuItem value={"Full Crimp"}>Full Crimp</MenuItem>
            <MenuItem value={"Three Finger Open"}>Three Finger Open</MenuItem>
            <MenuItem value={"Back Three Crimp"}>
              Back Three Half Crimp
            </MenuItem>
            <MenuItem value={"twoFingerPocket"}>Two Finger Pocket</MenuItem>
          </Select>
        </FormControl>

        <FormControl style={{ minWidth: 125 }} variant="standard">
          <InputLabel id="setSelector">Sets</InputLabel>
          <Select
            labelId="setSelector"
            id="setSelector"
            value={sets}
            label="sets"
            onChange={(e) => setSets(e.target.value)}
            
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>

        <FormControl style={{ minWidth: 125 }} variant="standard">
          <InputLabel id="repSelector">Reps</InputLabel>
          <Select
            labelId="repSelector"
            id="repSelector"
            value={reps}
            label="reps"
            onChange={(e) => setReps(e.target.value)}
            
          >
            <MenuItem value={0}>0</MenuItem>
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
        <FormControl style={{ minWidth: 125 }} variant="standard">
          <InputLabel id="weightSelector">Weight</InputLabel>
          <Select
            labelId="weightSelector"
            id="weightSelector"
            value={weight}
            label="weights"
            onChange={(e) => setWeight(e.target.value)}
            
          >
            <MenuItem value={0}>0</MenuItem>
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
        <FormControl style={{ minWidth: 300 }}>
          <TextField
            id="notesSection"
            label="Notes"
            variant="standard"
            value={trainingNotes}
            onChange={(e) => setTrainingNotes(e.target.value)}
          />
        </FormControl>
        <Box className="submitButtonContainer">
          <Button
            onClick={() =>
              entryConstructor(type, sets, reps, weight, trainingNotes)
            }
          >
            Submit
          </Button>
        </Box>
      </Box>

      {entries >= 1 && (
        <TrainingCardContainer entries={entries} setEntries={setEntries} />
      )}
    </Box>
  );
};

export default TrainingForm;
