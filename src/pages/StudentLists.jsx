// import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@mui/styles";

import {
  AppBar,
  Container,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  button: {
    color: "red",
    marginTop: "15px",
    // marginLeft: "50px",
  },
  link: {
    textDecoration: "none",
    fontSize: "20px",
    backgroundColor: "#00BFFF",
    color: "white",
    padding: "8px",
    borderRadius: "5px",
    fontWeight: 500,
  },
  tableHead: {
    color: "red",
  },
}));

export default function StudentLists() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="md">
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Student List
            </Typography>
          </Toolbar>
        </AppBar>
        <TableContainer component={Paper}>
          <Table>
            <TableHead color="primary">
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Nhan</TableCell>
                <TableCell>Hoang</TableCell>
                <TableCell>18</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>nhan@gmail.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>Nguyen</TableCell>
                <TableCell>Bao</TableCell>
                <TableCell>19</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>bao@gmail.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>Nguyen</TableCell>
                <TableCell>Hieu</TableCell>
                <TableCell>20</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>Hieu@gmail.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell>Le</TableCell>
                <TableCell>Thanh</TableCell>
                <TableCell>17</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>thanh@gmail.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5</TableCell>
                <TableCell>Le</TableCell>
                <TableCell>Na</TableCell>
                <TableCell>18</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>na@gmail.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>6</TableCell>
                <TableCell>Anh</TableCell>
                <TableCell>Bao</TableCell>
                <TableCell>18</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>bao@gmail.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>7</TableCell>
                <TableCell>Minh</TableCell>
                <TableCell>Nghia</TableCell>
                <TableCell>23</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>nghia@gmail.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>8</TableCell>
                <TableCell>Minh</TableCell>
                <TableCell>Ky</TableCell>
                <TableCell>25</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>minh@gmail.com</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <br />

        <Link to="/add-student" className={classes.link}>
          Add Student
        </Link>
      </Container>
    </div>
  );
}
