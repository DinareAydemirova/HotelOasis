const Team= require("../models/teamModel")

const getAllTeam=async (req, res) => {
	try {
        const member = await Team.find()
        res.status(200).send(member);
    } catch (error) {
        res.status(500).send(error)
    }
}

const postMember=async (req, res) => {
	try {
        const obj=req.body
        const newMember=await Team(obj)
        newMember.save()
        res.status(201).send(newMember);
    } catch (error) {
        res.status(400).send(error)
    }
}

const getMemberById=async (req, res) => {
	try {
        const member=await Team.findById(req.params.id)
        res.status(200).send(member);
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteMemberById=async (req, res) => {
	try {
        const member=await Team.findByIdAndDelete(req.params.id)
        res.status(200).send(member);
    } catch (error) {
        res.status(500).send(error)
    }
}

const patchMemberId = async (req, res) => {
    try {
      const member=await Team.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).send(member);
    } catch (error) {
      res.status(400).send(error)
    }
  };

  const putMemberById = async (req, res) => {
    try {
      const member=await Team.findOneAndReplace({_id:req.params.id}, req.body)
      res.status(200).send(member);
    } catch (error) {
      res.status(400).send(error)
    }
  };

module.exports= {getAllTeam, postMember,getMemberById, deleteMemberById, patchMemberId, putMemberById}