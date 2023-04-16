const Candy = require('../schemas/candySchema');

exports.postCandy = async (req, res) => {

    const { name, description, price, imgURL } = req.body;

    if(!name || !description ||!price || !imgURL) {
        return res.status(400).json({ message: 'You need to enter all fields' })
    }

    const candy = await Candy.create({ name, description, price, imgURL })

    if(!candy) {
        return res.status(500).json({ message: 'Something went wrong when adding the candy' })
    }
    res.status(201).json(candy)

}

exports.getCandys = async (req, res) => {

    const candys = await Candy.find()
    .then (candys => res.status(200).json(candys))
    .catch (() => res.status(500).json ({ message: 'Something went wrong'}))
}

exports.getCandysById = async (req, res) => {

    const candy = await Candy.findById(req.params.id)

    if(!candy) {
        return res.status(404).json({ message: 'Could not find that candy'})
    }
    res.status(200).json(candy)
}

exports.updateCandys = async (req, res) => {

    const candy = await Candy.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if(!candy) {
        return res.status(404).json({ message: 'Could not find that candy'})
    }
    res.status(200).json(candy)    

}

exports.deleteCandy = async (req, res) => {

    const candy = await Candy.findByIdAndDelete(req.params.id)

    if(!candy) {
        return res.status(404).json({ message: 'Could not find that candy'})
    }
    res.status(200).json(candy)  
}