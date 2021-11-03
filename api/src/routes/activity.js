const { Router } = require('express');
const {Activity} = require('../db.js')
const router = Router();


/*
?    [ ] POST /activity:
?    Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
?    Crea una actividad turística en la base de datos
*/



router.get('/', (req, res)=>{
    return Activity.findAll()
    .then((act) => {
        res.send(act)
    })
})

router.post('/', async (req,res) => {
    const { name, difficulty, duration, season} = req.body;
    try {
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
            include : {
                Activity
            }
        });
        res.send("newActivity");
    }catch(error){
        res.send(error)
    }
});


module.exports = router;
