import express from "express";
import morgan from "morgan";

const app =express();


import projectsRoutes from "./routes/projects.routes.js"; 


// Middlewares
app.use(morgan("dev"));
app.use(express.json());

app.use(projectsRoutes);

export default app;