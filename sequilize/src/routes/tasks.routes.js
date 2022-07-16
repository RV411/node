import { Router } from "express";
import { getTasks,getTask,createTask,updateTask,deleteTask } from "../controllers/tasks-controller.js";

const router=Router();

router.get("/getTasks",getTasks);
router.get("/getTask/:id",getTask);
router.post("/getTasks",createTask);
router.put("/getTasks/:id",updateTask);
router.delete("/getTasks/:id",deleteTask);

export default router;