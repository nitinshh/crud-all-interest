const express=require("express")
const router=express.Router();
const controller=require("../controllers/index")

router.post("/insert",controller.userController.insert);
router.get("/getRecord",controller.userController.getAllRecord)
router.patch("/updateSomeRecord",controller.userController.updateSomeRecords)
router.put("/updateAll",controller.userController.updateAllRecords)
router.delete("/deleteRecord",controller.userController.deleteRecords)

// Interst add  
router.post("/interstAdd",controller.userController.addInterst);

// Find Interst
router.get("/findInterst", controller.userController.findInterest);
router.post("/addUserWithInterst",controller.userController.addUserWithInterst);

module.exports=router 