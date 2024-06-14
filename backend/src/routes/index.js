const express = require("express")
const router = express.Router()
const galleryController= require("../controllers/galleryController")
const roomsController=require("../controllers/roomsController")
const teamController=require("../controllers/teamController")


router.get("/gallery", galleryController.getAllImages)
router.post("/gallery", galleryController.postImages)
router.get("/gallery/:id", galleryController.getImageById)
router.delete("/gallery/:id", galleryController.deleteImageById)
router.patch("/gallery/:id", galleryController.patchgImageId)
router.put("/gallery/:id", galleryController.putImageyById)


router.get("/rooms", roomsController.getAllRooms)
router.post("/rooms", roomsController.postRooms)
router.get("/rooms/:id", roomsController.getRoomById)
router.delete("/rooms/:id", roomsController.deleteRoomById)
router.patch("/rooms/:id", roomsController.patchRoomId)
router.put("/rooms/:id", roomsController.putRoomById)

router.get("/team", teamController.getAllTeam)
router.post("/team", teamController.postMember)
router.get("/team/:id", teamController.getMemberById)
router.delete("/team/:id", teamController.deleteMemberById)
router.patch("/team/:id", teamController.patchMemberId)
router.put("/team/:id", teamController.putMemberById)

module.exports = router