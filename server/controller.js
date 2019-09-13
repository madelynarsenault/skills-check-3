

const house = [
    {
        name:'',
        image:''
    }
];

const getName =(req, res) => {
    res.json(name)
}

const addName = (req, res) => {
    name.push(req.body);
    res.json(name);
}

const deleteName =(req, res) => {
    name.splice(+req.params.id, 1)
    res.status(200).send(name);
}

const updateName = (req,res) => {
    const updateId = req.params.id
    const updatingName = name.findIndex(name => name.id == updateId)
    let name = name[updatingName]

}

module.export = {
    getName,
    addName,
    deleteName
}