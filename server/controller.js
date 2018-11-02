module.exports ={
    getHouses: (req,res) =>{
        const dbInstance = req.app.get('db')
        console.log('Server is working')

        dbInstance.gethouses()
            .then(houses => res.status(200).send(houses))
            .catch(err =>{
                res.status(500).send({errorMessage: "Uh-oh!"})
                console.log(err);
            })
    },
    addHouse: (req,res) =>{
        const dbInstance = req.app.get('db');
        const {propertyname, address, city, state, zip} = req.body;
        console.log("House Added", req.body)

        dbInstance.addhouse([propertyname, address, city, state, zip])
            .then( houses => res.status(201).send(houses))
            .catch(err => {
                res.status(500).send({errorMessage: "Sorry, That House was not Added"});
                console.log(err)
            })
    },
    deleteHouse: (req,res) =>{
        const dbInstance = req.app.get('db');
        console.log(dbInstance)
        const name = req.params;
        
        dbInstance.deleteHouse({name})
        .then(houses => res.status(200).send())
        .catch(err => {
            res.status(500).send({errorMessage: "Sorry, something went wrong on our end."})
            console.log(err); 
        })
    },
}