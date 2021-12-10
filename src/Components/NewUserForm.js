import React from "react";
import {
  Box,
  FormControl,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

const NewUserForm = ({ user, setUser }) => {

  const rangeArray = (start, end) => {
    let rangeArr = [];
    if (end === undefined) {
      end = start;
      start = 1;
    }
    for (let i = start; i < end; i += 1) {
      rangeArr.push(i);
    }
    return rangeArr;
  };

  const formatHeight = (num) => {
    let feetFromInches = Math.floor(num / 12);
    let inchesRemainder = num % 12;
    return `${feetFromInches}'-${inchesRemainder}''`;
  };

  const userPost = (user) => {
    console.log(user);
  };

  return (
    <Box className="userFormTextInputContainer">
      <Typography className="textInputHeader">Create an account</Typography>
      <FormControl
        sx={{ m: 1, minWidth: 120 }}
        className="selectore"
        variant="standard"
      >
        <TextField
          id="usernameInput"
          label="User Name"
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
        <TextField
          id="firstNameInput"
          label="First Name"
          variant="standard"
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          value={user.firstName}
        />
        <TextField
          id="lastNameInput"
          label="Last Name"
          variant="standard"
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          value={user.lastName}
        />
        <TextField
          id="homeInput"
          label="Home"
          variant="standard"
          onChange={(e) => setUser({ ...user, home: e.target.value })}
          value={user.home}
        />
        <FormControl className="selector">
          <InputLabel id="heightSelector">Height</InputLabel>
          <Select
            labelId="heightSelector"
            id="height"
            label="height"
            onChange={(e) => setUser({ ...user, height: e.target.value })}
            value={user.height}
          >
            {rangeArray(24, 85).map((number) => {
              return (
                <MenuItem value={number}> {formatHeight(number)}</MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl className="selector">
          <InputLabel id="apeIndexSelector">Ape Index</InputLabel>
          <Select
            labelId="apeIndexSelector"
            id="apeIndex"
            label="apeIndex"
            onChange={(e) => setUser({ ...user, apeIndex: e.target.value })}
            value={user.apeIndex}
          >
            {rangeArray(-12, 21).map((number) => {
              return <MenuItem value={number}>{number} inches</MenuItem>;
            })}
          </Select>
        </FormControl>

        <FormControl className="selector">
          <InputLabel id="weightSelector">Weight</InputLabel>
          <Select
            labelId="weighSelector"
            id="weight"
            label="weight "
            onChange={(e) => setUser({ ...user, weight: e.target.value })}
            value={user.weight}
          >
            {rangeArray(50, 300).map((number) => {
              return <MenuItem value={number}>{number} lbs</MenuItem>;
            })}
          </Select>
        </FormControl>

        <FormControl className="selector">
          <InputLabel id="ageSelector">Age</InputLabel>
          <Select
            labelId="ageSelector"
            id="ageSelector"
            label="ageSelector"
            onChange={(e) => setUser({ ...user, age: e.target.value })}
            value={user.age}
          >
            {rangeArray(18, 101).map((number) => {
              return <MenuItem value={number}>{number}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <Button onClick={() => userPost(user)}>Sign Up</Button>
      </FormControl>
    </Box>
  );
};

export default NewUserForm;
