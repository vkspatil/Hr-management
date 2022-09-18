import react, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  styled,
} from "@mui/material";
import { getUsers, deleteUser } from "../Service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 1% auto 50px;
  background: #ef9a9a;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #ff5722;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;

const AllEmployee = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell align="center">Sr.No.</TableCell>
          <TableCell align="center">Employee Id</TableCell>
          <TableCell align="center">Employee Name</TableCell>
          <TableCell align="center">City</TableCell>
          <TableCell align="center">Contact Number</TableCell>
          <TableCell align="center">Designation</TableCell>
          <TableCell align="center">Actions</TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user, index) => (
          <TRow key={index}>
            <TableCell align="center">{index + 1}</TableCell>
            <TableCell align="center">{user._id}</TableCell>{" "}
            {/* change it to user.id to use JSON Server */}
            <TableCell align="center">{user.empname}</TableCell>
            <TableCell align="center">{user.city}</TableCell>
            <TableCell align="center">{user.tel}</TableCell>
            <TableCell align="center">{user.designation}</TableCell>
            <TableCell align="center">
              <Button
                color="primary"
                variant="contained"
                sx={{
                  margin: "5px",
                  textAlign: "center",
                  fontWeight: "bold",
                  borderRadius: "10px",
                  width:"60px"
                }}
                component={Link}
                to={`/edit/${user._id}`}
              >
                Edit
              </Button>{" "}
              {/* change it to user.id to use JSON Server */}
              <Button
                color="error"
                variant="contained"
                sx={{
                    margin: "5px",
                    textAlign: "center",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    width:"60px"
                  }}
                onClick={() => deleteUserData(user._id)}
              >
                Delete
              </Button>{" "}
              {/* change it to user.id to use JSON Server */}
            </TableCell>
          </TRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllEmployee;
