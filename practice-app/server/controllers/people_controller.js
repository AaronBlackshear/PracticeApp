const axios = require('axios');

module.exports = {

    postPeople: (req,res,next) => {
        const dbInstance = req.app.get('db');
        // const { id,name } = req.params;

        dbInstance.create_person()
        .then(() => res.status(200).json())
        .catch(() => res.status(500).json());
    }

}