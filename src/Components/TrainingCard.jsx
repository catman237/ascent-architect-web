import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const TrainingCard = ({ entry, entries, setEntries }) => {
  const deleteCard = (currentEntry) => {
    const updatedEntries = entries.filter(
      (entry) => entry.type !== currentEntry.type
    );
    setEntries(updatedEntries);
  };

  return (
    <Card sx={{ width: 300 }} className="card">
      <CardContent>
        <Typography variant="h6">{entry.type}</Typography>
        <Typography>Sets: {entry.sets}</Typography>
        <Typography>Reps: {entry.reps}</Typography>
        <Typography>Weight: {entry.weight}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => deleteCard(entry)}>Delete</Button>
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
