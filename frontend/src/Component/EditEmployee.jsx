import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,Avatar
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getUsers, editUser } from "../Service/api";

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
  background-color: #d1c4e9;
`;
const InputArea = styled(FormControl)`
  margin: 1%;
`;

const EditEmployee = () => {
  const [user, setUser] = useState(initialValue);
  const { empname, city, tel, designation } = user;
  const { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const editUserDetails = async () => {
    const response = await editUser(id, user);
    navigate("/all");
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Container injectFirst>
      <Typography
        variant="h4"
        sx={{
          margin: "20px",
          textAlign: "center",
          fontWeight: "bold",
          color: "#ff5252",
          backgroundColor: "#c5cae9",
          border: "2px solid ",
          borderRadius: "10px",
        }}
      >
        Edit Information
      </Typography>
      <Box>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 80, height: 80, margin: "0px auto" }}
        />
      </Box>
      <Box>
        <InputArea>
          <InputLabel htmlFor="my-input">Employee Name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="empname"
            value={empname}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </InputArea>
        <InputArea>
          <InputLabel htmlFor="my-input">City</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="city"
            value={city}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </InputArea>
        <InputArea>
          <InputLabel htmlFor="my-input">Contact Number</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="tel"
            value={tel}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </InputArea>
        <InputArea>
          <InputLabel htmlFor="my-input">Designation</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="designation"
            value={designation}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </InputArea>
        <FormControl>
          <Button
            variant="contained"
            onClick={() => editUserDetails()}
            sx={{
              margin: "20px",
              textAlign: "center",
              fontWeight: "bold",
              borderRadius: "10px",
              backgroundColor: "#0063cc",
              borderColor: "#0063cc",
            }}
          >
            SAVE
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
};

export default EditEmployee;
