import express from "express";

import { contactForm } from "../controllers/contactController.mjs";


const router = express.Router();



/* POST API */

router.post("/contact", contactForm);



export default router;