import express from "express"
import { login } from "../Controller/Auth.js"
import { updatechaneldata,getallchanels } from "../Controller/channel.js";
const routes=express.Router();

routes.post('/login',login)
routes.patch('/update/:id',updatechaneldata)
 routes.get('/getallchannel',getallchanels)

export default routes;