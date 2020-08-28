import React, { useState } from "react";
import { BigHeader } from "../../components/BigHeader/BigHeader";
import { SmallHeader } from "../../components/SmallHeader/SmallHeader";
import { ContactInfo } from "../../components/ContactInfo/ContactInfo";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const resume = require("../../assets/resume.pdf");

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
      <SmallHeader
        id="contactInfoHeader"
        text="Contact me via email or phone. Also, check out my GitHub, LinkedIn, and resume."
      />
      <div className="contactInfoGrid">
        <ContactInfo type="Email" value="jrgronewald@gmail.com" />
        <ContactInfo type="Phone" value="(404)-242-0029" />
        <ButtonLink
          id="gitHubButton"
          buttonText="GitHub"
          URL="https://www.github.com/jameygronewald"
          iconHTML={<i className="devicon-github-plain"></i>}
        />
        <ButtonLink
          id="linkedInButton"
          buttonText="LinkedIn"
          URL="https://www.linkedin.com/in/jameygronewald/"
          iconHTML={<i className="devicon-linkedin-plain"></i>}
        />
        <ButtonLink
          id="resumeButton"
          buttonText="Resume"
          URL={resume}
          iconHTML=""
        />
      </div>
      <SmallHeader id="formHeader" text="Or send me a message here!" />
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
          <Button
            type="submit"
            value="submit"
            variant="contained"
            color="primary"
            className="submitButton"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
