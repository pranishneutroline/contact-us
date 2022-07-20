  import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import * as Yup from "yup";
import "./popForm.css";
import { Form, Formik } from "formik";
import {ErrorMessage, useField} from "formik";

export default function FormDialog({label, ...props}) {
  const [open, setOpen] = React.useState(false);
//   const[field,meta] = useField(props);
// console.log(field, meta);
  const validate = Yup.object({
    fullName: Yup.string()
      .min(3, "Must be more than 2 characters")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is Required"),
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className="fixedButton"
      >
        get a Quote
      </Button>
      <Dialog open={open} onClose={handleClose}>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
        }}
        validationSchema={validate}
        onSubmit={(values,formikHelpers) => {
          console.log(values);
        }}
      >
         {() => (
          <Form>
          <DialogTitle className="popup_header"> Get a quote</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              name="fullName"
              fullWidth
              variant="outlined"
              autoComplete="off"
            />{" "}
            {/* <ErrorMessage component ="div" name={field.fullName} className="error" /> */}
            {/* <p style={{color:"red", margin:"0",fontSize:".8rem"}}>{formErrors.name}</p> */}
            <TextField
              autoFocus
              margin="dense"
              name="email"
              id="name"
              label="Email: "
              type="email"
              fullWidth
              variant="outlined"
              autoComplete="off"
              // value={formValues.email}
              // onChange={handleChange}
          
            />{" "}
            {/* <p style={{color:"red" ,margin:"0",fontSize:".8rem"}}>{formErrors.email}</p> */}
            <div className="tel">
              <TextField
                id="outlined-basic"
                label="Your organization"
                variant="outlined"
                name="org"
              />
              <TextField
                id="outlined-basic"
                label="your location"
                variant="outlined"
                name="location"
              />
            </div>
            <div className="tel">
              <FormControl sx={{ my: 1, width: 180 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  your country code
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  // value={age}
                  label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem>Nepal</MenuItem>
                  <MenuItem>India</MenuItem>
                  <MenuItem>USA</MenuItem>
                </Select>
                {/* <FormHelperText>With label + helper text</FormHelperText> */}
              </FormControl>
              <TextField
                sx={{ my: 1, maxWidth: 235 }}
                id="outlined-basic"
                label="phone"
                variant="outlined"
                type="number"
              />
            </div>
            <FormControl fullWidth sx={{ mb: 1 }}>
              <InputLabel id="demo-simple-select-label" variant="outlined">
                Select an Option
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select outline-basic"
                // value={age}
                label="  Select an Option"

                // onChange={handleChange}
              >
                <MenuItem>IOS App Development</MenuItem>
                <MenuItem>Andriod App development</MenuItem>
                <MenuItem>Web development</MenuItem>
                <MenuItem>Software Testing & Quality Assurance</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-multiline-static"
              label="Write something you want to talk about"
              multiline
              rows={4}
              fullWidth
              autoComplete="off"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" color="success">Submit</Button>
          </DialogActions>
        
        </Form>
         )}
      </Formik>
      </Dialog>
    </div>
  );
}
