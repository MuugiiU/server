const {Router}=require("express");

const{createTravel,getAllTravel,getTravel,updateTravel,delteTravel}=require("../controllers/travels")

const router=Router();
router.post("/",createTravel);
router.get("/",getAllTravel);
router.get("/:id",getTravel);
router.put("/:id",updateTravel);
router.delete("/:id",delteTravel);
 module.exports=router;