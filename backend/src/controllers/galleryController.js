const Gallery= require("../models/galeryModel")

const getAllImages=async (req, res) => {
	try {
        const gallery = await Gallery.find()
        res.status(200).send(gallery);
    } catch (error) {
        res.status(500).send(error)
    }
}

const postImages=async (req, res) => {
	try {
        const obj=req.body
        const newImage=await Gallery(obj)
        newImage.save()
        res.status(201).send(newImage);
    } catch (error) {
        res.status(400).send(error)
    }
}

const getImageById=async (req, res) => {
	try {
        const gallery=await Gallery.findById(req.params.id)
        res.status(200).send(gallery);
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteImageById=async (req, res) => {
	try {
        const gallery=await Gallery.findByIdAndDelete(req.params.id)
        res.status(200).send(gallery);
    } catch (error) {
        res.status(500).send(error)
    }
}

const patchgImageId = async (req, res) => {
    try {
      const gallery=await Gallery.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).send(gallery);
    } catch (error) {
      res.status(400).send(error)
    }
  };

  const putImageyById = async (req, res) => {
    try {
      const gallery=await Gallery.findOneAndReplace({_id:req.params.id}, req.body)
      res.status(200).send(gallery);
    } catch (error) {
      res.status(400).send(error)
    }
  };

module.exports= {getAllImages, postImages,getImageById, deleteImageById, patchgImageId, putImageyById}