import { useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckIcon from '@mui/icons-material/Check';

const TrainingCard = ({ entry, entries, setEntries }) => {
  const [completed, setCompleted] = useState(entry.completed);
  const [completedSets, setCompletedSets] = useState()

  const deleteCard = (currentEntry) => {
    const updatedEntries = entries.filter(
      (entry) => entry.id !== currentEntry.id
    );
    setEntries(updatedEntries);
    axios.delete(`http://localhost:9001/trainingForms/${currentEntry.id}`);
  };

  return (
    <Card className="card">
      <CardContent>
        {completed && <Typography><CheckIcon></CheckIcon></Typography>}
        <Typography variant="h6">{entry.type}</Typography>
        <Typography>Time On: {entry.timeOn}</Typography>
        <Typography>Time Off: {entry.timeOff}</Typography>
        {completedSets && <Typography>Sets: {entry.sets}</Typography>}
        <Typography>Reps: {entry.reps}</Typography>
        <Typography>
          Weight: {!entry.weight === -1 ? entry.weight : "ISO"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => deleteCard(entry)}>Delete</Button>
        <Button onClick={() => setCompletedSets(completedSets + 1)}>Complete Set</Button>
        {!completed && (
          <Button onClick={() => setCompleted(true)}>Completed</Button>
        )}
      </CardActions>
    </Card>
  );
};

export default TrainingCard;

// notes section below I had a hard tirme styling this for width.
// import Box from "@mui/material/Box";
/* <Typography>Notes</Typography> */
/* <Box className="cardText">
  <Typography >{entry.trainingNotes}</Typography>
</Box> */
