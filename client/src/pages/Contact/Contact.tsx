import React, { useState } from "react";
import { BigHeader } from "../../components/BigHeader/BigHeader";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Contact = () => {
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
      <form onSubmit={handleSubmit}>
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
          <Button type="submit" value="submit" variant="contained" color="primary" className="submitButton" >Reach Out!</Button>
        </div>
      </form>
    </div>
  );
};
