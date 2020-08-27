import React, { useState } from "react";
import { BigHeader } from "../../components/BigHeader/BigHeader";

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
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={e => {
              setFormData({ ...formData, firstName: e.target.value });
            }}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={e => {
              setFormData({ ...formData, lastName: e.target.value });
            }}
          />
        </div>
        <div className="formRow2">
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={e => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <input
            type="textarea"
            name="message"
            placeholder="Enter message here"
            onChange={e => {
              setFormData({ ...formData, message: e.target.value });
            }}
          />
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
