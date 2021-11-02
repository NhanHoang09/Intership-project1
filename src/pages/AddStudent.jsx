import { Container, Box, TextField, Button, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  container: {
    width: 200,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    margin: "auto",
  },
  item: {
    marginTop: "26px",
  },
  form: {
    border: "2px solid #333",
    boxShadow: "5px 10px #888888",
    padding: "15px",
  },
}));

export default function AddStudent() {
  const classes = useStyle();
  return (
    <div>
      <Container className={classes.container} maxWidth="sm">
        <Box component="form" autoComplete="off" className={classes.form}>
          <div className={classes.item}>
            <Typography variant="h4">Add Student</Typography>
          </div>
          <div className={classes.item}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div className={classes.item}>
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div className={classes.item}>
            <TextField
              id="outlined-basic"
              label="Age"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div className={classes.item}>
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div className={classes.item}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div className={classes.item}>
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </Box>
      </Container>
    </div>
  );
}
