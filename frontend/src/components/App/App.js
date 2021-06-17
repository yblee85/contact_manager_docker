import React from "react";
import { Link, Switch, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

import AddContact from "../AddContact/AddContact.js";
import Contact from "../Contact/Contact.js";
import ContactList from "../ContactList/ContactList.js";

const App = () => {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/contact" className="navbar-brand">
            Contacts
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/contact"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/contact"]} component={ContactList} />
            <Route exact path="/add" component={AddContact} />
            <Route path="/contact/:id" component={Contact} />
          </Switch>
        </div>
      </div>
    );
}

export default App;
