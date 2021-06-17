import React, { useState } from "react";
import { create } from "../../control/api/contactAPIControl";

const AddContact = () => {
  const defaultContact = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  };
  const [contact, setContact] = useState(defaultContact);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const saveContact = () => {
    const { first_name, last_name, phone, email } = contact;
    var data = { first_name, last_name, phone, email } ;

    create(data)
    .then(res => {
        const { id, first_name, last_name, phone, email } = res.data;
        setContact({ id, first_name, last_name, phone, email });
        setSubmitted(true);
    })
    .catch(e => {
        console.log(e);
    });
  };

  const newContact = () => {
    setContact(defaultContact);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Contact created!</h4>
          <button className="btn btn-success" onClick={newContact}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              required
              value={contact.first_name}
              onChange={handleInputChange}
              name="first_name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              required
              value={contact.last_name}
              onChange={handleInputChange}
              name="last_name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              required
              value={contact.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              required
              value={contact.phone}
              onChange={handleInputChange}
              name="phone"
            />
          </div>

          <button onClick={()=>saveContact()} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddContact;