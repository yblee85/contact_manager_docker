import React, { useState, useEffect } from "react";
import { get, update, destroy } from "../../control/api/contactAPIControl.js";

const Contact = props => {
  const defaultContact = {
        id: null,
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
  };
  const [contact, setContact] = useState(defaultContact);

  const getContact = id => {
    get(id)
      .then(res => {
        setContact(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getContact(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const updateContact = () => {
    update(contact.id, contact)
      .then(res => {
        props.history.push("/contact");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteContact = () => {
    destroy(contact.id)
      .then(res => {
        props.history.push("/contact");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {contact ? (
        <div className="edit-form">
          <h4>Detail</h4>
          <form>
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
          </form>


          <button className="btn btn-danger" onClick={deleteContact}>
            Delete
          </button>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={updateContact}
          >
            Update
          </button>
          
        </div>
      ) : (
        <div>
          <br />
          <p>Select a contact</p>
        </div>
      )}
    </div>
  );
};

export default Contact;