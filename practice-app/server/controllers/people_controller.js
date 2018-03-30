const axios = require('axios');

module.exports = {

    getPeople: (req,res,next) => {
        const dbInstance = req.app.get('db');
        // const { id,name } = req.params;

        dbInstance.show_people()
        .then(person => res.status(200).json(person))
        .catch((err) => res.status(500).json(err));
    },
    addName: (req,res) => {
        const dbInstance = req.app.get('db');
        const { first,last } = req.body;

        dbInstance.add_names([first,last])
        .then(person => res.status(200).json(person))
        .catch(err => console.log(err));
    },
    changeName: (req,res) => {
        const dbInstance = req.app.get('db');
        const { first,last } = req.body;
        const { id } = req.params;
        
        dbInstance.change_names([id,first,last])
        .then(person => res.status(200).json(person))
        .catch(err => console.log(err));
    }

}