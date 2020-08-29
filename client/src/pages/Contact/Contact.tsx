import React, { useState } from "react";
import { BigHeader } from "../../components/BigHeader/BigHeader";
import { SmallHeader } from "../../components/SmallHeader/SmallHeader";
import { ContactInfo } from "../../components/ContactInfo/ContactInfo";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import sendEmail from "../../utils/nodeMailerHelper";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const resume = require("../../assets/resume.pdf");

export const Contact = () => {
  const [formData, setFormData] = useState({});

  const sentEmailToast = (message: string) => toast.info(message);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    submitMessage(formData);
  };

  const submitMessage = (messageBody: {}) => {
    axios.post("/sendEmail", messageBody).then(response => {
      sentEmailToast(response.data.message);
      // add a ref to clear out inputs
    })
    .catch(err => {
      console.log(err)
    });
  };

  return (
    <div className="contactContainer">
      <ToastContainer className="emailToast" position="top-right" autoClose={5000} hideProgressBar />
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
            label="Name"
            variant="outlined"
            name="name"
            onChange={e => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
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
        </div>
        <div className="formRow2">
          <TextField
            className="input"
            label="Company"
            variant="outlined"
            name="company"
            onChange={e => {
              setFormData({ ...formData, company: e.target.value });
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
