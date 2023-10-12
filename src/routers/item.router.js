import express from "express"
import {getAllItems,addItem, deleteItem, editItem} from '../controllers/item.controller'

const router=express.Router()

router.route("/").get(getAllItems);
router.route("/").post(addItem);
router.route("/:id").delete(deleteItem);
router.route("/update/:id").post(editItem);
export {router}