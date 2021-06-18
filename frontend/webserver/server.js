import loadConfig from "./utils/EnvLoader.js";
loadConfig();   // it will ensure to load first

import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import setupAPIProxy from "./control/setupAPIProxy.js";


const app = express();


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded());

// app use static file for react
app.use(express.static(path.join(__dirname, './build')));

// anything api is using proxy
setupAPIProxy(app);

// patch for CSR issue ( refresh direct page error )
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, './build/index.html'), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
});

// simple route
app.get("/", (req, res) => {
  res.status(404).json({ message: "Page Not Found" });
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});