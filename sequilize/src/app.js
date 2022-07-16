import express from "express";
import morgan from "morgan";

const app =express();


import projectsRoutes from "./routes/projects.routes.js"; 
import tasksRoutes from "./routes/tasks.routes"; 


// Middlewares
app.use(morgan("dev"));
app.use(express.json());

app.use(projectsRoutes);
app.use(tasksRoutes);

export default app;