const Restaurant= require("../models/restaureantImagesModel")

const getAllImages=async (req, res) => {
	try {
        const gallery = await Restaurant.find()
        res.status(200).send(gallery);
    } catch (error) {
        res.status(500).send(error)
    }
}

const postImages=async (req, res) => {
	try {
        const obj=req.body
        const newImage=await Restaurant(obj)
        newImage.save()
        res.status(201).send(newImage);
    } catch (error) {
        res.status(400).send(error)
    }
}

const getImageById=async (req, res) => {
	try {
        const gallery=await Restaurant.findById(req.params.id)
        res.status(200).send(gallery);
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteImageById=async (req, res) => {
	try {
        const gallery=await Restaurant.findByIdAndDelete(req.params.id)
        res.status(200).send(gallery);
    } catch (error) {
        res.status(500).send(error)
    }
}

const patchgImageId = async (req, res) => {
    try {
      const gallery=await Restaurant.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).send(gallery);
    } catch (error) {
      res.status(400).send(error)
    }
  };

  const putImageyById = async (req, res) => {
    try {
      const gallery=await Restaurant.findOneAndReplace({_id:req.params.id}, req.body)
      res.status(200).send(gallery);
    } catch (error) {
      res.status(400).send(error)
    }
  };

module.exports= {getAllImages, postImages,getImageById, deleteImageById, patchgImageId, putImageyById}