import { Task } from "../models/Task.js";

export const getTasks=async(req,res)=>{
    try {
        const tasks=await Task.findAll();
        res.json(tasks);
    } catch (error) {   
        return res.status(5000).json({message:error.message});
    }
}

export const getTask=async(req,res)=>{
    try {
        const {id}=req.params;
        const task=await Task.findOne({
            where:{
                id,
            }            
        });
        if(!task){
            return res.status(404).json({message:"Project does not exist"})
        }
        res.json(task)
    } catch (error) {
        return res.status(5000).json({message:error.message});
    }
}

export const createTask=async(req,res)=>{
    const {name,done,projectId}=req.body;
    try {
        const newTask=await Task.create({
            name,
            done,
            projectId
        })
        res.json(newTask)
    } catch (error) {
        return res.status(5000).json({message:error.message});        
    }
}

export const updateTask=async(req,res)=>{
    try {
        const {id}=req.params;
        const task=await Task.findOne({
            where:{id},
        });
        task.set(req.body);
        await task.save();
        return res.json(task);
    } catch (error) {
        return res.status(5000).json({message:error.message});        
    }
}

export const deleteTask=async(req,res)=>{
    try {
        const {id}=req.params;
        await Task.destroy({
            where:{
                id,
            }
        })
        res.sendStatus(204);
    } catch (error) {
        return res.status(5000).json({message:error.message});        
    }
}



