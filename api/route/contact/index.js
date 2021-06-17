import { create, findOne, findAll, update, destroy } from "../../control/ContactManager.js";
import { asyncMiddleware } from 'middleware-async';
import express from "express";

const router = express.Router();


router.post("/", asyncMiddleware( create ));
router.get("/", asyncMiddleware( findAll ));


router.get("/:id", asyncMiddleware( findOne ));
router.put("/:id", asyncMiddleware( update ));


router.delete("/:id", asyncMiddleware( destroy ));

export default router;