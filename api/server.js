import loadConfig from "./utils/EnvLoader.js";
loadConfig();   // it will ensure to load first

import express from "express";
import cors from "cors";
import contact_router from './route/contact/index.js'
import ReqValidator from "./control/ReqValidator.js";


const app = express();

const allowOrigins = process.env.API_ALLOW_ORIGINS?process.env.API_ALLOW_ORIGINS.split(","):[]
const corsOptions = {
  origin: allowOrigins
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "OK" });
});

app.get("/api/login", (req, res)=>{
  res.json({ message: "OK", api_key:process.env.API_KEY });
})

app.use("/api", ReqValidator);
app.use("/api/contact", contact_router);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});