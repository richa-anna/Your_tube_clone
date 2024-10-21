import express from "express"
import { likevideocontroller } from "../Controller/like.js";
import { viewscontroller } from "../Controller/views.js";
import { uploadvideo,getallvideos } from "../Controller/video.js";
import { historycontroller,deletehistory,getallhistorycontroller } from "../Controller/History.js";
import { watchlatercontroller,getallwatchlatervontroller,deletewatchlater } from "../Controller/watchlater.js";
import { likedvideocontroller,getalllikedvideo,deletelikedvideo } from "../Controller/likedvideo.js";
 import upload from "../Helper/filehelper.js";
 import auth  from "../middleware/auth.js"
const routes=express.Router();
routes.post("/uploadvideo",auth,upload.single("file"),uploadvideo)

routes.get("/getvideos",getallvideos)
routes.patch('/like/:id',auth,likevideocontroller)
routes.patch('/view/:id',viewscontroller)

routes.post('/history',auth,historycontroller)
routes.get('/getallhistory',getallhistorycontroller)
routes.delete('/deletehistory/:userid',auth,deletehistory)

routes.post('/watchlater',auth,watchlatercontroller)
routes.get('/getallwatchlater',getallwatchlatervontroller)
routes.delete('/deletewatchlater/:videoid/:viewer',auth,deletewatchlater)

routes.post('/likevideo',auth,likedvideocontroller)
routes.get('/getalllikevide',getalllikedvideo)
routes.delete('/deletelikevideo/:videoid/:viewer',auth,deletelikedvideo)

export default routes;