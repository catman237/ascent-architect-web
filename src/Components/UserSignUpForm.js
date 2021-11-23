import { useState } from "react";
import { Box, Switch } from "@mui/material";
import ExistingUserForm from "./ExistingUserForm";
import NewUserForm from "./NewUserForm";

const UserSignUpForm = ({ user, setUser }) => {
  const [existingUser, setExistingUser] = useState(true);

  return (
    <Box className="userFormContainer">
      <Switch></Switch>
      {!existingUser ? (
        <ExistingUserForm user={user} setUser={setUser} />
      ) : (
        <NewUserForm user={user} setUser={setUser} />
      )}
    </Box>
  );
};

export default UserSignUpForm;
