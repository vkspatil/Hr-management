import { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
  Avatar,
} from "@mui/material";
import { addUser } from "../Service/api";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

const initialValue = {
  empname: "",
  city: "",
  tel: "",
  designation: "",
};

const Container = styled(FormGroup)`
  width: 80%;
  margin: 5% auto 0 auto;
  & > div {
    margin: 20px;
  }
  border: 4px solid #ccc;
  border-radius: 10px;
  display: flex;
  background-color: #ffecb3;
`;
const InputArea = styled(FormControl)`
  margin: 1%;
`;

const AddEmployee = () => {
  const [user, setUser] = useState(initialValue);
  const { empname, city, tel, designation } = user;

  let navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all");
  };

  return (
    <Container>
      <Typography
        variant="h4"
        sx={{
          margin: "20px 20px 0",
          textAlign: "center",
          fontWeight: "bold",
          color: "#4caf50",
          backgroundColor: "#c5cae9",
          border: "2px solid ",
          borderRadius: "10px",
        }}
      >
        Add Employee
      </Typography>
      <Box>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 80, height: 80, margin: "0px auto" }}
        />
      </Box>
      <Box >
        <InputArea sx={{marginLeft: "8%"}}>
          <InputLabel htmlFor="my-input">Employee Name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="empname"
            value={empname}
            id="my-input"
          />
        </InputArea>
        <InputArea>
          <InputLabel htmlFor="my-input">City </InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="city"
            value={city}
            id="my-input"
          />
        </InputArea>
        <InputArea>
          <InputLabel htmlFor="my-input">Contact Number</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="tel"
            value={tel}
            id="my-input"
          />
        </InputArea>
        <InputArea>
          <InputLabel htmlFor="my-input">Designation</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="designation"
            value={designation}
            id="my-input"
          />
        </InputArea>
        <FormControl>
          <Button
            variant="contained"
            color="success"
            onClick={() => addUserDetails()}
            sx={{
              margin: "20px",
              textAlign: "center",
              fontWeight: "bold",
              borderRadius: "10px",
            }}
          >
            Add
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
};

export default AddEmployee;
