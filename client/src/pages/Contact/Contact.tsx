import React, { useState } from "react";
import { BigHeader } from "../../components/BigHeader/BigHeader";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       "& .MuiTextField-root": {
//         margin: theme.spacing(1),
//         width: "40%",
//       },
//     },
//   })
// );

export const Contact = () => {
  // const classes = useStyles();

  const [formData, setFormData] = useState({});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contactContainer">
      <BigHeader
        class="contactHeader"
        text="Let's connect and build something."
      />
      <form onSubmit={handleSubmit} /* className={classes.root} */>
        <div className="formRow1">
          <TextField
          className="input"
            required
            label="First Name"
            variant="outlined"
            name="firstName"
            onChange={e => {
              setFormData({ ...formData, firstName: e.target.value });
            }}
          />
          <TextField
          className="input"
            required
            label="Last Name"
            variant="outlined"
            name="lastName"
            onChange={e => {
              setFormData({ ...formData, lastName: e.target.value });
            }}
          />
        </div>
        <div className="formRow2">
          <TextField
          className="input"
            required
            label="Email"
            variant="outlined"
            name="email"
            onChange={e => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <TextField
          className="input"
            label="Phone Number"
            variant="outlined"
            name="email"
            onChange={e => {
              setFormData({ ...formData, phone: e.target.value });
            }}
          />
        </div>
        <div className="formRow3">
          <TextField
            label="Enter message here"
            className="messageInput"
            multiline
            rows={4}
            variant="outlined"
            name="message"
            onChange={e => {
              setFormData({ ...formData, message: e.target.value });
            }}
          />
        </div>
        <div className="formRow4">
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};
