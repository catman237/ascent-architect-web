import React from "react";
import { Box, FormControl, TextField, Button } from "@mui/material";

const ExistingUserForm = ({ user, setUser }) => {
  return (
    <Box className="userFromTextInputContainer">
      <FormControl
        sx={{ minwidth: 500 }}
        className="selectore"
        variant="standard"
      >
        <TextField
          id="usernameInput"
          label="Username"
          variant="standard"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          value={user.username}
        />
        <TextField
          id="passWordInput"
          label="Password"
          variant="standard"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          value={user.password}
        />
      </FormControl>
    </Box>
  );
};

export default ExistingUserForm;
