import React, { useState, useEffect } from "react";
import { getAll } from "../../control/api/contactAPIControl.js";
import { Link } from "react-router-dom";

const ContactList = () => {
  const [contactList, setContactList] = useState([]);
  const [currentContact, setCurrentContact] = useState();
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    refreshList();
  }, []);

  const getAllContacts = () => {
    getAll()
    .then(res => {
        setContactList(res.data);
    })
    .catch(e => {
        console.log(e);
    });
  };

  const refreshList = () => {
    getAllContacts();
    setCurrentContact(null);
    setCurrentIndex(-1);
  };

  const selectContact = (index) => {
    setCurrentContact(contactList[index]);
    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Contacts</h4>

        <ul className="list-group">
          {contactList &&
            contactList.map((contact, i) => (
              <li
                className={
                  "list-group-item " + (i === currentIndex ? "active" : "")
                }
                onClick={() => selectContact(i)}
                key={i}
              >
                {contact.first_name} {contact.last_name}
              </li>
            ))}
        </ul>

      </div>
      <div className="col-md-6">
        {currentContact && (
          <div>
            <h4>Detail</h4>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentContact.first_name} {currentContact.last_name}
            </div>
            <div>
              <label>
                <strong>email:</strong>
              </label>{" "}
              {currentContact.email}
            </div>
            <div>
              <label>
                <strong>phone:</strong>
              </label>{" "}
              {currentContact.phone}
            </div>

            <Link
              to={"/contact/" + currentContact.id}
              className="btn btn-primary"
            >
              Edit
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactList;