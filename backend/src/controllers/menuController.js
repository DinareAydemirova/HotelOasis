const Menu= require("../models/menuModel")

const getAllMenu=async (req, res) => {
	try {
        const meal = await Menu.find()
        res.status(200).send(meal);
    } catch (error) {
        res.status(500).send(error)
    }
}

const postMeals=async (req, res) => {
	try {
        const obj=req.body
        const newMeal=await Menu(obj)
        newMeal.save()
        res.status(201).send(newMeal);
    } catch (error) {
        res.status(400).send(error)
    }
}

const getMealById=async (req, res) => {
	try {
        const meal=await Menu.findById(req.params.id)
        res.status(200).send(meal);
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteMealById=async (req, res) => {
	try {
        const meal=await Menu.findByIdAndDelete(req.params.id)
        res.status(200).send(meal);
    } catch (error) {
        res.status(500).send(error)
    }
}

const patchgMealId = async (req, res) => {
    try {
      const meal=await Menu.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).send(meal);
    } catch (error) {
      res.status(400).send(error)
    }
  };

  const putMealById = async (req, res) => {
    try {
      const meal=await Menu.findOneAndReplace({_id:req.params.id}, req.body)
      res.status(200).send(meal);
    } catch (error) {
      res.status(400).send(error)
    }
  };

module.exports= {getAllMenu, postMeals,getMealById, deleteMealById, patchgMealId, putMealById}