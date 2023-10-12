import express from "express";
import { addSale, getAllSales } from "../controllers/sale.controller";

const router = express.Router();

router.route("/").get(getAllSales)
router.route("/").post(addSale)

export { router }